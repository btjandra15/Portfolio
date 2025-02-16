"use client"

import React, { useState } from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkPurple text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Brandon Tjandra
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link href="/about" className="hover:text-gray-200">
            Experience
          </Link>

          <Link href="/projects" className="hover:text-gray-200">
            Projects
          </Link>

          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 bg-darkPurple p-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
