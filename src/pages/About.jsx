import { Link } from "react-router-dom";

/*
  QUADRA About page - Blue theme
  Colors used:
  - Deep Navy  : #0A1633  (dark sections, main text)
  - Royal Blue : #2563EB  (buttons, highlights)
  - Cyan       : #22D3EE  (accent on dark sections)
  - Ice Blue   : #EFF6FF  (light section background)
*/

const values = [
  {
    title: "Quality First",
    description:
      "We aim to offer carefully selected products that balance quality, functionality, and everyday value.",
  },
  {
    title: "Modern Style",
    description:
      "From everyday fashion to useful gadgets, we focus on products that complement a modern lifestyle.",
  },
  {
    title: "Customer Focus",
    description:
      "We want every customer to enjoy a simple, clear, and reliable shopping experience.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#0A1633]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0A1633] px-5 pb-24 pt-20 text-white sm:px-8 sm:pb-32 sm:pt-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#2563EB]/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[#22D3EE]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
            The story of QUADRA
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            More than products.
            <br />
            A way of living.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80">
            QUADRA is built around modern style, everyday essentials, and
            technology that fits your lifestyle. We aim to make discovering
            products you love simple and enjoyable.
          </p>

          <Link
            to="/shop"
            className="mt-9 inline-flex items-center rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-[#22D3EE] hover:text-[#0A1633]"
          >
            Explore our collection
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 text-sm sm:px-8 lg:px-10">
        <div className="flex items-center gap-2 text-slate-500">
          <Link to="/" className="transition hover:text-[#2563EB]">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-[#0A1633]">About Us</span>
        </div>
      </div>

      {/* Brand Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 md:grid-cols-2 lg:gap-20 lg:px-10 lg:py-20">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
            alt="Modern retail store interior"
            loading="lazy"
            className="aspect-4/5 w-full rounded-3xl object-cover"
          />

          <div className="absolute -bottom-5 -right-2 rounded-2xl bg-[#2563EB] px-6 py-4 text-white shadow-xl shadow-blue-600/30 sm:-right-5 sm:px-8 sm:py-5">
            <p className="text-xl font-black tracking-[0.15em] sm:text-2xl">
              QUADRA.
            </p>
            <p className="mt-1 text-xs font-medium text-cyan-200">
              Define your style
            </p>
          </div>
        </div>

        <div className="pt-6 md:pt-0">
          <p className="mb-4 text-sm font-semibold text-[#2563EB]">
            Who we are
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Designed for the way you live.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
            <p>
              QUADRA is an online retail brand with a vision to bring together
              fashion, gadgets, and everyday accessories in one convenient
              destination.
            </p>

            <p>
              We believe shopping should be straightforward. Our goal is to
              help customers discover practical products with a modern look
              and clear product information.
            </p>

            <p>
              Starting with customers in Bangladesh, we aim to build a brand
              that grows through customer trust, thoughtful product
              selection, and continuous improvement.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-[#2563EB] bg-[#EFF6FF] px-6 py-5">
            <p className="text-lg font-semibold italic text-[#0A1633]">
              “Your style. Your essentials. Your QUADRA.”
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-[#0A1633] p-8 text-white sm:p-12">
            <p className="mb-4 text-sm font-semibold text-[#22D3EE]">
              Our mission
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Make everyday shopping better.
            </h2>

            <p className="mt-5 text-base leading-8 text-blue-100/75">
              Our mission is to make useful, stylish products easier to
              discover through a convenient online shopping experience,
              transparent information, and customer-focused service.
            </p>
          </div>

          <div className="rounded-3xl bg-[#2563EB] p-8 text-white sm:p-12">
            <p className="mb-4 text-sm font-semibold text-cyan-200">
              Our vision
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              A brand customers can trust.
            </h2>

            <p className="mt-5 text-base leading-8 text-blue-50/90">
              We aspire to grow QUADRA into a trusted destination for fashion,
              gadgets, and lifestyle essentials, building long-term customer
              relationships through consistency and care.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold text-[#2563EB]">
            What matters to us
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The QUADRA standard
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            The principles we want every part of the QUADRA experience to
            reflect.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl bg-[#EFF6FF] p-7 sm:p-8"
            >
              <div className="mb-6 h-1.5 w-12 rounded-full bg-[#2563EB]" />

              <h3 className="text-xl font-bold">{value.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Shop CTA */}
      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0A1633] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#2563EB]/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[#22D3EE]/20 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold text-[#22D3EE]">
              Discover QUADRA
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Find your next favourite.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100/75">
              Explore our collections of fashion, gadgets, and accessories to
              discover products for your everyday life.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex rounded-full bg-[#2563EB] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#22D3EE] hover:text-[#0A1633]"
            >
              Shop all products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}