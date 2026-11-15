
import React from "react";

export default function ProductDetails() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-gray-500 sm:px-6 lg:px-8">
        Home / Shop / <span className="text-black">Product Details</span>
      </div>

      {/* Product Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:px-8">

        {/* Product Images */}
        <div>
          <div className="relative overflow-hidden bg-gray-100">
            <span className="absolute left-4 top-4 z-10 bg-amber-500 px-3 py-1 text-xs font-semibold tracking-widest text-black">
              BESTSELLER
            </span>

            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85"
              alt="Premium white T-shirt"
              className="h-105 w-full object-cover sm:h-140"
            />
          </div>

          {/* Thumbnail Design */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="cursor-pointer overflow-hidden border border-gray-200 bg-gray-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80"
                  alt={`Product view ${item}`}
                  className="h-24 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col pt-2">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            QUADRA COLLECTION
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Essential Premium T-Shirt
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="text-amber-500">★★★★★</div>
            <span className="text-sm text-gray-500">
              Customer reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-3xl font-bold">৳650</span>
            <span className="text-lg text-gray-400 line-through">
              ৳850
            </span>
            <span className="bg-amber-100 px-2 py-1 text-xs font-bold text-amber-800">
              SAVE 24%
            </span>
          </div>

          <div className="my-7 border-t border-gray-200" />

          {/* Description */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest">
              Product Description
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              A clean, timeless essential designed for everyday comfort.
              Featuring a minimalist look and versatile style, this T-shirt
              is an easy addition to your daily wardrobe.
            </p>
          </div>

          {/* Color Options - Visual Only */}
          <div className="mt-7">
            <h3 className="text-sm font-semibold">
              Color: <span className="font-normal text-gray-500">White</span>
            </h3>

            <div className="mt-3 flex gap-3">
              <div className="h-8 w-8 border-2 border-amber-500 bg-white outline outline-offset-2 outline-amber-500" />
              <div className="h-8 w-8 border border-gray-300 bg-black" />
              <div className="h-8 w-8 border border-gray-300 bg-gray-500" />
            </div>
          </div>

          {/* Size Options - Visual Only */}
          <div className="mt-7">
            <h3 className="text-sm font-semibold">Select Size</h3>

            <div className="mt-3 flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="flex h-11 w-12 items-center justify-center border border-gray-300 text-sm font-medium"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity - Visual Only */}
          <div className="mt-7">
            <h3 className="text-sm font-semibold">Quantity</h3>

            <div className="mt-3 flex h-12 w-36 items-center justify-between border border-gray-300 px-4">
              <span className="text-gray-400">−</span>
              <span>1</span>
              <span className="text-gray-400">+</span>
            </div>
          </div>

          {/* Buttons - Design Only */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="bg-black px-6 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-amber-500 hover:text-black"
            >
              Add to Cart
            </button>

            <button
              type="button"
              className="border border-black px-6 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-amber-500 hover:border-amber-500"
            >
              Buy Now
            </button>
          </div>

          {/* Delivery Information */}
          <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
            <div className="flex items-start gap-3">
              <span className="text-xl">↗</span>
              <div>
                <h3 className="text-sm font-semibold">Delivery Information</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Delivery options and charges will be confirmed at checkout.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">◇</span>
              <div>
                <h3 className="text-sm font-semibold">QUADRA Quality</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Product details and specifications should be verified before purchase.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Product Details Banner */}
      <section className="bg-white px-4 py-14 text-center text-black sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
          The QUADRA Standard
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Simple. Premium. <span className="text-amber-500">You.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
          Discover everyday essentials with a focus on modern style,
          versatile design and a clean aesthetic.
        </p>
      </section>

    </div>
  );
}
