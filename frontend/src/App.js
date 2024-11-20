import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';  // Import Sidebar
import Dashboard from './components/Dashboard';
import InventoryList from './components/InventoryList';
import AddInventory from './components/AddInventory';
import AiCommand from './components/AiCommand';
import './style/tailwind.css';

const App = () => {
    return (
        <Router>
            <div className="flex h-screen">
                <Sidebar /> {/* Sidebar stays fixed */}

                {/* Main content area */}
                <div className="flex-1 ml-64 sm:ml-72 lg:ml-40 py-6 px-4 sm:px-6 lg:px-4 overflow-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />  {/* Home route */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/inventory" element={<InventoryList />} />
                        <Route path="/add-inventory" element={<AddInventory />} />
                        <Route path="/ai-command" element={<AiCommand />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
