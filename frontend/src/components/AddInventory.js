import React, { useState } from 'react';
import apiClient from '../api/apiClient';
import './AddInventory.css';

const AddInventory = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [sku, setSku] = useState('');
    const [supplier, setSupplier] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [location, setLocation] = useState('');
    const [brand, setBrand] = useState('');
    const [barcode, setBarcode] = useState('');
    const [unitType, setUnitType] = useState('');
    const [stockThreshold, setStockThreshold] = useState('');
    const [discount, setDiscount] = useState('');
    const [taxable, setTaxable] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !quantity || !price) {
            setError('Name, quantity, and price are required.');
            return;
        }

        apiClient
            .post('/', {
                name, quantity, price, category, sku, supplier, expirationDate, location,
                brand, barcode, unitType, stockThreshold, discount, taxable
            })
            .then(() => {
                alert('Item added!');
                setName('');
                setQuantity('');
                setPrice('');
                setCategory('');
                setSku('');
                setSupplier('');
                setExpirationDate('');
                setLocation('');
                setBrand('');
                setBarcode('');
                setUnitType('');
                setStockThreshold('');
                setDiscount('');
                setTaxable(false);
            })
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="add-inventory-form">
            <h2 className="form-header">Add Inventory</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="SKU"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Supplier"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <input
                    type="date"
                    placeholder="Expiration Date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Barcode"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Unit Type (e.g., pcs, kg)"
                    value={unitType}
                    onChange={(e) => setUnitType(e.target.value)}
                    className="form-input"
                />
                <input
                    type="number"
                    placeholder="Stock Threshold"
                    value={stockThreshold}
                    onChange={(e) => setStockThreshold(e.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    placeholder="Discount (%)"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="form-input"
                />
                <label className="form-checkbox">
                    <input
                        type="checkbox"
                        checked={taxable}
                        onChange={(e) => setTaxable(e.target.checked)}
                    />
                    <span>Taxable</span>
                </label>
            </div>
            <button type="submit" className="form-button">Add</button>
        </form>
    );
};

export default AddInventory;
