import { memo } from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">E-commerce</h2>
            <p className="text-sm text-gray-400">
              Quality products and the best service. Shopping with us is easy
              and reliable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sections</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-green-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-green-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-green-400">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
