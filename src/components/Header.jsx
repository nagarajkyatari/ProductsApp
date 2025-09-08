// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Site Name */}
                <div className="text-xl font-semibold text-gray-800">
                    Products App
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-gray-700">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/cart" className="hover:text-blue-500">Cart</Link>
                    {/* <a href="/menu" className="hover:text-blue-500">Menu</a> */}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Links */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 px-2 text-gray-700">
                    <a href="/" className="block hover:text-blue-500">Home</a>
                    <a href="/cart" className="block hover:text-blue-500">Cart</a>
                    {/* <a href="/menu" className="block hover:text-blue-500">Menu</a> */}
                </div>
            )}
        </header>
    );
}
