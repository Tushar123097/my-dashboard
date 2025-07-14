import { useEffect, useState } from "react";
import axios from "axios";
import BatteryChart from "./components/BatteryChart";
function App() {

  const [batteryData, setBatteryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://batterydemoapi-521905205220.asia-south1.run.app/battery-data")
      .then((res) => {
        console.log(" API Response:", res.data);

        const { timestamp, soc, current, voltage } = res.data.data;

       const formattedData = timestamp.slice(0, 1000).map((time, index) => {
  const currentValue = parseFloat(current[index]);
  const voltageValue = parseFloat(voltage[index]);
  const socValue = parseFloat(soc[index]);

  const ampHours = currentValue * (1 / 30); // 2 minutes ≈ 1/30 hour

  return {
    time,
    SOC: socValue,
    Current: currentValue,
    Voltage: voltageValue,
    AmpereHours: ampHours,
  };
});


        setBatteryData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Battery Dashboard</h1>
      {loading ? (
        <p className="text-lg text-gray-600">Loading battery data...</p>
      ) : batteryData.length > 0 ? (
        <BatteryChart data={batteryData} />
      ) : (
        <p className="text-red-500">No battery data found.</p>
      )}
    </div>
  );
}

export default App;
