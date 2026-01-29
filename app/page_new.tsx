import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a5f] via-[#3d5a80] to-[#5b7c99]">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <div className="mb-8">
                        <Image
                            src="/logo.png"
                            alt="Oracle Security Services"
                            width={180}
                            height={180}
                            className="mx-auto rounded-full bg-white p-2 shadow-2xl"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Oracle Security Services
                        <span className="block text-[#d4af37] text-2xl md:text-3xl mt-2">(Pvt) Ltd</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        To be the premier Security Service provider in the Region
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/services"
                            className="bg-[#d4af37] text-[#1e3a5f] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105"
                        >
                            Our Services
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1e3a5f] transition-all transform hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">About Us</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Choosing the right security company is one of the most important business decisions you will ever make.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Oracle Security Services (Pvt) Ltd provides professional, first rate security and protective services. We are proud to highlight that we have a force strength exceeding 1000 disciplined and specifically trained security personnel catering to all aspects of security operations throughout the country.
                        </p>
                        <Link
                            href="/about"
                            className="inline-block bg-[#1e3a5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3d5a80] transition-colors"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#1e3a5f] text-white p-8 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">Our Vision</h3>
                            <p className="text-lg">&quot;To be the premier Security Service provider in the Region.&quot;</p>
                        </div>
                        <div className="bg-[#3d5a80] text-white p-8 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">Our Mission</h3>
                            <p className="text-lg">&quot;To develop comprehensive safety protection services tailored to clients&apos; needs in order to commit to deliver topnotch security services as well as to become nationally recognized organization in the field of security and defense within the next five years.&quot;</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Our Services</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="bg-[#e8eef4] p-6 rounded-2xl text-center">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Security Officers</h3>
                            <p className="text-gray-600">Over 1,000 trained professionals</p>
                        </div>
                        <div className="bg-[#e8eef4] p-6 rounded-2xl text-center">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Cash Management</h3>
                            <p className="text-gray-600">Secure cash transportation services</p>
                        </div>
                        <div className="bg-[#e8eef4] p-6 rounded-2xl text-center">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Event Security</h3>
                            <p className="text-gray-600">Tailored security solutions for events</p>
                        </div>
                        <div className="bg-[#e8eef4] p-6 rounded-2xl text-center">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Escort Services</h3>
                            <p className="text-gray-600">Armed/unarmed escort for cargos</p>
                        </div>
                        <div className="bg-[#e8eef4] p-6 rounded-2xl text-center">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">VIP Protection</h3>
                            <p className="text-gray-600">International standard bodyguard services</p>
                        </div>
                        <div className="bg-[#e8eef4] p-6 rounded-2xl text-center">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Private Investigations</h3>
                            <p className="text-gray-600">Professional investigation services</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/services"
                            className="inline-block bg-[#1e3a5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3d5a80] transition-colors"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ORACLE Values */}
            <section className="py-20 bg-[#1e3a5f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">ORACLE</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div className="text-center text-white">
                            <span className="text-5xl font-bold text-[#d4af37]">O</span>
                            <p className="mt-2 font-semibold">Outstanding</p>
                        </div>
                        <div className="text-center text-white">
                            <span className="text-5xl font-bold text-[#d4af37]">R</span>
                            <p className="mt-2 font-semibold">Reliable</p>
                        </div>
                        <div className="text-center text-white">
                            <span className="text-5xl font-bold text-[#d4af37]">A</span>
                            <p className="mt-2 font-semibold">Astounding</p>
                        </div>
                        <div className="text-center text-white">
                            <span className="text-5xl font-bold text-[#d4af37]">C</span>
                            <p className="mt-2 font-semibold">Committed</p>
                        </div>
                        <div className="text-center text-white">
                            <span className="text-5xl font-bold text-[#d4af37]">L</span>
                            <p className="mt-2 font-semibold">Loyal</p>
                        </div>
                        <div className="text-center text-white">
                            <span className="text-5xl font-bold text-[#d4af37]">E</span>
                            <p className="mt-2 font-semibold">Experienced</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[#1e3a5f]">1000+</p>
                            <p className="text-gray-600 mt-2">Security Personnel</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[#1e3a5f]">12+</p>
                            <p className="text-gray-600 mt-2">Years Min. Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[#1e3a5f]">90%</p>
                            <p className="text-gray-600 mt-2">Combat Troop Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-[#1e3a5f]">50M</p>
                            <p className="text-gray-600 mt-2">LKR Insurance Cover</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zero Liability */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Zero Liability Policy</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The Oracle Security is also known for its &quot;zero liability policy&quot; on all its clients. While being cost-effective at meeting the security demands, the Oracle Security absorbs liability for actions not authorized by the client. Coupled with our insurance policy, this eliminates any liability to any of the client that may arise as the result of the actions of our personnel.
                        </p>
                        <div className="bg-[#d4af37] inline-block px-8 py-4 rounded-2xl">
                            <p className="text-2xl font-bold text-[#1e3a5f]">Insurance Cover: LKR 50 Million</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#3d5a80]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Oracle Security Services delivers the right solutions to meet your security needs.
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Thus, the efficiency and quality of OUR services are assured, and so is YOUR security.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#d4af37] text-[#1e3a5f] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
