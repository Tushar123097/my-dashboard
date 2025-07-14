import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Brush,
} from "recharts";

const BatteryChart = ({ data }) => {
  return (
    <div className="w-full max-w-6xl bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Battery Time Series</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="SOC" stroke="#3b82f6" dot={false} />
          <Line type="monotone" dataKey="Current" stroke="#10b981" dot={false} />
          <Line type="monotone" dataKey="Voltage" stroke="#f59e0b" dot={false} />
          <Line type="monotone" dataKey="AmpereHours" stroke="#8b5cf6" dot={false} />
          <Brush dataKey="time" height={30} stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BatteryChart;
