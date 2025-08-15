import { Link } from "react-router-dom";

export default function ProductGrid({ products }) {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p>Showing all {products.length} results</p>
        <select className="border rounded px-3 py-2">
          <option>Default sorting</option>
          <option>Sort by price</option>
          <option>Sort by name</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link  to={`/product/${product._id}`} key={product._id} className="group">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-2 font-medium text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="mt-1 font-semibold">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
