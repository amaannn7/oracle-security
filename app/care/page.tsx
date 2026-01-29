import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function CarePage() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#3d5a80] via-[#5b7c99] to-[#7a9ab8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Image
                        src="/oracle-care.png"
                        alt="Oracle Care"
                        width={250}
                        height={250}
                        className="mx-auto mb-6"
                        priority
                    />
                    <span className="inline-block px-4 py-2 bg-[#d4af37] text-[#1e3a5f] rounded-full text-sm font-semibold mb-4">
                        Oracle Care Division
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Oracle Care
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                        Comprehensive care services coming soon
                    </p>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                </div>
            </section>

            {/* Coming Soon Content */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-12">
                        <div className="w-32 h-32 bg-gradient-to-br from-[#3d5a80] to-[#5b7c99] rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                            Coming Soon
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Oracle Care services are currently under development. We're working hard to bring you comprehensive care solutions.
                        </p>
                        <div className="inline-block bg-[#e8eef4] px-8 py-4 rounded-2xl">
                            <p className="text-[#1e3a5f] font-semibold">
                                Stay tuned for updates on our care services division
                            </p>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-16 pt-16 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                            Interested in Our Care Services?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Contact us for more information about upcoming Oracle Care services
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-[#3d5a80] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2b4c75] transition-all duration-300 shadow-lg hover:shadow-xl"
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
