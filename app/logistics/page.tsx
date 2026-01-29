import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function LogisticsPage() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#5b7c99] via-[#7a9ab8] to-[#d4af37]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Image
                        src="/oracle-logistics.png"
                        alt="Oracle Logistics"
                        width={250}
                        height={250}
                        className="mx-auto mb-6"
                        priority
                    />
                    <span className="inline-block px-4 py-2 bg-white text-[#1e3a5f] rounded-full text-sm font-semibold mb-4">
                        Oracle Logistics Division
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Oracle Logistics
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                        Professional logistics and transportation solutions coming soon
                    </p>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </section>

            {/* Coming Soon Content */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-12">
                        <div className="w-32 h-32 bg-gradient-to-br from-[#5b7c99] to-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                    {/* Contact CTA */}
                    <div className="mt-16 pt-16 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                            Interested in Our Logistics Services?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Contact us for more information about upcoming Oracle Logistics services
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-[#5b7c99] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4a6a88] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-12">
                        <Link
                            href="/"
                            className="inline-flex items-center text-[#1e3a5f] hover:text-[#d4af37] transition-colors gap-2"
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
