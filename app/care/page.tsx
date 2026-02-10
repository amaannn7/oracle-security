import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Care Division - Professional Caregiving Services in Sri Lanka",
    description: "Oracle Care Division offers professional caregiving services including eldercare, patient care, and home nursing assistance. Trained and compassionate caregivers providing quality care across Sri Lanka.",
    keywords: ["Oracle Care", "caregiving services Sri Lanka", "eldercare Sri Lanka", "home nursing", "patient care", "professional caregivers", "healthcare services", "aged care Sri Lanka"],
    openGraph: {
        title: "Oracle Care - Professional Caregiving Services",
        description: "Trained caregivers providing eldercare, patient care, and home nursing across Sri Lanka.",
        url: "https://oracleservices.lk/care",
        images: [{ url: "/oracle-care.png", width: 1200, height: 630, alt: "Oracle Care Division" }],
    },
    alternates: {
        canonical: "https://oracleservices.lk/care",
    },
};

export default function CarePage() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-20 min-h-[70vh] sm:min-h-[85vh] flex items-start">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/caregiving-3.jpg"
                        alt="Oracle Care Healthcare Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3d5a80]/90 via-[#3d5a80]/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-12 sm:pt-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center sm:text-left">
                            <div className="bg-white rounded-xl p-2 sm:p-3 mb-4 sm:mb-6 w-fit mx-auto sm:mx-0">
                                <Image
                                    src="/oracle-care.png"
                                    alt="Oracle Care"
                                    width={100}
                                    height={100}
                                    className="w-20 h-20 sm:w-[100px] sm:h-[100px]"
                                />
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#d4af37] text-[#1e3a5f] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                                    Oracle Care Division
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                                Oracle Care
                            </h1>
                            <p className="text-base sm:text-xl text-white/90 max-w-xl mx-auto sm:mx-0 mb-6 sm:mb-8">
                                Professional nursing and healthcare services with compassion and expertise
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
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </section>

            {/* About Care Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                                Compassionate Healthcare Services
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Oracle Care is dedicated to providing professional nursing and healthcare services with compassion, dignity, and expertise. Our qualified healthcare professionals are committed to delivering personalized care that enhances the quality of life for our clients.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We understand that quality care goes beyond medical expertise – it requires empathy, patience, and a genuine commitment to the wellbeing of those we serve.
                            </p>
                        </div>
                        <div className="relative h-[650px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/caregiving-4.jpeg"
                                alt="Professional Healthcare Services"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Care Services */}
            <section className="py-20 bg-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Our Services</span>
                        <h2 className="text-4xl font-bold text-[#1e3a5f] mt-3 mb-6">
                            Comprehensive Care Solutions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Home Nursing Care */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#3d5a80] to-[#5b7c99] rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Home Nursing Care</h3>
                            <p className="text-gray-600">
                                Professional nursing care in the comfort of your home. Our skilled nurses provide medical care, medication management, and health monitoring tailored to individual needs.
                            </p>
                        </div>

                        {/* Elderly Care */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#5b7c99] to-[#7a9ab8] rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Elderly Care</h3>
                            <p className="text-gray-600">
                                Compassionate care for seniors, including daily living assistance, companionship, and specialized geriatric care to ensure comfort and dignity.
                            </p>
                        </div>

                        {/* Post-Surgical Care */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#7a9ab8] to-[#d4af37] rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Post-Surgical Care</h3>
                            <p className="text-gray-600">
                                Specialized recovery care after surgery, including wound care, pain management, and rehabilitation support to promote healing.
                            </p>
                        </div>

                        {/* Chronic Illness Management */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#3d5a80] to-[#5b7c99] rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Chronic Illness Management</h3>
                            <p className="text-gray-600">
                                Ongoing care and support for patients with chronic conditions such as diabetes, heart disease, and respiratory conditions.
                            </p>
                        </div>

                        {/* Palliative Care */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#5b7c99] to-[#7a9ab8] rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Palliative Care</h3>
                            <p className="text-gray-600">
                                Comfort-focused care for patients with serious illnesses, emphasizing quality of life and symptom management with dignity and compassion.
                            </p>
                        </div>

                        {/* Medical Companionship */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#7a9ab8] to-[#d4af37] rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Medical Companionship</h3>
                            <p className="text-gray-600">
                                Caring companions who provide emotional support, assistance with daily activities, and ensure safety for those requiring supervision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Oracle Care */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                            Why Choose Oracle Care
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/caregiving-2.jpg"
                                alt="Quality Care Services"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                        <div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Qualified Professionals</h3>
                                        <p className="text-gray-600">
                                            All our nursing staff are fully qualified, licensed, and experienced healthcare professionals committed to excellence.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Personalized Care Plans</h3>
                                        <p className="text-gray-600">
                                            Each client receives a customized care plan tailored to their specific medical needs and preferences.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">24/7 Availability</h3>
                                        <p className="text-gray-600">
                                            Round-the-clock care services available to meet your needs at any time of day or night.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Compassionate Approach</h3>
                                        <p className="text-gray-600">
                                            We treat every client with dignity, respect, and genuine compassion, ensuring both physical and emotional wellbeing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#3d5a80] to-[#5b7c99] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Need Professional Care Services?
                    </h2>
                    <p className="text-xl mb-8 text-white/90">
                        Contact Oracle Care today to discuss your healthcare needs and discover how we can provide the compassionate, professional care you deserve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-[#d4af37] text-[#1e3a5f] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3d5a80] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get in Touch
                        </Link>
                        <a
                            href="tel:+94765344213"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3d5a80] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
