'use client';

import { useState } from 'react';
import { Bell, Mail, HelpCircle, ChevronDown, Menu, X, Search, ThumbsUp, Eye, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

export default function CategoriesPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Logo & Branding');

    const categories = [
        'Logo & Branding',
        'Web & App Design',
        'Business & Advertising',
        'Clothing & Merchandising',
        'Art & Illustration',
        'Packaging & Label',
        'Books & Brochures',
    ];

    const winningLogos = [
        {
            id: 1,
            title: 'SOUTHERN STYLE CUISINE',
            designer: 'Palak999',
            likes: 43,
            views: '1.5K',
            comments: 11,
            logo: 'southern-style',
        },
        {
            id: 2,
            title: 'WONDER FARM WINE-YARD',
            designer: 'Abishek89',
            likes: 43,
            views: '1.5K',
            comments: 11,
            logo: 'wonder-farm',
        },
        {
            id: 3,
            title: 'SOUTHERN STYLE CUISINE',
            designer: 'Shehani9',
            likes: 43,
            views: '1.5K',
            comments: 11,
            logo: 'southern-style',
        },
        {
            id: 4,
            title: 'PASO PIZZA WOOD EST. 2023',
            designer: 'Rox009',
            likes: 43,
            views: '1.5K',
            comments: 11,
            logo: 'paso-pizza',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <nav className="bg-white border-b border-gray-200">
                <div className="w-full px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-between h-16 py-2">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex items-center">
                                <Image
                                    src="/special-graphics-logo.svg"
                                    alt="Special Graphics"
                                    width={160}
                                    height={54}
                                    className="h-8 sm:h-10 w-auto"
                                    priority
                                />
                            </div>

                            <div className="hidden lg:flex items-center space-x-6">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-bold text-gray-700 hover:text-gray-900">
                                        <span>My Business</span>
                                        <ChevronDown className="h-4 w-4 font-bold" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Projects</DropdownMenuItem>
                                        <DropdownMenuItem>Analytics</DropdownMenuItem>
                                        <DropdownMenuItem>Settings</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900">
                                    Categories
                                </a>

                                <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900">
                                    Find a Designer
                                </a>

                                <div className="relative flex items-center">
                                    <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900 relative inline-block">
                                        <Badge className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-1.5 py-0.5 h-4 rounded">NEW</Badge>
                                        <span>Special Studio</span>
                                    </a>
                                </div>

                                <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900">
                                    Showcase
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <button
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full relative"
                                onClick={() => alert('Notifications')}
                            >
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
                                onClick={() => alert('Messages')}
                            >
                                <Mail className="h-5 w-5" />
                            </button>
                            <button
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
                                onClick={() => alert('Help')}
                            >
                                <HelpCircle className="h-5 w-5" />
                            </button>
                            <Avatar className="h-8 w-8 bg-black cursor-pointer" onClick={() => alert('Profile')}>
                                <AvatarFallback className="bg-black text-white text-xs">P</AvatarFallback>
                            </Avatar>
                            <button
                                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden border-t border-gray-200 py-4">
                            <div className="flex flex-col space-y-4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center justify-between w-full text-sm font-bold text-gray-700 hover:text-gray-900 px-4 py-2">
                                        <span>My Business</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Projects</DropdownMenuItem>
                                        <DropdownMenuItem>Analytics</DropdownMenuItem>
                                        <DropdownMenuItem>Settings</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900 px-4 py-2">
                                    Categories
                                </a>
                                <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900 px-4 py-2">
                                    Find a Designer
                                </a>
                                <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900 px-4 py-2 flex flex-col items-start">
                                    <Badge className="bg-black text-white text-[10px] px-1.5 py-0.5 h-4 mb-0.5 rounded">NEW</Badge>
                                    <span>Special Studio</span>
                                </a>
                                <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900 px-4 py-2">
                                    Showcase
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Breadcrumbs */}
                <div className="mb-6">
                    <nav className="text-sm text-gray-600">
                        <span className="hover:text-gray-900 cursor-pointer">Home</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900">Categories</span>
                    </nav>
                </div>

                {/* Category Selection Section */}
                <div className="mb-12">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Select the Category</h1>
                        <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                            <Input
                                type="text"
                                placeholder="Ex. Logo Design"
                                className="pl-4 pr-10 h-10 w-full border-gray-300"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center gap-4">
                        {categories.map((category) => (
                            selectedCategory === category ? (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className="px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 hover:shadow-md transition-shadow"
                                >
                                    {category}
                                </button>
                            ) : (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                                >
                                    {category}
                                </button>
                            )
                        ))}
                    </div>
                </div>

                {/* Custom Logo Design Promotional Section */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                Custom logo design made for your business
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                                Grow your business with a professional, custom logo designed by our freelance creative experts. Because good design makes great business.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">What you get</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Fun and easy process – dozens of options to choose from</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Work with the best – all designers vetted for quality</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Full ownership – digital and print-ready files</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>100% money-back guarantee for contests. T&Cs apply</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <p className="text-2xl font-bold text-gray-900 mb-4">Starting from $299</p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-gray-800 hover:bg-gray-900 text-white rounded-none px-6 py-2">
                                    View All Categories
                                </Button>
                                <a href="#" className="text-gray-900 font-medium hover:underline self-center">
                                    Start Your Project Now
                                </a>
                            </div>
                        </div>

                        {/* Logo Collage */}
                        <div className="relative h-[500px] lg:h-[600px]">
                            {/* QUALITY LANDSCAPING - Large, Front & Center (Primary Highlight) */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 shadow-2xl z-30">
                                <svg className="w-full h-full" viewBox="0 0 288 288" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}>
                                    {/* Outer hexagon (yellow border) */}
                                    <polygon points="86.4,0 201.6,0 288,144 201.6,288 86.4,288 0,144" fill="#fbbf24" />
                                    {/* Inner hexagon (dark green background) */}
                                    <polygon points="86.4,6 201.6,6 282,144 201.6,282 86.4,282 6,144" fill="#1a4d2e" />
                                </svg>
                                <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                                    <div className="text-center">
                                        <svg viewBox="0 0 200 120" className="w-full h-24 mb-4">
                                            {/* Mountains */}
                                            <polygon points="40,80 70,50 100,80" fill="#fbbf24" />
                                            <polygon points="100,80 130,40 160,80" fill="#fbbf24" />
                                            {/* Pine Trees */}
                                            <polygon points="50,80 45,65 55,65" fill="#1a4d2e" />
                                            <polygon points="60,80 55,65 65,65" fill="#1a4d2e" />
                                            <polygon points="70,80 65,65 75,65" fill="#1a4d2e" />
                                            {/* Sun */}
                                            <circle cx="170" cy="30" r="12" fill="#fbbf24" />
                                            {/* Birds */}
                                            <path d="M30 25 Q35 20 40 25" stroke="#000" strokeWidth="2" fill="none" />
                                            <path d="M35 20 Q40 15 45 20" stroke="#000" strokeWidth="2" fill="none" />
                                        </svg>
                                        <div className="text-lg font-bold mb-1">QUALITY</div>
                                        <div className="text-base font-bold mb-1">
                                            <span className="text-[#fbbf24]">•</span> LANDSCAPING <span className="text-[#fbbf24]">•</span>
                                        </div>
                                        <div className="text-xs mt-2 opacity-90">EST. 1986</div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Left Logo - THE SALTED COD ARTHOUSE */}
                            <div className="absolute top-8 left-8 w-48 h-48 bg-white border border-gray-300 p-4 shadow-lg z-40">
                                <div className="h-full flex flex-col justify-between">
                                    <div className="text-left text-[9px] text-gray-600 font-medium">ESTD</div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <svg viewBox="0 0 150 100" className="w-full h-20 mb-2">
                                            {/* Two fish illustration */}
                                            <ellipse cx="50" cy="40" rx="35" ry="20" fill="none" stroke="#111" strokeWidth="2" />
                                            <path d="M15 40 Q25 30 35 40 Q25 50 15 40" fill="#111" />
                                            <circle cx="60" cy="35" r="2.5" fill="#111" />
                                            <ellipse cx="100" cy="50" rx="35" ry="20" fill="none" stroke="#111" strokeWidth="2" />
                                            <path d="M65 50 Q75 40 85 50 Q75 60 65 50" fill="#111" />
                                            <circle cx="110" cy="45" r="2.5" fill="#111" />
                                        </svg>
                                        <div className="text-xs font-bold text-gray-900 leading-tight">THE SALTED COD</div>
                                        <div className="text-[10px] font-bold text-gray-900 leading-tight">ARTHOUSE</div>
                                    </div>
                                    <div className="text-left text-[9px] text-gray-600">2023</div>
                                </div>
                            </div>

                            {/* Top Right Logo - CARRIAGE HOUSE INN */}
                            <div className="absolute top-8 right-8 w-52 h-40 bg-white border border-gray-300 p-4 shadow-lg z-20">
                                <div className="h-full flex flex-col justify-between">
                                    <div className="flex justify-between text-[9px] text-gray-500">
                                        <span>ESTD.</span>
                                        <span>2022</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <svg viewBox="0 0 180 100" className="w-full h-16 mb-2">
                                            {/* Elegant vintage royal carriage illustration */}
                                            <rect x="30" y="50" width="120" height="35" rx="3" fill="none" stroke="#666" strokeWidth="1.5" />
                                            <rect x="40" y="35" width="100" height="25" rx="2" fill="none" stroke="#666" strokeWidth="1.5" />
                                            <circle cx="60" cy="85" r="6" fill="#666" />
                                            <circle cx="120" cy="85" r="6" fill="#666" />
                                            <line x1="50" y1="50" x2="45" y2="35" stroke="#666" strokeWidth="1.5" />
                                            <line x1="130" y1="50" x2="135" y2="35" stroke="#666" strokeWidth="1.5" />
                                            {/* Carriage details */}
                                            <line x1="50" y1="60" x2="130" y2="60" stroke="#666" strokeWidth="1" />
                                            <line x1="70" y1="50" x2="70" y2="60" stroke="#666" strokeWidth="1" />
                                            <line x1="110" y1="50" x2="110" y2="60" stroke="#666" strokeWidth="1" />
                                        </svg>
                                        <div className="text-sm font-serif text-gray-700 leading-tight">CARRIAGE</div>
                                        <div className="text-xs font-serif text-gray-700 leading-tight">HOUSE INN</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Center Logo - STONE VENEER DIRECT */}
                            <div className="absolute top-1/2 right-12 transform -translate-y-1/2 w-48 h-48 bg-white border border-gray-300 p-4 shadow-lg z-20">
                                <div className="h-full flex flex-col justify-center">
                                    <div className="text-center">
                                        <svg viewBox="0 0 120 120" className="w-full h-32 mb-2">
                                            {/* Circular badge-style with stone/masonry design wheel */}
                                            <circle cx="60" cy="60" r="50" fill="none" stroke="#666" strokeWidth="2" />
                                            <circle cx="60" cy="60" r="35" fill="none" stroke="#666" strokeWidth="1.5" />
                                            {/* Stone/masonry pattern in center */}
                                            <rect x="45" y="45" width="15" height="15" fill="none" stroke="#666" strokeWidth="1" />
                                            <rect x="60" y="45" width="15" height="15" fill="none" stroke="#666" strokeWidth="1" />
                                            <rect x="45" y="60" width="15" height="15" fill="none" stroke="#666" strokeWidth="1" />
                                            <rect x="60" y="60" width="15" height="15" fill="none" stroke="#666" strokeWidth="1" />
                                            {/* Text around circle */}
                                            <text x="60" y="25" textAnchor="middle" fontSize="9" fill="#666" fontWeight="bold">STONE</text>
                                            <text x="100" y="65" textAnchor="middle" fontSize="9" fill="#666" fontWeight="bold">VENEER</text>
                                            <text x="60" y="105" textAnchor="middle" fontSize="9" fill="#666" fontWeight="bold">DIRECT</text>
                                            <text x="20" y="65" textAnchor="middle" fontSize="9" fill="#666" fontWeight="bold">STONE</text>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo Winning Contests Section */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                        Logo Winning Contests
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {winningLogos.map((logo, index) => (
                            <div
                                key={logo.id}
                                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <div className="aspect-square bg-white flex items-center justify-center p-4">
                                    {index === 0 && (
                                        <svg viewBox="0 0 200 200" className="w-full h-full">
                                            {/* Circular logo with dashed border */}
                                            <circle cx="100" cy="100" r="95" fill="none" stroke="#111" strokeWidth="2" strokeDasharray="4 4" />
                                            {/* Background gradient */}
                                            <defs>
                                                <radialGradient id="sunset1" cx="50%" cy="30%">
                                                    <stop offset="0%" stopColor="#f97316" />
                                                    <stop offset="100%" stopColor="#ea580c" />
                                                </radialGradient>
                                            </defs>
                                            <circle cx="100" cy="100" r="90" fill="url(#sunset1)" />
                                            {/* Palm trees */}
                                            <rect x="30" y="120" width="8" height="40" fill="#1a4d2e" />
                                            <path d="M34 120 Q20 100 34 90 Q48 100 34 120" fill="#1a4d2e" />
                                            <rect x="162" y="120" width="8" height="40" fill="#1a4d2e" />
                                            <path d="M166 120 Q152 100 166 90 Q180 100 166 120" fill="#1a4d2e" />
                                            {/* Person with cowboy hat and apron */}
                                            <circle cx="100" cy="140" r="12" fill="#111" />
                                            <rect x="88" y="152" width="24" height="20" fill="#111" />
                                            <path d="M88 152 Q88 145 100 145 Q112 145 112 152" fill="#111" />
                                            {/* Plate and grill */}
                                            <ellipse cx="100" cy="175" rx="15" ry="5" fill="#92400e" />
                                            <rect x="95" y="170" width="10" height="8" fill="#666" />
                                            {/* Sun */}
                                            <circle cx="100" cy="50" r="25" fill="#fbbf24" />
                                            {/* Banner */}
                                            <rect x="20" y="155" width="160" height="25" fill="#111" opacity="0.9" />
                                            <text x="100" y="172" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">SOUTHERN STYLE</text>
                                            <text x="100" y="188" textAnchor="middle" fontSize="10" fill="#fff" opacity="0.9">CUISINE</text>
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg viewBox="0 0 200 200" className="w-full h-full">
                                            {/* Circular logo */}
                                            <circle cx="100" cy="100" r="95" fill="#fff" stroke="#111" strokeWidth="2" />
                                            {/* Farm landscape */}
                                            <path d="M20 120 Q50 100 80 120 Q110 100 140 120 Q170 100 180 120 L180 180 L20 180 Z" fill="#e5e7eb" />
                                            {/* Hills */}
                                            <path d="M20 140 Q60 120 100 140 Q140 120 180 140" stroke="#111" strokeWidth="2" fill="none" />
                                            {/* Farmhouse */}
                                            <rect x="80" y="100" width="40" height="30" fill="#111" />
                                            <path d="M80 100 L100 85 L120 100" fill="#111" />
                                            <rect x="88" y="110" width="8" height="12" fill="#fff" />
                                            {/* Sun with radiating lines */}
                                            <circle cx="100" cy="50" r="20" fill="#fbbf24" />
                                            <line x1="100" y1="30" x2="100" y2="20" stroke="#fbbf24" strokeWidth="2" />
                                            <line x1="100" y1="70" x2="100" y2="80" stroke="#fbbf24" strokeWidth="2" />
                                            <line x1="80" y1="50" x2="70" y2="50" stroke="#fbbf24" strokeWidth="2" />
                                            <line x1="120" y1="50" x2="130" y2="50" stroke="#fbbf24" strokeWidth="2" />
                                            {/* Decorative border - leaves on sides */}
                                            <path d="M20 60 Q15 50 20 40 Q25 50 20 60" fill="#111" />
                                            <path d="M20 80 Q15 70 20 60 Q25 70 20 80" fill="#111" />
                                            <path d="M180 60 Q185 50 180 40 Q175 50 180 60" fill="#111" />
                                            <path d="M180 80 Q185 70 180 60 Q175 70 180 80" fill="#111" />
                                            {/* Stars at top */}
                                            <path d="M50 30 L52 35 L57 35 L53 38 L55 43 L50 40 L45 43 L47 38 L43 35 L48 35 Z" fill="#111" />
                                            <path d="M150 30 L152 35 L157 35 L153 38 L155 43 L150 40 L145 43 L147 38 L143 35 L148 35 Z" fill="#111" />
                                            {/* Banner */}
                                            <rect x="30" y="85" width="140" height="20" fill="#111" />
                                            <text x="100" y="100" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">WONDER FARM</text>
                                            <text x="100" y="115" textAnchor="middle" fontSize="11" fill="#fff">WINE YARD</text>
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg viewBox="0 0 200 200" className="w-full h-full">
                                            {/* Circular logo with dashed border */}
                                            <circle cx="100" cy="100" r="95" fill="none" stroke="#111" strokeWidth="2" strokeDasharray="4 4" />
                                            {/* Background gradient */}
                                            <defs>
                                                <radialGradient id="sunset2" cx="50%" cy="30%">
                                                    <stop offset="0%" stopColor="#f97316" />
                                                    <stop offset="100%" stopColor="#ea580c" />
                                                </radialGradient>
                                            </defs>
                                            <circle cx="100" cy="100" r="90" fill="url(#sunset2)" />
                                            {/* Palm trees */}
                                            <rect x="30" y="120" width="8" height="40" fill="#1a4d2e" />
                                            <path d="M34 120 Q20 100 34 90 Q48 100 34 120" fill="#1a4d2e" />
                                            <rect x="162" y="120" width="8" height="40" fill="#1a4d2e" />
                                            <path d="M166 120 Q152 100 166 90 Q180 100 166 120" fill="#1a4d2e" />
                                            {/* Person with cowboy hat and apron */}
                                            <circle cx="100" cy="140" r="12" fill="#111" />
                                            <rect x="88" y="152" width="24" height="20" fill="#111" />
                                            <path d="M88 152 Q88 145 100 145 Q112 145 112 152" fill="#111" />
                                            {/* Plate and grill */}
                                            <ellipse cx="100" cy="175" rx="15" ry="5" fill="#92400e" />
                                            <rect x="95" y="170" width="10" height="8" fill="#666" />
                                            {/* Sun */}
                                            <circle cx="100" cy="50" r="25" fill="#fbbf24" />
                                            {/* Banner */}
                                            <rect x="20" y="155" width="160" height="25" fill="#111" opacity="0.9" />
                                            <text x="100" y="172" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">SOUTHERN STYLE</text>
                                            <text x="100" y="188" textAnchor="middle" fontSize="10" fill="#fff" opacity="0.9">CUISINE</text>
                                        </svg>
                                    )}
                                    {index === 3 && (
                                        <svg viewBox="0 0 200 200" className="w-full h-full">
                                            {/* Circular logo */}
                                            <circle cx="100" cy="100" r="95" fill="#dc2626" stroke="#fff" strokeWidth="3" />
                                            {/* Decorative rope border */}
                                            <circle cx="100" cy="100" r="85" fill="none" stroke="#fff" strokeWidth="2" />
                                            {/* Pizza oven with flames/tree */}
                                            <rect x="75" y="80" width="50" height="40" rx="3" fill="#fff" />
                                            <path d="M85 80 Q100 60 115 80" fill="#fff" />
                                            <path d="M90 100 Q100 85 110 100" fill="#fbbf24" />
                                            <path d="M92 105 Q100 90 108 105" fill="#fbbf24" />
                                            {/* Stars */}
                                            <path d="M60 70 L62 75 L67 75 L63 78 L65 83 L60 80 L55 83 L57 78 L53 75 L58 75 Z" fill="#fff" />
                                            <path d="M140 70 L142 75 L147 75 L143 78 L145 83 L140 80 L135 83 L137 78 L133 75 L138 75 Z" fill="#fff" />
                                            {/* Banner across middle */}
                                            <rect x="30" y="95" width="140" height="18" fill="#dc2626" />
                                            <text x="100" y="107" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">PASO PIZZA WOOD</text>
                                            {/* EST. 2023 below */}
                                            <text x="100" y="175" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">EST. 2023</text>
                                        </svg>
                                    )}
                                </div>
                                <div className="p-4 bg-white">
                                    <div className="text-xs text-gray-500 mb-2">@Specialgraphics</div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1 text-xs text-gray-600">
                                                <ThumbsUp className="h-3.5 w-3.5" />
                                                <span>{logo.likes}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-gray-600">
                                                <Eye className="h-3.5 w-3.5" />
                                                <span>{logo.views}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-gray-600">
                                                <MessageCircle className="h-3.5 w-3.5" />
                                                <span>{logo.comments}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-900">By {logo.designer}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="#" className="text-gray-900 font-bold text-lg hover:underline">
                            See all Winning Contests
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white text-gray-900 border-t border-gray-200 mt-20">
                <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 mb-12">
                        {/* Company Info */}
                        <div className="sm:col-span-2 lg:col-span-2">
                            <div className="flex items-center mb-6">
                                <Image
                                    src="/special-graphics-logo.svg"
                                    alt="Special Graphics"
                                    width={200}
                                    height={60}
                                    className="h-10 sm:h-12 w-auto"
                                    priority
                                />
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-md">
                                Professional graphic design platform connecting businesses with talented designers worldwide. Create, collaborate, and discover exceptional design solutions that transform your brand.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-start space-x-3">
                                    <Mail className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a href="mailto:support@specialgraphics.com" className="text-sm text-gray-900 hover:text-gray-700 transition-colors">
                                            support@specialgraphics.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <HelpCircle className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <a href="tel:+1234567890" className="text-sm text-gray-900 hover:text-gray-700 transition-colors">
                                            +1 (234) 567-8900
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex flex-col space-y-3">
                                <p className="text-sm text-gray-500 font-medium">Follow Us</p>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('Facebook'); }} aria-label="Facebook">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('Twitter'); }} aria-label="Twitter">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('LinkedIn'); }} aria-label="LinkedIn">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('Instagram'); }} aria-label="Instagram">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('YouTube'); }} aria-label="YouTube">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Platform */}
                        <div>
                            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-6">Platform</h3>
                            <ul className="space-y-4 text-sm sm:text-base">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('How it Works'); }}>
                                        How it Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Pricing'); }}>
                                        Pricing Plans
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Categories'); }}>
                                        Design Categories
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Find Designers'); }}>
                                        Find Designers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Design Contests'); }}>
                                        Design Contests
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Portfolio'); }}>
                                        Portfolio Gallery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Enterprise'); }}>
                                        Enterprise Solutions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-6">Resources</h3>
                            <ul className="space-y-4 text-sm sm:text-base">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Blog'); }}>
                                        Design Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Courses'); }}>
                                        Design Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Community'); }}>
                                        Designer Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Support Center'); }}>
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Design Resources'); }}>
                                        Design Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Templates'); }}>
                                        Free Templates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Help Docs'); }}>
                                        Help Documentation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-6">Company</h3>
                            <ul className="space-y-4 text-sm sm:text-base">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('About Us'); }}>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Careers'); }}>
                                        Careers & Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Contact'); }}>
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Press Kit'); }}>
                                        Press Kit
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Partners'); }}>
                                        Partners & Affiliates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Newsletter'); }}>
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Testimonials'); }}>
                                        Testimonials
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal & Support */}
                        <div>
                            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-6">Legal & Support</h3>
                            <ul className="space-y-4 text-sm sm:text-base">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Privacy Policy'); }}>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Terms of Service'); }}>
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Cookie Policy'); }}>
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('GDPR'); }}>
                                        GDPR Compliance
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Security'); }}>
                                        Security
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Accessibility'); }}>
                                        Accessibility
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors inline-block" onClick={(e) => { e.preventDefault(); alert('Sitemap'); }}>
                                        Sitemap
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-200 pt-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                            <p className="text-sm sm:text-base text-gray-500">
                                © 2025 Special Graphics. All rights reserved.
                            </p>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base text-gray-600">
                                <a href="#" className="hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('Privacy Policy'); }}>
                                    Privacy
                                </a>
                                <a href="#" className="hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('Terms of Service'); }}>
                                    Terms
                                </a>
                                <a href="#" className="hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('Cookie Policy'); }}>
                                    Cookies
                                </a>
                                <a href="#" className="hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); alert('Licensing'); }}>
                                    Licensing
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
