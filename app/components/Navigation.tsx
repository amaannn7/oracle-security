"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/oracle.png"
                            alt="Oracle Services"
                            width={110}
                            height={110}
                            className=""
                        />
                        <div className="ml-3 hidden lg:block">
                            <div className="text-[#1e3a5f] font-bold text-lg leading-tight">Oracle Services</div>
                            <div className="text-[#d4af37] text-xs font-semibold">Security • Care • Logistics</div>
                        </div>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-[#1e3a5f]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-[#1e3a5f] hover:text-[#d4af37] transition-colors">Home</Link>
                        <Link href="/security" className="text-[#1e3a5f] hover:text-[#d4af37] transition-colors">Security</Link>
                        <Link href="/care" className="text-[#1e3a5f] hover:text-[#d4af37] transition-colors">Care</Link>
                        <Link href="/logistics" className="text-[#1e3a5f] hover:text-[#d4af37] transition-colors">Logistics</Link>
                        <Link href="/clients" className="text-[#1e3a5f] hover:text-[#d4af37] transition-colors">Clients</Link>
                    </div>

                    <Link
                        href="/contact"
                        className="hidden md:block bg-[#1e3a5f] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d4af37] hover:text-[#1e3a5f] transition-colors"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-2">
                            <Link href="/" className="text-[#1e3a5f] hover:text-[#d4af37] py-2">Home</Link>
                            <Link href="/security" className="text-[#1e3a5f] hover:text-[#d4af37] py-2">Security</Link>
                            <Link href="/care" className="text-[#1e3a5f] hover:text-[#d4af37] py-2">Care</Link>
                            <Link href="/logistics" className="text-[#1e3a5f] hover:text-[#d4af37] py-2">Logistics</Link>
                            <Link href="/clients" className="text-[#1e3a5f] hover:text-[#d4af37] py-2">Clients</Link>
                            <Link href="/contact" className="text-[#1e3a5f] hover:text-[#d4af37] py-2">Contact</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
