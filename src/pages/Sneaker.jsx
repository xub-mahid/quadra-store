import { Link } from "react-router-dom";

/*
  QUADRA colors:
  - Deep Navy  : #0A1633  (text, dark sections)
  - Royal Blue : #2563EB  (buttons, highlights)
  - Cyan       : #22D3EE  (accent on dark sections)
  - Ice Blue   : #EFF6FF  (light backgrounds)
*/

// DEMO DATA: temporary sample products for the design phase.
// Prices and names are not real.
// This will be replaced by Google Sheets data later.
const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    category: "Lifestyle Sneakers",
    price: 1850,
    oldPrice: 2300,
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Premium Black Sneakers",
    category: "Casual Shoes",
    price: 1950,
    oldPrice: 2400,
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Urban Running Sneakers",
    category: "Running Shoes",
    price: 2250,
    oldPrice: 2800,
    tag: "NEW ARRIVAL",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Retro Street Sneakers",
    category: "Streetwear",
    price: 2100,
    oldPrice: 2600,
    tag: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Minimal Everyday Sneakers",
    category: "Everyday Wear",
    price: 1750,
    oldPrice: null,
    tag: "ESSENTIAL",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Modern Sport Sneakers",
    category: "Sports Shoes",
    price: 2450,
    oldPrice: 2950,
    tag: "SPECIAL PICK",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Classic Low-Top Sneakers",
    category: "Lifestyle Sneakers",
    price: 1650,
    oldPrice: null,
    tag: "EVERYDAY",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Premium Streetwear Shoes",
    category: "Streetwear",
    price: 2350,
    oldPrice: 2800,
    tag: "QUADRA PICK",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Sneaker() {
  return (
    <div className="min-h-screen bg-white text-[#0A1633]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1633] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#2563EB]/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#22D3EE]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">
            QUADRA SNEAKER COLLECTION
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Step Into Style.
            <br />
            <span className="text-[#22D3EE]">Own Every Step.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base">
            Discover everyday sneakers, modern streetwear shoes, and
            sporty essentials designed to complement your personal style.
          </p>

          <a
            href="#sneaker-products"
            className="mt-8 inline-flex items-center gap-3 bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#22D3EE] hover:text-[#0A1633]"
          >
            Explore Sneakers <span aria-hidden="true">→</span>
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
          <span className="font-medium text-[#0A1633]">Sneakers</span>
        </div>
      </div>

      {/* Products */}
      <section
        id="sneaker-products"
        className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24"
      >
        <div className="mb-8 flex flex-col gap-3 border-b border-blue-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
              THE SNEAKER COLLECTION
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Shop Sneakers
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Find your fit. Define your style.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="group min-w-0">
              <Link
                to="/product-details"
                aria-label={`View ${product.name}`}
                className="relative block aspect-3/4 overflow-hidden bg-blue-50"
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
          Every Step. <span className="text-[#22D3EE]">Your Statement.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-blue-100/70">
          Explore sneakers that bring together comfort, modern design,
          and everyday versatility.
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