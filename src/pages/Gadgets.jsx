import { Link } from "react-router-dom";

/*
  QUADRA colors:
  - Deep Navy  : #0A1633  (text, dark sections)
  - Royal Blue : #2563EB  (buttons, highlights)
  - Cyan       : #22D3EE  (accent on dark sections)
  - Ice Blue   : #EFF6FF  (light backgrounds)
*/

// DEMO DATA: temporary sample products for the design phase.
// Prices, ratings and reviews are not real.
// This will be replaced by Google Sheets data later.
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    category: "Audio",
    price: 1250,
    oldPrice: 1650,
    tag: "BESTSELLER",
    rating: "4.8",
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smart Watch Series",
    category: "Wearable Tech",
    price: 1850,
    oldPrice: 2400,
    tag: "POPULAR",
    rating: "4.7",
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 1450,
    oldPrice: null,
    tag: "NEW ARRIVAL",
    rating: "4.6",
    reviews: 58,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Fast Charging Power Bank",
    category: "Accessories",
    price: 1100,
    oldPrice: 1400,
    tag: "EVERYDAY",
    rating: "4.7",
    reviews: 82,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    category: "Computer Accessories",
    price: 950,
    oldPrice: null,
    tag: "ESSENTIAL",
    rating: "4.5",
    reviews: 43,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 2250,
    oldPrice: 2800,
    tag: "SPECIAL PICK",
    rating: "4.9",
    reviews: 117,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Gadgets() {
  return (
    <div className="min-h-screen bg-white text-[#0A1633]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0A1633] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#2563EB]/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#22D3EE]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">
            QUADRA TECHNOLOGY
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Smart Gadgets.
            <br />
            <span className="text-[#22D3EE]">Better Living.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base">
            Discover everyday tech essentials, smart accessories, and
            must-have gadgets designed to upgrade your lifestyle.
          </p>

          <a
            href="#gadgets-products"
            className="mt-8 inline-flex items-center gap-3 bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#22D3EE] hover:text-[#0A1633]"
          >
            Explore Gadgets
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 text-sm sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-2 text-slate-500">
          <Link to="/" className="transition hover:text-[#2563EB]">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="transition hover:text-[#2563EB]">
            Shop All
          </Link>
          <span>/</span>
          <span className="font-medium text-[#0A1633]">Gadgets</span>
        </div>
      </div>

      {/* Products Section */}
      <section
        id="gadgets-products"
        className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24"
      >
        <div className="mb-8 flex flex-col gap-3 border-b border-blue-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
              TECH COLLECTION
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Explore Our Gadgets
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Everyday technology, carefully selected for you.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="group min-w-0">
              {/* Product Image */}
              <Link
                to="/product-details"
                className="relative block aspect-3/4 overflow-hidden bg-blue-50"
                aria-label={`View ${product.name}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-2 top-2 bg-white px-2 py-1 text-[9px] font-semibold tracking-wider text-[#0A1633] sm:left-3 sm:top-3 sm:text-[10px]">
                  {product.tag}
                </span>

                {product.oldPrice && (
                  <span className="absolute right-2 top-2 bg-[#2563EB] px-2 py-1 text-[10px] font-bold text-white sm:right-3 sm:top-3">
                    {Math.round(
                      ((product.oldPrice - product.price) /
                        product.oldPrice) *
                        100
                    )}
                    % OFF
                  </span>
                )}
              </Link>

              {/* Product Info */}
              <div className="pt-4">
                <p className="mb-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
                  {product.category}
                </p>

                <Link
                  to="/product-details"
                  className="line-clamp-2 text-sm font-semibold leading-5 transition hover:text-[#2563EB] sm:text-base"
                >
                  {product.name}
                </Link>

                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-[#2563EB]">★</span>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-slate-400">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-base font-bold sm:text-lg">
                    ৳{product.price.toLocaleString("en-BD")}
                  </span>

                  {product.oldPrice && (
                    <span className="text-xs text-slate-400 line-through sm:text-sm">
                      ৳{product.oldPrice.toLocaleString("en-BD")}
                    </span>
                  )}
                </div>

                <Link
                  to="/product-details"
                  className="mt-4 flex w-full items-center justify-center border border-blue-200 px-3 py-2.5 text-xs font-semibold transition hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white sm:text-sm"
                >
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#0A1633] px-5 py-12 text-center text-white sm:px-8 sm:py-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#22D3EE]">
          THE QUADRA EXPERIENCE
        </p>

        <h2 className="text-2xl font-bold sm:text-4xl">
          Upgrade Your Everyday.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-blue-100/70">
          Find the tech essentials that fit your lifestyle and keep you
          connected to what matters.
        </p>

        <Link
          to="/shop"
          className="mt-7 inline-flex border border-[#22D3EE] px-6 py-3 text-sm font-semibold text-[#22D3EE] transition hover:bg-[#22D3EE] hover:text-[#0A1633]"
        >
          Shop All Products
        </Link>
      </section>
    </div>
  );
}