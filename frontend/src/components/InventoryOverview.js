import React from 'react';

const InventoryOverview = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Inventory Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500">Total Stock</h4>
                    <p className="text-xl font-bold">1234 items</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500">Low Stock Items</h4>
                    <p className="text-xl font-bold">5 items</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500">Pending Orders</h4>
                    <p className="text-xl font-bold">3 orders</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500">Top Products</h4>
                    <p className="text-xl font-bold">Product A</p>
                </div>
            </div>
        </div>
    );
};

export default InventoryOverview;
