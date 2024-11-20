const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/inventory', inventoryRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
