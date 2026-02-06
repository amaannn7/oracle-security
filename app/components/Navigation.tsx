"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/security", label: "Security" },
        { href: "/care", label: "Care" },
        { href: "/logistics", label: "Logistics" },
        { href: "/training", label: "Training" },
        { href: "/clients", label: "Clients" },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/oracle.png"
                            alt="Oracle Services"
                            width={110}
                            height={110}
                        />
                        <div className="ml-3 hidden lg:block">
                            <div className="text-[#1e3a5f] font-bold text-lg leading-tight">Oracle Services</div>
                            <div className="text-[#d4af37] text-xs font-semibold tracking-wide">Security • Care • Logistics</div>
                        </div>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-[#1e3a5f] p-2 rounded-lg hover:bg-[#e8eef4] transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                                    ? 'text-[#d4af37]'
                                    : 'text-[#1e3a5f] hover:text-[#d4af37]'
                                    }`}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#d4af37] rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="hidden md:inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d4af37] hover:text-[#1e3a5f] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col py-3 border-t border-gray-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:translate-x-1 ${isActive(link.href)
                                    ? 'text-[#d4af37] bg-[#e8eef4]/50'
                                    : 'text-[#1e3a5f] hover:text-[#d4af37] hover:bg-[#e8eef4]/30'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mt-2 mx-4 text-center bg-[#1e3a5f] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#d4af37] hover:text-[#1e3a5f] transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
