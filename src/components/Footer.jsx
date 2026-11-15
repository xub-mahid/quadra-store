
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-3xl font-black tracking-[0.2em]"
            >
              QUADRA<span className="text-yellow-500">.</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-400 max-w-xs">
              Discover your style with QUADRA.
              Premium fashion, quality products and
              everyday essentials made for you.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/shop" className="hover:text-yellow-500 transition">
                  Shop All
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-yellow-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-yellow-500 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base font-semibold mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/faq" className="hover:text-yellow-500 transition">
                  FAQs
                </Link>
              </li>

              <li>
                <Link to="/shipping-policy" className="hover:text-yellow-500 transition">
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link to="/return-policy" className="hover:text-yellow-500 transition">
                  Return & Refund
                </Link>
              </li>

              <li>
                <Link to="/track-order" className="hover:text-yellow-500 transition">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-5">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-white mb-1">Email</span>
                support@quadra.com
              </li>

              <li>
                <span className="block text-white mb-1">Location</span>
                Bangladesh
              </li>

              <li>
                <span className="block text-white mb-1">Support Hours</span>
                Saturday – Thursday
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

          <p className="text-xs text-gray-500">
            © 2026 QUADRA. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <Link to="/privacy-policy" className="hover:text-yellow-500 transition">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-yellow-500 transition">
              Terms & Conditions
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            Made with care in Bangladesh.
          </p>

        </div>
      </div>

    </footer>
  );
}
