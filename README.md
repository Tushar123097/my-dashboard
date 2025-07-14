# React + Vite
# 🔋 Battery Data Visualization Dashboard

A modern and interactive dashboard built using **React**, **Tailwind CSS**, and **Recharts** to visualize battery performance data in real time.

> 🧪 Internship Assignment: Showcasing front-end skills, API integration, and data visualization.

---

## 📍 Live Demo

🌐 [Visit the Dashboard](https://my-dashboard-3xgw.vercel.app/)

---

## 📦 Tech Stack

- **React (Vite)**
- **Tailwind CSS** – for fast and responsive styling
- **Axios** – for fetching API data
- **Recharts** – for beautiful and interactive graphs
- **Vercel** – for instant and free deployment

---

## 📈 Features

✅ **Live API Integration**  
Fetches real-time time-series data from the API.

✅ **Interactive Chart**  
Displays an interactive line chart for:
- **State of Charge (SOC)**
- **Current (I)**
- **Voltage (V)**

✅ **Zoom & Tooltip**  
Users can explore data points easily with hover tooltips and zooming.

✅ **Responsive Dashboard**  
Fully responsive layout, clean UI using Tailwind CSS.

✅ **Proactive Data Insights**  
Ready to extend with extra features like:
- Calculating **Ampere-hours (Ah)** using `current * time`
- Plotting voltage vs. Ah for more advanced insights

---

## 🧠 Assignment Objective

### Core Tasks:
- ✅ Fetch API data
- ✅ Format & process time-series data
- ✅ Build a clean dashboard UI
- ✅ Plot interactive charts for SOC, Voltage, and Current

### Extra Exploration (Can be added):
- [ ] Calculate Ampere-hours (Ah) = current × duration  
- [ ] Add filters by date/time  
- [ ] Export chart as image or CSV  

---

## 📁 Installation & Setup (Optional for Reviewers)

```bash
# Clone the repo
git clone https://github.com/Tushar123097/my-dashboard.git
cd my-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
