"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full relative z-50">
            {/* Top Bar */}
            <div className="border-b border-gray-200 py-2 text-xs text-gray-600 bg-white relative z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        <Link href="/about" className="hover:text-black">About Us</Link>
                        <Link href="/support" className="hover:text-black">Customer Support</Link>
                    </div>
                    <div className="text-center hidden sm:block">Welcome to Special Graphics!</div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-[10px]">👤</span>
                        </div>
                        <Link href="/auth" className="hover:text-black font-medium">Log In</Link>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="bg-white shadow-sm sticky top-0 relative z-40">
                <div className="container mx-auto px-4 flex items-center h-[80px]">
                    {/* Logo */}
                    <div className="shrink-0 mr-8">
                        <Link href="/">
                            <Image
                                src="/logo.avif"
                                alt="Special Graphics Logo"
                                width={200}
                                height={60}
                                className="w-auto h-12 md:h-14 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden xl:flex flex-1 items-center justify-between text-sm font-medium text-gray-700 h-full">

                        <Link href="/contests" className="hover:text-pink-600 h-full flex items-center">Design Contests</Link>
                        <Link href="/find-designer" className="hover:text-pink-600 h-full flex items-center">Find a Designer</Link>

                        {/* DROPDOWN 1: Browse Categories */}
                        <div className="relative group h-full flex items-center">
                            <Link href="/categories" className="hover:text-pink-600 flex items-center gap-1 h-full focus:outline-none cursor-pointer">
                                Browse categories
                            </Link>
                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 w-60 bg-white shadow-lg rounded-b-md py-2 hidden group-hover:block border-t-2 border-transparent group-hover:border-pink-600 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                                <Link href="/categories" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600 font-bold border-b border-gray-100">All Categories</Link>
                                <Link href="/category/logo-brand" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Logo & Brand</Link>
                                <Link href="/category/packaging-label" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Packaging & Label</Link>
                                <Link href="/category/magazine-book-covers" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Magazine & Book Covers</Link>
                                <Link href="/category/web-app-design" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Web & App Design</Link>
                                <Link href="/category/business-advertising" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Business & Advertising</Link>
                                <Link href="/category/clothing-merchandise" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Clothing & Merchandise</Link>
                            </div>
                        </div>

                        {/* DROPDOWN 2: Become a Designer */}
                        <div className="relative group h-full flex items-center">
                            <button className="hover:text-pink-600 flex items-center gap-1 h-full focus:outline-none cursor-pointer">
                                Become a Designer
                            </button>
                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-md py-2 hidden group-hover:block border-t-2 border-transparent group-hover:border-pink-600 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                                <Link href="/designer/basics" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Basics of Graphic Design</Link>
                                <Link href="/designer/advance-logo" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Advance Logo Design Program</Link>
                                <Link href="/designer/advance-package" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-pink-600 text-gray-600">Advance Package Design Program</Link>
                            </div>
                        </div>

                        <Link href="/studio" className="hover:text-pink-600 h-full flex items-center">Special Studio</Link>
                        <Link href="/inspirations" className="hover:text-pink-600 h-full flex items-center">Inspirations</Link>
                        <Link href="/how-it-works" className="hover:text-pink-600 h-full flex items-center">How It Works</Link>
                        <Link href="/buy" className="hover:text-pink-600 h-full flex items-center">Buy Digital Graphics</Link>
                        <Link href="/faqs" className="hover:text-pink-600 h-full flex items-center">FAQs</Link>
                    </nav>

                    {/* Mobile Menu Icon */}
                    <button className="xl:hidden ml-auto text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
