"use client";

import Link from "next/link";
import React from "react";
import UseAuth from "@/contexts/UseAuth";
import UserDropdown from "../UserDropdown";
import { ModeToggle } from "../ModeToggle";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navlinks = [
    { name: "Items", href: "/items" },
    { name: "About", href: "/about" },
  ];
  const { user } = UseAuth();
  return (
    <div className="navbar fixed top-0 z-50 bg-card text-card-foreground border-b border-border px-6 shadow-sm">
      <div className="navbar-start">
        <Link href="/" className=" font-bold text-xl flex items-center gap-2">
          <img src="/logo.png" alt="Prodify Logo" className="h-10 w-10" />
          Prodify
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-bold hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        <ModeToggle />
        {!user ? (
          // GUEST STATE
          <div className="flex gap-3">
            <Link href="/login" className="border btn btn-primary">
              Login
            </Link>
            <div className="dropdown dropdown-end md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div>
                  <IoMenu size={30} />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-card rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {/* Menu items */}
                <Link
                  href="/items"
                  className="block hover:bg-gray-600 p-2 rounded"
                >
                  Items
                </Link>

                <Link
                  href="/about"
                  className="block hover:bg-gray-600 p-2  rounded"
                >
                  About
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          // AUTH STATE
          <UserDropdown />
        )}
      </div>
    </div>
  );
};

export default Navbar;
