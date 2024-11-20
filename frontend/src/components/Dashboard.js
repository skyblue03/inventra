import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import StatsCard from "./StatsCard";
import RecentActivities from "./RecentActivities";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Sample chart data for visualizing trends
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Stock Levels',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.1,
        pointRadius: 4,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-8">
      <h2 className="text-3xl font-bold text-blue-600">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard title="Total Stock" value="1200" icon="📦" />
        <StatsCard title="Low Stock" value="25" icon="⚠️" />
        <StatsCard title="Pending Orders" value="3" icon="⏳" />
        <StatsCard title="Revenue" value="$15,000" icon="💰" />
      </div>

      {/* Stock Trend Chart */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">Stock Trend</h3>
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <Line data={data} />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700">Recent Activities</h3>
        <RecentActivities />
      </div>
    </div>
  );
};

export default Dashboard;
