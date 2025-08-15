import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Desert Bloom",
    category: "Indoor Plants",
    price: 70,
    description:
      "A hardy desert plant perfect for brightening up indoor spaces with minimal maintenance.",
    image:
      "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-04.jpg",
  },
  {
    id: 2,
    name: "Golden Glow",
    category: "Indoor Plants",
    price: 85,
    description:
      "This lush green beauty with golden undertones thrives indoors and brings a fresh vibe to any room.",
    image:
      "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-05.jpg",
  },
  {
    id: 3,
    name: "Silver Mist",
    category: "Indoor Plants",
    price: 92,
    description:
      "Elegant silver-green leaves with a glossy finish, perfect for modern minimalist decor.",
    image:
      "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-03.jpg",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
