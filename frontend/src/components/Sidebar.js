import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen px-6 py-8 fixed top-0 left-0 w-50">
      <h1 className="text-xl font-semibold mb-8">HOME</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:text-blue-400">
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/reports" className="hover:text-blue-400">
            Reports
          </Link>
        </li>
        <li>
          <Link to="/orders" className="hover:text-blue-400">
            Orders
          </Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-blue-400">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/notifications" className="hover:text-blue-400">
            Notifications
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
