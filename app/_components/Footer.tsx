import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-blue-400">About Us</h4>
            <p className="text-sm leading-relaxed">
              Exploring the realms of technology and design. Sharing insights and inspiration with
              the community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-blue-400 text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-400">Follow Us</h4>
            <div className="flex space-x-6">
              <Link
                href="https://twitter.com/"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </Link>
              <Link href="https://facebook.com/" className="hover:text-blue-400 transition-colors duration-300">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://instagram.com/" className="hover:text-blue-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com/" className="hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://github.com/" className="hover:text-blue-400 transition-colors duration-300">
                <FaGithub size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
