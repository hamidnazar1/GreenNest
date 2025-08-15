import axiosInstance from "../axiosConfig";
import { useAuth } from '../context/AuthContext';

export default function ProductList({ products, setProducts, setEditingProduct }) {
  const { user } = useAuth();
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axiosInstance.delete(`/api/product/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` }, // send token
      });
      setProducts(products.filter((p) => p._id !== id));
    } catch {
      alert("Failed to delete product.");
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-lg">No products yet. Click “Add Product” to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 bg-white"
        >
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-green-700 font-bold mt-2">${product.price}</p>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            {product.careTips && (
              <p className="text-xs text-gray-500 mt-1">💡 {product.careTips}</p>
            )}
            <div className="flex gap-3 mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
                onClick={() => setEditingProduct(product)}
              >
                ✏️ Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                onClick={() => handleDelete(product._id)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
