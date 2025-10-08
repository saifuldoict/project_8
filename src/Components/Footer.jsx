import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Home", path: "/" },
        { name: "Apps", path: "/apps" },
        { name: "Installation", path: "/installation" },
        { name: "About", path: "/about" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", path: "/contact" },
        { name: "FAQs", path: "/faq" },
        { name: "Help Center", path: "/help" },
        { name: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", name: "Facebook" },
    { icon: <FaTwitter />, url: "#", name: "Twitter" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
    { icon: <FaGithub />, url: "#", name: "GitHub" },
    { icon: <FaLinkedin />, url: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">AppStore Hub</h2>
          <p className="text-sm mt-4 leading-relaxed">
            Discover, install, and manage your favorite apps with ease. 
            We bring innovation and performance together.
          </p>
          <div className="flex space-x-4 mt-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.name}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Link Sections */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe for app news and feature updates.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-gray-800 rounded-full overflow-hidden"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-sm text-gray-200 px-4 py-2 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {currentYear} <span className="text-white font-medium">AppStore Hub</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
