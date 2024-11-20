import React, { useState } from 'react';
import apiClient from '../api/apiClient';
import './InventoryList.css';

const InventoryList = () => {
    const [inventory, setInventory] = useState([]);
    const [editing, setEditing] = useState(null);
    const [editData, setEditData] = useState({
        name: '',
        quantity: '',
        price: '',
        category: '',
        sku: '',
        supplier: '',
        expirationDate: '',
        location: '',
        brand: '',
        barcode: '',
        unitType: '',
        stockThreshold: '',
        discount: '',
        taxable: false,
    });

    const fetchInventory = () => {
        apiClient.get('/')
            .then((response) => setInventory(response.data))
            .catch((error) => console.error(error));
    };

    const handleDelete = (id) => {
        apiClient.delete(`/${id}`)
            .then(() => fetchInventory())
            .catch((error) => console.error(error));
    };

    const handleEdit = (item) => {
        setEditing(item.id);
        setEditData({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            category: item.category || '',
            sku: item.sku || '',
            supplier: item.supplier || '',
            expirationDate: item.expirationDate || '',
            location: item.location || '',
            brand: item.brand || '',
            barcode: item.barcode || '',
            unitType: item.unitType || '',
            stockThreshold: item.stockThreshold || '',
            discount: item.discount || '',
            taxable: item.taxable || false,
        });
    };

    const handleSave = (id) => {
        console.log('Saving data:', editData); // Debugging
        apiClient.put(`/${id}`, editData)
            .then(() => {
                setEditing(null);
                fetchInventory();
            })
            .catch((error) => {
                console.error("Failed to save changes:", error);
                alert("Failed to save changes. Please try again.");
            });
    };
    
    

    const handleCancel = () => {
        setEditing(null);
        setEditData({
            name: '',
            quantity: '',
            price: '',
            category: '',
            sku: '',
            supplier: '',
            expirationDate: '',
            location: '',
            brand: '',
            barcode: '',
            unitType: '',
            stockThreshold: '',
            discount: '',
            taxable: false,
        });
    };

    React.useEffect(() => {
        fetchInventory();
    }, []);

    return (
        <div className="inventory-container">
            <h2 className="inventory-header">Inventory List</h2>
            <table className="inventory-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>SKU</th>
                        <th>Supplier</th>
                        <th>Expiration Date</th>
                        <th>Location</th>
                        <th>Brand</th>
                        <th>Barcode</th>
                        <th>Unit Type</th>
                        <th>Stock Threshold</th>
                        <th>Discount</th>
                        <th>Taxable</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
    {inventory.map((item) => (
        <tr key={item.id}>
            {editing === item.id ? (
                <>
                    <td><input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /></td>
                    <td><input type="number" value={editData.quantity} onChange={(e) => setEditData({ ...editData, quantity: e.target.value })} /></td>
                    <td><input type="number" value={editData.price} onChange={(e) => setEditData({ ...editData, price: e.target.value })} /></td>
                    <td><input type="text" value={editData.category} onChange={(e) => setEditData({ ...editData, category: e.target.value })} /></td>
                    <td><input type="text" value={editData.sku} onChange={(e) => setEditData({ ...editData, sku: e.target.value })} /></td>
                    <td><input type="text" value={editData.supplier} onChange={(e) => setEditData({ ...editData, supplier: e.target.value })} /></td>
                    <td><input type="date" value={editData.expirationDate} onChange={(e) => setEditData({ ...editData, expirationDate: e.target.value })} /></td>
                    <td><input type="text" value={editData.location} onChange={(e) => setEditData({ ...editData, location: e.target.value })} /></td>
                    <td><input type="text" value={editData.brand} onChange={(e) => setEditData({ ...editData, brand: e.target.value })} /></td>
                    <td><input type="text" value={editData.barcode} onChange={(e) => setEditData({ ...editData, barcode: e.target.value })} /></td>
                    <td><input type="text" value={editData.unitType} onChange={(e) => setEditData({ ...editData, unitType: e.target.value })} /></td>
                    <td><input type="number" value={editData.stockThreshold} onChange={(e) => setEditData({ ...editData, stockThreshold: e.target.value })} /></td>
                    <td><input type="number" value={editData.discount} onChange={(e) => setEditData({ ...editData, discount: e.target.value })} /></td>
                    <td>
                        <input type="checkbox" checked={editData.taxable} onChange={(e) => setEditData({ ...editData, taxable: e.target.checked })} />
                    </td>
                    <td className="actions-cell">
                        <button onClick={() => handleSave(item.id)} className="save-btn">Save</button>
                        <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>{item.category || 'N/A'}</td>
                    <td>{item.sku || 'N/A'}</td>
                    <td>{item.supplier || 'N/A'}</td>
                    <td>{item.expirationDate || 'N/A'}</td>
                    <td>{item.location || 'N/A'}</td>
                    <td>{item.brand || 'N/A'}</td>
                    <td>{item.barcode || 'N/A'}</td>
                    <td>{item.unitType || 'N/A'}</td>
                    <td>{item.stockThreshold || 'N/A'}</td>
                    <td>{item.discount || 'N/A'}</td>
                    <td>{item.taxable ? 'Yes' : 'No'}</td>
                    <td className="actions-cell">
                        <button onClick={() => handleEdit(item)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(item.id)} className="delete-btn">Delete</button>
                    </td>
                </>
            )}
        </tr>
    ))}
</tbody>

            </table>
        </div>
    );
};

export default InventoryList;
