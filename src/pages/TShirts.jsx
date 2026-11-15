import { Link } from "react-router-dom";

/*
  QUADRA colors:
  - Deep Navy  : #0A1633  (text, dark sections)
  - Royal Blue : #2563EB  (buttons, highlights)
  - Cyan       : #22D3EE  (accent on dark sections)
  - Ice Blue   : #EFF6FF  (light backgrounds)
*/

// DEMO DATA: temporary sample products for the design phase.
// Prices, ratings, reviews and sold counts are not real.
// This will be replaced by Google Sheets data later.
const products = [
  {
    id: 1,
    name: "Essential Black T-Shirt",
    price: 650,
    oldPrice: 850,
    tag: "BESTSELLER",
    rating: 4.8,
    reviews: 124,
    sold: 230,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    name: "Classic White T-Shirt",
    price: 600,
    oldPrice: 750,
    tag: "EVERYDAY",
    rating: 4.6,
    reviews: 86,
    sold: 145,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Premium Oversized Tee",
    price: 750,
    oldPrice: null,
    tag: "NEW ARRIVAL",
    rating: 4.7,
    reviews: 52,
    sold: 98,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    name: "Urban Casual T-Shirt",
    price: 650,
    oldPrice: null,
    tag: "CASUAL",
    rating: 4.5,
    reviews: 64,
    sold: 112,
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 5,
    name: "Minimal Beige T-Shirt",
    price: 700,
    oldPrice: 850,
    tag: "POPULAR",
    rating: 4.9,
    reviews: 143,
    sold: 287,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 6,
    name: "Modern Everyday Tee",
    price: 680,
    oldPrice: null,
    tag: "ESSENTIAL",
    rating: 4.6,
    reviews: 39,
    sold: 76,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=700&q=85",
  },
];

export default function TShirts() {
  return (
    <div className="min-h-screen bg-white text-[#0A1633]">

      {/* Hero Section */}
      <section className="bg-[#0A1633] px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#22D3EE]">
            QUADRA COLLECTION
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            T-SHIRTS<span className="text-[#22D3EE]">.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base">
            Everyday essentials. Timeless style. Discover T-shirts
            designed to make your everyday look effortlessly premium.
          </p>

          <div className="mt-8 h-1 w-16 bg-[#22D3EE]" />
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 text-sm text-slate-500 sm:px-8">
        <Link to="/" className="transition hover:text-[#2563EB]">
          Home
        </Link>

        <span className="mx-2">/</span>

        <Link to="/shop" className="transition hover:text-[#2563EB]">
          Shop All
        </Link>

        <span className="mx-2">/</span>

        <span className="text-[#0A1633]">T-Shirts</span>
      </div>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">

        {/* Category Heading */}
        <div className="flex flex-col justify-between gap-4 border-b border-blue-100 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Find Your Fit
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              All T-Shirts
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Explore our everyday collection.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            {products.length} Products
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">

          {products.map((product) => (
            <article key={product.id} className="group">

              {/* Product Image */}
              <Link
                to="/product-details"
                className="relative block overflow-hidden bg-blue-50"
              >
                <span className="absolute left-2 top-2 z-10 bg-[#2563EB] px-2 py-1 text-[9px] font-bold tracking-wider text-white sm:left-3 sm:top-3 sm:text-[10px]">
                  {product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="aspect-3/4 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Product Information */}
              <div className="pt-4">

                <h3 className="text-sm font-semibold leading-5 sm:text-base">
                  {product.name}
                </h3>

                {/* Star Rating & Reviews */}
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                  <span
                    className="tracking-wide text-[#2563EB]"
                    aria-label={`${product.rating} out of 5 stars`}
                  >
                    ★★★★★
                  </span>

                  <span className="font-semibold text-slate-700">
                    {product.rating.toFixed(1)}
                  </span>

                  <span className="text-slate-400">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Sold Count */}
                <p className="mt-1.5 text-xs text-slate-500">
                  <span className="font-semibold text-[#0A1633]">
                    {product.sold}
                  </span>{" "}
                  sold
                </p>

                {/* Price & Discount */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold sm:text-base">
                    ৳{product.price}
                  </span>

                  {product.oldPrice && (
                    <>
                      <span className="text-xs text-slate-400 line-through">
                        ৳{product.oldPrice}
                      </span>

                      <span className="text-[10px] font-semibold text-[#2563EB]">
                        {Math.round(
                          ((product.oldPrice - product.price) /
                            product.oldPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </>
                  )}
                </div>

                {/* View Product */}
                <Link
                  to="/product-details"
                  className="mt-4 inline-block border-b border-[#0A1633] pb-1 text-[10px] font-bold tracking-[0.15em] transition hover:border-[#2563EB] hover:text-[#2563EB] sm:text-xs"
                >
                  VIEW PRODUCT
                </Link>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#EFF6FF] px-5 py-10 text-center sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2563EB]">
            The QUADRA Standard
          </p>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Your Style, Your Rules.
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
            Build your everyday wardrobe with versatile essentials
            made for your personal style.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-block bg-[#2563EB] px-7 py-3 text-xs font-semibold tracking-widest text-white transition hover:bg-[#0A1633]"
          >
            EXPLORE ALL PRODUCTS
          </Link>
        </div>

      </section>
    </div>
  );
}