import { useState } from "react";
import { Link } from "react-router-dom";

/*
  QUADRA colors:
  - Deep Navy  : #0A1633  (text, icons)
  - Royal Blue : #2563EB  (logo dot, hover)
*/

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/shop" },
    { name: "T-Shirts", path: "/categories/t-shirts" },
    { name: "Sneaker", path: "/categories/sneaker" },
    { name: "Gadgets", path: "/categories/gadgets" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="relative w-full bg-white text-[#0A1633]">
      {/* Main Navbar */}
      <nav className="border-b border-blue-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex flex-col leading-none"
            >
              <span className="text-[27px] font-black tracking-[0.22em] sm:text-3xl">
                QUADRA<span className="text-[#2563EB]">.</span>
              </span>

              <span className="mt-2 text-[8px] tracking-[0.38em] text-slate-500">
                DEFINE YOUR STYLE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[13px] font-medium transition-colors hover:text-[#2563EB]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 sm:gap-5">

              {/* Search */}
              <Link
                to="/search"
                aria-label="Search"
                className="text-[#0A1633] transition-colors hover:text-[#2563EB]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <circle cx="10.8" cy="10.8" r="6.8" />
                  <path d="m16 16 4.2 4.2" />
                </svg>
              </Link>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="hidden text-[#0A1633] transition-colors hover:text-[#2563EB] sm:block"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.7 4.7 0 0 1 8.8-2.4 4.7 4.7 0 0 1 8.8 2.4Z" />
                </svg>
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                aria-label="Shopping cart"
                className="text-[#0A1633] transition-colors hover:text-[#2563EB]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.5L22 8H6" />
                  <circle cx="10" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                </svg>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center justify-center text-[#0A1633] lg:hidden"
              >
                {menuOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                  >
                    <path d="m6 6 12 12M18 6 6 18" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-blue-100 bg-white shadow-lg lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-blue-50 py-4 text-sm font-medium transition-colors last:border-b-0 hover:pl-2 hover:text-[#2563EB]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}