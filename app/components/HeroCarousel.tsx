"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        image: "/main-security.jpeg",
        logo: "/oracle-security.png",
        title: "Oracle Security",
        subtitle: "Protecting What Matters Most",
        description: "Professional security services with combat-trained personnel",
        link: "/security",
        color: "from-[#1e3a5f]/90 via-[#1e3a5f]/70",
    },
    {
        image: "/caregiving-3.jpg",
        logo: "/oracle-care.png",
        title: "Oracle Care",
        subtitle: "Compassionate Healthcare Services",
        description: "Professional nursing and healthcare with dignity and expertise",
        link: "/care",
        color: "from-[#3d5a80]/90 via-[#3d5a80]/70",
    },
    {
        image: "/logistics.jpg",
        logo: "/oracle-logistics.png",
        title: "Oracle Logistics",
        subtitle: "Reliable Transportation Solutions",
        description: "Comprehensive logistics and transportation services",
        link: "/logistics",
        color: "from-[#5b7c99]/90 via-[#5b7c99]/70",
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        unoptimized
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} to-transparent`}></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-24 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center sm:text-left">
                        {/* Animated Content */}
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ${index === currentSlide
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4 absolute"
                                    }`}
                            >
                                {index === currentSlide && (
                                    <>
                                        <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#d4af37] text-[#1e3a5f] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-6">
                                            {slide.subtitle}
                                        </span>
                                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-6">
                                            {slide.title}
                                        </h1>
                                        <p className="text-sm sm:text-xl text-white/90 max-w-xl mx-auto sm:mx-0 mb-4 sm:mb-10">
                                            {slide.description}
                                        </p>
                                        <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-[#d4af37] mb-4 sm:mb-10 mx-auto sm:mx-0"></div>
                                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
                                            <Link
                                                href={slide.link}
                                                className="bg-[#d4af37] text-[#1e3a5f] px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold hover:bg-white transition-all duration-300 text-sm sm:text-base"
                                            >
                                                Explore {slide.title.split(" ")[1]}
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="border-2 border-white text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold hover:bg-white hover:text-[#1e3a5f] transition-all duration-300 text-sm sm:text-base"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? "bg-[#d4af37] text-[#1e3a5f]"
                                : "bg-white/20 text-white hover:bg-white/30"
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-[#1e3a5f]" : "bg-white"
                                }`}></span>
                            <span className="text-xs sm:text-sm font-semibold hidden sm:inline">
                                {slide.title.split(" ")[1]}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
