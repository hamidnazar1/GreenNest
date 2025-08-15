import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";

export default function ProductForm({ products, setProducts, editingProduct, setEditingProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    careTips: "",
    imageUrl: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingProduct) {
        // Update existing product
        const response = await axiosInstance.put(`/api/products/${editingProduct._id}`, formData);
        setProducts(products.map((p) => (p._id === editingProduct._id ? response.data : p)));
        setEditingProduct(null);
      } else {
        // Create new product
        const response = await axiosInstance.post("/api/products", formData);
        setProducts([...products, response.data]);
      }

      setFormData({ name: "", price: "", category: "", description: "", stock: "", careTips: "", imageUrl: "" });
    } catch (error) {
      alert("Failed to save product.");
    }
  };

  return (
    <form className="bg-white shadow-md p-6 rounded-lg mb-6" onSubmit={handleSubmit}>
      
      <input className="border p-2 w-full mb-3" name="name" value={formData.name} onChange={handleChange} placeholder="Plant Name" required />
      <input className="border p-2 w-full mb-3" name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input className="border p-2 w-full mb-3" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <textarea className="border p-2 w-full mb-3" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input className="border p-2 w-full mb-3" name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock Quantity" required />
      <textarea className="border p-2 w-full mb-3" name="careTips" value={formData.careTips} onChange={handleChange} placeholder="Care Tips (comma separated)" />
      <input className="border p-2 w-full mb-3" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required />
      
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" type="submit">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
