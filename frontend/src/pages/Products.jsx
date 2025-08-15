import { useState } from "react";
import axiosInstance from "../axiosConfig";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default function Products() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      _id: "1",
      name: "Aloe Vera",
      category: "Succulent",
      price: 12.99,
      stock: 15,
      description: "A hardy plant that requires little water.",
      careTips: "Water once a week, indirect sunlight.",
      imageUrl: "https://via.placeholder.com/300x200?text=Aloe+Vera",
    },
    {
      _id: "2",
      name: "Peace Lily",
      category: "Flowering Plant",
      price: 18.5,
      stock: 8,
      description: "Beautiful plant with white blooms.",
      careTips: "Keep soil moist, low to medium light.",
      imageUrl: "https://via.placeholder.com/300x200?text=Peace+Lily",
    },
    {
      _id: "3",
      name: "Snake Plant",
      category: "Succulent",
      price: 14.0,
      stock: 20,
      description: "Low-maintenance plant with tall leaves.",
      careTips: "Water sparingly, tolerates low light.",
      imageUrl: "https://via.placeholder.com/300x200?text=Snake+Plant",
    },
  ]);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header with Add Product Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <button
          onClick={handleAddProduct}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Product
        </button>
      </div>

      {/* Product List */}
      <ProductList
        products={products}
        setProducts={setProducts}
        setEditingProduct={(product) => {
          setEditingProduct(product);
          setIsModalOpen(true);
        }}
      />

      {/* Auto-adjust height Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-auto p-6 relative rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            <h2 className="text-xl font-bold mb-4">
              {editingProduct ? "Edit Product" : "Add Product"}
            </h2>

            <ProductForm
              products={products}
              setProducts={setProducts}
              editingProduct={editingProduct}
              setEditingProduct={setEditingProduct}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
