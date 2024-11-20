const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const router = express.Router();
const db = new sqlite3.Database('./db/inventory.db');

// Create inventory table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS inventory (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            quantity INTEGER,
            price REAL,
            category TEXT,
            sku TEXT,
            supplier TEXT,
            expirationDate TEXT,
            location TEXT
        )
    `);
});


// Get all inventory
router.get('/', (req, res) => {
    db.all('SELECT * FROM inventory', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});


// Add inventory
router.post('/', (req, res) => {
    const {
        name, quantity, price, category, sku, supplier, expirationDate, location,
        brand, barcode, unitType, stockThreshold, warehouseLocation,
        batchNumber, dateAdded, lastUpdated, discount, taxable, supplierContactInfo
    } = req.body;

    const query = `
        INSERT INTO inventory (
            name, quantity, price, category, sku, supplier, expirationDate, location,
            brand, barcode, unitType, stockThreshold, warehouseLocation,
            batchNumber, dateAdded, lastUpdated, discount, taxable, supplierContactInfo
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(
        query,
        [
            name, quantity, price, category, sku, supplier, expirationDate, location,
            brand, barcode, unitType, stockThreshold, warehouseLocation,
            batchNumber, dateAdded, lastUpdated, discount, taxable, supplierContactInfo
        ],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: this.lastID });
        }
    );
});



// AI Command route
router.post('/ai-command', (req, res) => {
    const { command } = req.body;

    // Simple AI logic
    if (command.includes('restock')) {
        return res.json({ action: 'Restock', message: 'Restock items below threshold.' });
    } else if (command.includes('summary')) {
        return res.json({ action: 'Summary', message: 'Generate a stock summary report.' });
    } else {
        return res.json({ action: 'Unknown', message: 'Command not recognized.' });
    }
});

//edit inventory items
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {
        name, quantity, price, category, sku, supplier,
        expirationDate, location, brand, barcode, unitType,
        stockThreshold, discount, taxable
    } = req.body;

    const query = `
        UPDATE inventory
        SET name = ?, quantity = ?, price = ?, category = ?, sku = ?, supplier = ?,
            expirationDate = ?, location = ?, brand = ?, barcode = ?, unitType = ?,
            stockThreshold = ?, discount = ?, taxable = ?
        WHERE id = ?
    `;

    const params = [
        name, quantity, price, category, sku, supplier,
        expirationDate, location, brand, barcode, unitType,
        stockThreshold, discount, taxable, id
    ];

    db.run(query, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Inventory updated successfully.' });
    });
});


//delete inventory items
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM inventory WHERE id = ?';
    db.run(query, [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Inventory deleted successfully.' });
    });
});

module.exports = router;
