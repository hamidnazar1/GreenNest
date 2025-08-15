import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import { useAuth } from '../context/AuthContext';

export default function ProductForm({
  products,
  setProducts,
  editingProduct,
  setEditingProduct,
  onClose, // <-- modal close callback
}) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    careTips: "",
    imageUrl: "",
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editingProduct) {
      setFormData({
        ...editingProduct,
        careTips: editingProduct.careTips ? editingProduct.careTips.join(", ") : "",
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      careTips: formData.careTips
        ? formData.careTips.split(",").map((tip) => tip.trim())
        : [],
    };

    try {
      let response;

      if (editingProduct) {
        response = await axiosInstance.put(`/api/product/${editingProduct._id}`, payload, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setProducts(products.map((p) => (p._id === editingProduct._id ? response.data : p)));
      } else {
        response = await axiosInstance.post("/api/product", payload, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setProducts([...products, response.data]);
      }

      // Reset form and close modal
      setFormData({ name: "", price: "", category: "", description: "", stock: "", careTips: "", imageUrl: "" });
      setEditingProduct(null);
      onClose(); // <-- close modal
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || error.message || "Failed to save product.");
    }
  };

  return (
    <form className="bg-white shadow-md p-6 rounded-lg mb-6" onSubmit={handleSubmit}>
      <input
        className="border p-2 w-full mb-3"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Plant Name"
        required
      />
      <input
        className="border p-2 w-full mb-3"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        className="border p-2 w-full mb-3"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <textarea
        className="border p-2 w-full mb-3"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        className="border p-2 w-full mb-3"
        name="stock"
        type="number"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock Quantity"
        required
      />
      <textarea
        className="border p-2 w-full mb-3"
        name="careTips"
        value={formData.careTips}
        onChange={handleChange}
        placeholder="Care Tips (comma separated)"
      />
      <input
        className="border p-2 w-full mb-3"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        type="submit"
      >
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
