import React, { useState } from 'react';
import apiClient from '../api/apiClient';

const AiCommand = () => {
    const [command, setCommand] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Input validation
        if (!command.trim()) {
            setError('Command cannot be empty.');
            return;
        }

        // Clear any previous errors
        setError('');

        // Send command to backend
        apiClient
            .post('/ai-command', { command })
            .then((res) => setResponse(res.data.message))
            .catch((error) => console.error(error));
    };

    return (
        <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-6">
            <h2 className="text-xl font-semibold text-gray-700">AI Commands</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input
                    type="text"
                    placeholder="Enter a command (e.g., restock items)"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
            {response && (
                <p className="mt-4 text-gray-800">
                    <strong>Response:</strong> {response}
                </p>
            )}
        </div>
    );
    
};

export default AiCommand;
