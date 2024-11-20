import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
