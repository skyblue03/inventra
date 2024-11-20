import React from "react";

const RecentActivities = () => {
  const activities = [
    "Added 50 items of 'Chicken' to inventory.",
    "Sold 20 units of 'Milk'.",
    "Updated stock for 'Eggs'.",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold">Recent Activities</h4>
      <ul className="list-disc pl-6 mt-4">
        {activities.map((activity, index) => (
          <li key={index} className="text-gray-600">{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
