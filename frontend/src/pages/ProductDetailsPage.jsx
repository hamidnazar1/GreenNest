import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import ProductDetailsView from "../components/ProductDetailsView";

export default function ProductDetailsPage() {
  const { id } = useParams(); // this will be _id from MongoDB
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProductAndRelated = async () => {
      try {
        // Fetch the main product
        const { data: mainProduct } = await axiosInstance.get(`/api/product/${id}`);
        mainProduct.id = mainProduct._id; // Map MongoDB _id to id
        setProduct(mainProduct);

        // Fetch all products to generate related products
        const { data: allProducts } = await axiosInstance.get("/api/product");
        const related = allProducts
          .filter((p) => p._id !== mainProduct._id)
          .map((p) => ({ ...p, id: p._id })); // Map _id to id for each product
        setRelatedProducts(related);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndRelated();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!product) return <div className="p-6">Product not found.</div>;

  return <ProductDetailsView product={product} relatedProducts={relatedProducts} />;
}
