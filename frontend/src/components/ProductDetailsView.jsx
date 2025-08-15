import { Link } from "react-router-dom";

export default function ProductDetailsView({ product, relatedProducts }) {
    return (
        <div className="container mx-auto p-6">
            {/* Product Info */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-lg shadow-lg"
                />

                {/* Details */}
                <div>
                    <p className="text-sm text-gray-500">
                        Home / {product.category} / {product.name}
                    </p>

                    <h2 className="text-3xl font-semibold mt-2">{product.name}</h2>
                    <p className="text-2xl font-bold mt-2">
                        ${product.price.toFixed(2)}{" "}
                        <span className="text-base font-normal">& Free Shipping</span>
                    </p>

                    <p className="mt-4 text-gray-700">{product.description1}</p>
                    <p className="mt-4 text-gray-700">{product.description2}</p>

                    {/* Quantity + Add to Cart */}
                    <div className="flex items-center mt-6 gap-3">
                        <label htmlFor="quantity" className="font-medium">
                            {product.name} quantity
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            defaultValue={1}
                            min={1}
                            className="w-16 border rounded px-2 py-1"
                        />
                        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Add to cart
                        </button>
                    </div>

                    <p className="mt-4 text-gray-500">
                        Category: <span className="text-black">{product.category}</span>
                    </p>

                    {/* Payment Icons */}
                    <div className="mt-6 border rounded-lg p-4 shadow-sm bg-white">
                        <p className="font-medium mb-3 text-center">Guaranteed Safe Checkout</p>
                        <div className="flex justify-center gap-4">
                            <img
                                src="https://www.discoversignage.com/uploads/25-05-23_10:43_4-Logo_US_Amex(3)1.png"
                                alt="cards"
                                className="h-25"
                            />



                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-12 border-b">
                <div className="flex gap-6 border-b pb-2">
                    <button className="font-semibold border-b-2 border-black">
                        Description
                    </button>
                    <button className="text-gray-500 hover:text-black">Reviews (0)</button>
                </div>
                <div className="py-4">
                    <p className="text-gray-700">{product.description1}</p>
                    <p className="mt-4 text-gray-700">{product.description2}</p>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Related Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedProducts.map((p) => (
                        <Link
                            key={p.id}
                            to={`/product/${p.id}`}
                            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition block"
                        >
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-medium">{p.name}</h4>
                                <p className="text-gray-500">{p.category}</p>
                                <p className="font-semibold mt-1">${p.price.toFixed(2)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
