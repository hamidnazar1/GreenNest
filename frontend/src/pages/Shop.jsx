import ProductGrid from "../components/ProductGrid";

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

export default function Shop() {
  return <ProductGrid products={products} />;
}

export { products };
