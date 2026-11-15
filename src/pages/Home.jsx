import { Link } from "react-router-dom";

/*
  QUADRA colors:
  - Deep Navy  : #0A1633  (text, dark sections)
  - Royal Blue : #2563EB  (buttons, highlights)
  - Cyan       : #22D3EE  (accent on dark sections)
  - Ice Blue   : #EFF6FF  (light backgrounds)
*/

const IMG = {
  tee: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
  accessories:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
  gadgets:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
  hero: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=85",
};

const perks = [
  { title: "Quality first", text: "Made for everyday comfort" },
  { title: "Easy shopping", text: "Simple, convenient browsing" },
  { title: "Fits you", text: "Find products that suit your style" },
];

export default function Home() {
  return (
    <div
      className="bg-white text-[#0A1633]"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=DM+Sans:wght@400;500;700&display=swap');
        .q-display { font-family: 'Bricolage Grotesque', 'DM Sans', system-ui, sans-serif; letter-spacing: -0.03em; }
        .q-link:focus-visible { outline: 3px solid #2563EB; outline-offset: 3px; }
      `}</style>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 pt-10 sm:pt-16 pb-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <h1 className="q-display text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[0.98]">
            Define your own style.
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600 max-w-md">
            Modern fashion, timeless essentials and everyday products designed
            to match your lifestyle.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="q-link inline-flex items-center bg-[#2563EB] text-white px-8 py-4 text-sm font-bold rounded-full shadow-lg shadow-blue-600/25 hover:bg-[#0A1633] transition-colors"
            >
              Shop now
            </Link>
            <Link
              to="/about"
              className="q-link inline-flex items-center px-8 py-4 text-sm font-bold rounded-full border-2 border-[#0A1633] hover:bg-[#0A1633] hover:text-white transition-colors"
            >
              Our story
            </Link>
          </div>
        </div>

        {/* Four-tile mosaic: the "quad" in QUADRA */}
        <div className="lg:col-span-6 grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 aspect-square max-h-155 w-full">
          <div className="rounded-4xl rounded-tr-md overflow-hidden">
            <img
              src={IMG.tee}
              alt="T-shirts"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-4xl rounded-tl-md overflow-hidden">
            <img
              src={IMG.hero}
              alt="Modern fashion collection"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-4xl rounded-br-md bg-[#2563EB] text-white p-5 sm:p-8 flex flex-col justify-end">
            <p className="q-display text-2xl sm:text-4xl font-extrabold leading-none">
              Everyday.
              <br />
              Elevated.
            </p>
            <p className="mt-3 text-xs sm:text-sm font-medium text-cyan-200">
              The QUADRA edit
            </p>
          </div>

          <div className="rounded-4xl rounded-bl-md overflow-hidden">
            <img
              src={IMG.gadgets}
              alt="Gadgets and tech"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="border-y border-blue-100 bg-[#EFF6FF]">
        <ul className="max-w-7xl mx-auto px-5 sm:px-10 grid sm:grid-cols-3 sm:divide-x divide-y sm:divide-y-0 divide-blue-100">
          {perks.map((p) => (
            <li key={p.title} className="py-6 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <h3 className="q-display font-bold text-lg">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="q-display text-3xl sm:text-5xl font-extrabold max-w-md leading-tight">
            Shop by category
          </h2>
          <Link
            to="/shop"
            className="q-link text-sm font-bold underline underline-offset-4 decoration-2 decoration-[#2563EB] hover:decoration-[#0A1633]"
          >
            View all products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 md:h-160">
          <CategoryTile
            to="/categories/t-shirts"
            img={IMG.tee}
            alt="T-shirt collection"
            title="T-Shirts"
            note="Everyday essentials"
            className="md:row-span-2 h-105 md:h-auto"
          />
          <CategoryTile
            to="/categories/accessories"
            img={IMG.accessories}
            alt="Accessories collection"
            title="Accessories"
            note="Complete your look"
            className="h-70 md:h-auto"
          />
          <CategoryTile
            to="/categories/gadgets"
            img={IMG.gadgets}
            alt="Gadgets and tech products"
            title="Gadgets"
            note="Smart everyday living"
            className="h-70 md:h-auto"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#0A1633] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-28 grid md:grid-cols-12 gap-10 items-end">
          <h2 className="q-display md:col-span-7 text-5xl sm:text-7xl font-extrabold leading-[0.98]">
            Less ordinary.
            <br />
            More you.
          </h2>

          <div className="md:col-span-5">
            <p className="text-base leading-8 text-blue-100/75 max-w-md">
              Great style starts with the right choices. Our collection is
              designed to bring confidence, simplicity and personality to your
              everyday life.
            </p>
            <Link
              to="/shop"
              className="q-link inline-flex mt-8 bg-[#22D3EE] text-[#0A1633] px-8 py-4 text-sm font-bold rounded-full hover:bg-white transition-colors"
            >
              Explore all products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryTile({ to, img, alt, title, note, className = "" }) {
  return (
    <Link
      to={to}
      className={`q-link group relative overflow-hidden rounded-4xl bg-blue-100 block ${className}`}
    >
      <img
        src={img}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0A1633]/80 via-[#0A1633]/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-4 text-white">
        <div>
          <h3 className="q-display text-3xl sm:text-4xl font-extrabold">
            {title}
          </h3>
          <p className="text-sm mt-1 text-white/80">{note}</p>
        </div>
        <span className="shrink-0 bg-[#2563EB] text-white text-sm font-bold px-5 py-2.5 rounded-full">
          Shop {title}
        </span>
      </div>
    </Link>
  );
}