import { useParams } from "react-router-dom";
import { products } from "./Shop";
import ProductDetailsView from "../components/ProductDetailsView";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <ProductDetailsView product={product} relatedProducts={relatedProducts} />
  );
}
