import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import CountUpStats from "../components/CountUpStats";

export default function SecurityPage() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-20 min-h-[70vh] sm:min-h-[85vh] flex items-start">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/main-security.jpeg"
                        alt="Oracle Security Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/70 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-12 sm:pt-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center sm:text-left">
                            <div className="bg-white rounded-xl p-2 sm:p-3 mb-4 sm:mb-6 w-fit mx-auto sm:mx-0">
                                <Image
                                    src="/oracle-security.png"
                                    alt="Oracle Security"
                                    width={100}
                                    height={100}
                                    className="w-20 h-20 sm:w-[100px] sm:h-[100px]"
                                />
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#d4af37] text-[#1e3a5f] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                                    Oracle Security Division
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                                Oracle Security
                            </h1>
                            <p className="text-base sm:text-xl text-white/90 max-w-xl mx-auto sm:mx-0 mb-6 sm:mb-8">
                                Premier security solutions with over 1,000 trained professionals protecting what matters most
                            </p>
                            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-[#d4af37] mb-6 sm:mb-8 mx-auto sm:mx-0"></div>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                                <Link
                                    href="/services"
                                    className="bg-[#d4af37] text-[#1e3a5f] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white transition-all duration-300 text-sm sm:text-base"
                                >
                                    Our Services
                                </Link>
                                <Link
                                    href="/contact"
                                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white hover:text-[#1e3a5f] transition-all duration-300 text-sm sm:text-base"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CountUpStats stats={[
                        { num: "1000+", label: "Trained Personnel" },
                        { num: "90%", label: "Combat Veterans" },
                        { num: "50M", label: "LKR Insurance Coverage" },
                        { num: "24/7", label: "Operations" },
                    ]} />
                </div>
            </section>

            {/* Overview */}
            <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#1e3a5f] mb-4 sm:mb-6">
                            Comprehensive Security Solutions
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Oracle Security transcends the boundaries of traditional security in Sri Lanka. We offer a wide range of services from security guard services for organizations and private functions to security transport for cash and valuables, surveillance, personal/VIP bodyguards, and specialized training programs.
                        </p>
                    </div>

                    {/* Security Images Showcase */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12 sm:mb-16">
                        <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/securitymain-1.jpeg"
                                alt="Oracle Security Operations"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Professional Security Services</h3>
                                <p className="text-gray-200">Protecting your assets with excellence</p>
                            </div>
                        </div>
                        <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/securitymain-2.jpeg"
                                alt="Oracle Security Team"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Trained Personnel</h3>
                                <p className="text-gray-200">1000+ security professionals at your service</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        <Link href="/services" className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1e3a5f] to-[#3d5a80] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-3 sm:mb-4">Security Services</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                Comprehensive security solutions including officers, cash management, VIP protection, and event security.
                            </p>
                            <div className="text-sm sm:text-base text-[#d4af37] font-semibold flex items-center group-hover:gap-3 gap-2 transition-all group-hover:text-[#1e3a5f]">
                                View All Services
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>

                        <Link href="/training" className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3d5a80] to-[#5b7c99] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-3 sm:mb-4">Training Programs</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                Professional security training, self-defense, awareness programs, and certifications.
                            </p>
                            <div className="text-sm sm:text-base text-[#d4af37] font-semibold flex items-center group-hover:gap-3 gap-2 transition-all group-hover:text-[#1e3a5f]">
                                Explore Training
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>

                        <Link href="/clients" className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#5b7c99] to-[#d4af37] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-3 sm:mb-4">Our Clients</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                Trusted by major corporations, hotels, banks, and government organizations across Sri Lanka.
                            </p>
                            <div className="text-sm sm:text-base text-[#d4af37] font-semibold flex items-center group-hover:gap-3 gap-2 transition-all group-hover:text-[#1e3a5f]">
                                View Clients
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-20 bg-gradient-to-br from-[#1e3a5f] to-[#3d5a80] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                        Ready to Secure Your Assets?
                    </h2>
                    <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/90">
                        Contact Oracle Security today for a customized security solution tailored to your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-[#d4af37] text-[#1e3a5f] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-[#b8941f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                        >
                            Get a Quote
                        </Link>
                        <a
                            href="https://wa.me/94765344213"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
