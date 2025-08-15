import { useState, useEffect } from "react";
import ProductGrid from "../components/ProductGrid";
import axiosInstance from "../axiosConfig";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/api/product"); 
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="p-6">Loading products...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return <ProductGrid products={products} />;
}
