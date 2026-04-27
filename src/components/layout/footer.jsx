"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className=" text-2xl font-bold mb-4 flex items-center gap-2 ">
              <img src="/logo.png" alt="Prodify Logo" className="h-14 w-14" />
              Prodify
            </h2>
            <p className="text-sm">
              Smart product management platform to organize, track and manage
              your products effortlessly.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:text-blue-500">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Dashboard Links */}
          <div>
            <h3 className="font-semibold mb-4">Dashboard</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/items/add" className="hover:text-blue-500">
                  Add Product
                </Link>
              </li>
              <li>
                <Link href="/items/manage" className="hover:text-blue-500">
                  Manage Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebook size={21}/>
              </Link>

              <Link href="https://instagram.com" target="_blank">
                <FaInstagram size={21}/>
              </Link>

              <Link href="https://twitter.com" target="_blank">
                <FaTwitter size={21}/>
              </Link>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Prodify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
