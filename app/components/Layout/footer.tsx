import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-50 dark:bg-green-900 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-gray-200 dark:border-gray-800">
            {/* Logo and Description */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-gray-900 dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-gray-900 font-bold">
                  FC
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  FarmChain
                </h3>
                <p className="text-sm text-gray-200 dark:text-gray-200">
                  Connecting farmers, buyers & tools.
                </p>
              </div>
            </div>

            {/* Newsletter Form */}
            <form
              className="w-full md:w-auto"
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   alert("Subscribed!");
              // }}
            >
              <label htmlFor="newsletter" className="sr-only">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full md:w-72 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-200 px-3 py-2 text-sm text-gray-900  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-200">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-10">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Product
              </h4>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Features
                </li>
                <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Pricing
                </li>

                <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Roadmap
                </li>
                <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Changelog
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Resources
              </h4>

              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Blog
                </li>
                <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Guides
                </li>

                <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Support
                </li>

                <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  API Docs
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-6 mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-200">
              © {new Date().getFullYear()} FarmChain. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-200 hover:text-indigo-500">
                Twitter
              </a>
              <a href="#" className="text-gray-200 hover:text-indigo-500">
                GitHub
              </a>
              <a href="#" className="text-gray-200 hover:text-indigo-500">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
