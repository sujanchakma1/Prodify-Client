"use client";

import Link from "next/link";
import React from "react";
import UseAuth from "@/contexts/UseAuth";
import UserDropdown from "../UserDropdown";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
  const navlinks = [
    { name: "Items", href: "/items" },
    { name: "About", href: "/about" },
  ];
  const { user } = UseAuth();
  return (
    <div className="navbar fixed top-0 z-50 bg-card text-card-foreground border-b border-border px-6 shadow-sm">
      <div className="navbar-start">
        <Link
          href="/"
          className=" font-bold text-xl flex items-center gap-2"
        >
          <img src="/logo.png" alt="Prodify Logo" className="h-10 w-10" />
          Prodify
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
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

      <div className="navbar-end space-x-5">
        <ModeToggle />
        {!user ? (
          // GUEST STATE
          <div className="space-x-5">
            <Link href="/login" className="border btn btn-black">
              Login
            </Link>
            <Link href="/register" className="border btn btn-outline btn-primary">
              Register
            </Link>
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
