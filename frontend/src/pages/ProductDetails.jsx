import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/product/${id}`); // replace with your API endpoint
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
          <button
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
