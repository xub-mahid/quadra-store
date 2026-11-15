import { Link } from "react-router-dom";

/*
  QUADRA colors:
  - Deep Navy  : #0A1633  (text, dark sections)
  - Royal Blue : #2563EB  (buttons, highlights)
  - Cyan       : #22D3EE  (accent on dark sections)
  - Ice Blue   : #EFF6FF  (light backgrounds)
*/

// DEMO DATA: temporary sample products for the design phase.
// Prices and names are not real. This will be replaced by Google Sheets data later.
const products = [
  {
    id: 1,
    name: "Essential Black T-Shirt",
    category: "T-Shirts",
    price: 650,
    oldPrice: 850,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Classic White T-Shirt",
    category: "T-Shirts",
    price: 600,
    oldPrice: 750,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=85",
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Premium Everyday Watch",
    category: "Accessories",
    price: 1250,
    oldPrice: 1500,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    tag: "NEW",
  },
  {
    id: 4,
    name: "Modern Wireless Headphones",
    category: "Gadgets",
    price: 1850,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
    tag: "TRENDING",
  },
  {
    id: 5,
    name: "Minimal Everyday T-Shirt",
    category: "T-Shirts",
    price: 700,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
    tag: "ESSENTIAL",
  },
  {
    id: 6,
    name: "Classic Style Accessories",
    category: "Accessories",
    price: 950,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=85",
    tag: "STYLE PICK",
  },
  {
    id: 7,
    name: "Wireless Audio Essentials",
    category: "Gadgets",
    price: 1450,
    oldPrice: 1650,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=85",
    tag: "POPULAR",
  },
  {
    id: 8,
    name: "Urban Casual T-Shirt",
    category: "T-Shirts",
    price: 650,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=85",
    tag: "EVERYDAY",
  },
];

export default function Shop() {
  return (
    <div className="bg-white text-[#0A1633] min-h-screen">

      {/* Shop Hero */}
      <section className="bg-[#0A1633] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 sm:py-20 text-center">
          <p className="text-[#22D3EE] text-xs tracking-[0.35em] font-semibold">
            THE QUADRA COLLECTION
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-5">
            Shop <span className="text-[#22D3EE]">All.</span>
          </h1>

          <p className="mt-5 text-blue-100/70 text-sm sm:text-base max-w-xl mx-auto leading-7">
            Explore fashion, accessories and everyday essentials.
            Find your next favourite from the QUADRA collection.
          </p>

          <div className="mt-7 text-xs text-blue-100/70 tracking-widest">
            HOME <span className="text-[#22D3EE] mx-2">/</span> SHOP ALL
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[#2563EB] text-xs font-bold tracking-[0.25em]">
              FIND YOUR STYLE
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              All Products
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            {products.length} products
          </p>
        </div>

        {/* Category Links */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            to="/shop"
            className="bg-[#2563EB] text-white border border-[#2563EB] px-5 py-2.5 text-sm"
          >
            All Products
          </Link>

          <Link
            to="/categories/t-shirts"
            className="border border-blue-200 px-5 py-2.5 text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition"
          >
            T-Shirts
          </Link>

          <Link
            to="/categories/sneaker"
            className="border border-blue-200 px-5 py-2.5 text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition"
          >
            Sneaker
          </Link>

          <Link
            to="/categories/gadgets"
            className="border border-blue-200 px-5 py-2.5 text-sm hover:border-[#2563EB] hover:text-[#2563EB] transition"
          >
            Gadgets
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">

          {products.map((product) => (
            <div key={product.id} className="group">

              {/* Product Image */}
              <Link
                to={`/product/${product.id}`}
                className="block relative overflow-hidden bg-blue-50"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full aspect-3/4 object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute top-3 left-3 bg-white text-[#0A1633] px-2 py-1 text-[9px] sm:text-[10px] tracking-wider font-bold">
                  {product.tag}
                </span>
              </Link>

              {/* Product Details */}
              <div className="pt-4">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500">
                  {product.category}
                </p>

                <Link to={`/product/${product.id}`}>
                  <h3 className="text-sm sm:text-base font-semibold mt-2 hover:text-[#2563EB] transition line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="font-bold text-sm sm:text-base">
                    ৳{product.price.toLocaleString("en-BD")}
                  </span>

                  {product.oldPrice && (
                    <span className="text-xs sm:text-sm text-slate-400 line-through">
                      ৳{product.oldPrice.toLocaleString("en-BD")}
                    </span>
                  )}
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-4 w-full border border-[#2563EB] text-[#2563EB] py-2.5 flex items-center justify-center text-xs sm:text-sm font-semibold hover:bg-[#2563EB] hover:text-white transition"
                >
                  VIEW PRODUCT
                </Link>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 sm:mt-20 bg-[#EFF6FF] px-6 py-10 sm:py-14 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-[#2563EB]">
            THE QUADRA STANDARD
          </p>

          <h2 className="text-2xl sm:text-3xl font-black mt-4">
            Your Style. Your Identity.
          </h2>

          <p className="text-sm text-slate-600 mt-3">
            Discover the pieces that feel like you.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-[#2563EB] text-white px-7 py-3 text-sm font-semibold hover:bg-[#0A1633] transition"
          >
            BACK TO HOME
          </Link>
        </div>

      </section>
    </div>
  );
}