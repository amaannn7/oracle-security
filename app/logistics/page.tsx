import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function LogisticsPage() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-20 min-h-[70vh] sm:min-h-[85vh] flex items-start">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/logistics.jpg"
                        alt="Oracle Logistics Fleet"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3d5a80]/90 via-[#3d5a80]/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-12 sm:pt-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center sm:text-left">
                            <div className="bg-white rounded-xl p-2 sm:p-3 mb-4 sm:mb-6 w-fit mx-auto sm:mx-0">
                                <Image
                                    src="/oracle-logistics.png"
                                    alt="Oracle Logistics"
                                    width={100}
                                    height={100}
                                    className="w-20 h-20 sm:w-[100px] sm:h-[100px]"
                                />
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#d4af37] text-[#1e3a5f] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                                    Oracle Logistics Division
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                                Oracle Logistics
                            </h1>
                            <p className="text-base sm:text-xl text-white/90 max-w-xl mx-auto sm:mx-0 mb-6 sm:mb-8">
                                Professional logistics and transportation solutions coming soon
                            </p>
                            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-[#d4af37] mb-6 sm:mb-8 mx-auto sm:mx-0"></div>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                                <Link
                                    href="/contact"
                                    className="bg-[#d4af37] text-[#1e3a5f] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white transition-all duration-300 text-sm sm:text-base"
                                >
                                    Get in Touch
                                </Link>
                                <a
                                    href="tel:+94765344213"
                                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white hover:text-[#3d5a80] transition-all duration-300 text-sm sm:text-base"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon Content */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/logistics-2.jpg"
                                alt="Oracle Logistics Services"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/50 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="text-center md:text-left">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#5b7c99] to-[#d4af37] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                                Coming Soon
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Oracle Logistics services are currently under development. We're working hard to bring you comprehensive logistics and transportation solutions.
                            </p>
                            <div className="inline-block bg-[#e8eef4] px-8 py-4 rounded-2xl">
                                <p className="text-[#1e3a5f] font-semibold">
                                    Stay tuned for updates on our logistics services division
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-20 pt-16 border-t border-gray-200 text-center">
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                            Interested in Our Logistics Services?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Contact us for more information about upcoming Oracle Logistics services
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-[#5b7c99] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d4af37] hover:text-[#1e3a5f] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center text-[#1e3a5f] hover:text-[#d4af37] transition-colors gap-2 font-semibold"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
