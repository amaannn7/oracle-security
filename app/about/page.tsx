import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
    title: "About Us - Leading Multi-Sector Service Provider in Sri Lanka",
    description: "Learn about Oracle Services (Pvt) Ltd, Sri Lanka's trusted multi-sector service provider since 2008. Three specialized divisions - Security, Care, and Logistics - serving leading corporations across the country.",
    keywords: ["about Oracle Services", "Oracle Services Sri Lanka", "security company history", "Sri Lanka service provider", "Oracle Services Pvt Ltd"],
    openGraph: {
        title: "About Oracle Services (Pvt) Ltd",
        description: "Sri Lanka's trusted multi-sector service provider since 2008. Security, Care, and Logistics divisions.",
        url: "https://oracleservices.lk/about",
        images: [{ url: "/oracle.png", width: 1200, height: 630, alt: "About Oracle Services" }],
    },
    alternates: {
        canonical: "https://oracleservices.lk/about",
    },
};

export default function AboutPage() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1e3a5f] via-[#3d5a80] to-[#5b7c99]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Choosing the right service provider is one of the most important business decisions you will ever make.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Oracle Services (Pvt) Ltd is a comprehensive solutions provider operating through three specialized divisions: <span className="font-semibold text-[#1e3a5f]">Oracle Security</span>, <span className="font-semibold text-[#1e3a5f]">Oracle Care</span>, and <span className="font-semibold text-[#1e3a5f]">Oracle Logistics</span>. We deliver professional, first-rate services tailored to meet the diverse needs of our clients across multiple sectors.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our <span className="font-semibold">Security Division</span> maintains a force strength exceeding 1,000 disciplined and specifically trained security personnel catering to all aspects of security operations throughout the country. We serve government complexes, commercial establishments, and a wide variety of corporate operations using state-of-the-art security equipment.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We offer specialized training that includes industrial security, control systems, efficient and timely services, first aid, firefighting, and a host of other disciplines that give us an edge over other service providers. Our cadre consists of well-experienced and specially trained sector managers within the organization to supervise and oversee operations with the view to provide uninterrupted services to our clients.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                                Oracle Services delivers the right solutions to meet your comprehensive service needs across Security, Care, and Logistics.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 bg-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <FadeIn>
                            <div className="bg-[#1e3a5f] text-white p-8 rounded-2xl hover-lift">
                                <h2 className="text-3xl font-bold mb-6 text-[#d4af37]">Our Vision</h2>
                                <p className="text-xl leading-relaxed">
                                    &quot;To be the premier multi-sector service provider in the Region, delivering excellence across Security, Care, and Logistics.&quot;
                                </p>
                            </div>
                        </FadeIn>

                        {/* Mission */}
                        <FadeIn delay={150}>
                            <div className="bg-[#3d5a80] text-white p-8 rounded-2xl hover-lift">
                                <h2 className="text-3xl font-bold mb-6 text-[#d4af37]">Our Mission</h2>
                                <p className="text-lg leading-relaxed">
                                    &quot;To develop comprehensive solutions tailored to clients&apos; needs across our three divisions - Security, Care, and Logistics - delivering top-notch services and becoming a nationally recognized organization within the next five years.&quot;
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Our Strength */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Our Strength</h2>
                            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our personnel are our strength. While we live by this principle, the services we provide are founded on their vast experience, foresight, professional expertise, and reliability. Our affiliation with national organizations enables us to maintain international security standards. Moreover, we provide our clients an insurance cover to deal with contingencies having already provided an amount of LKR 50 million.
                            </p>
                            <p className="text-xl text-[#1e3a5f] font-semibold text-center mt-8">
                                Thus, the efficiency and quality of OUR services are assured, and so is YOUR security.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 bg-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Team</h2>
                        <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/team-1.jpeg"
                                alt="Oracle Services Team"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/team-2.jpeg"
                                alt="Oracle Services Team"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ORACLE Values */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Security Personnel Background</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                        <p className="mt-6 text-lg text-gray-600">The core areas that give our security personnel the advantage over others and put them at par with the best are as follows:</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                        <div className="bg-[#1e3a5f] text-white p-6 rounded-2xl text-center">
                            <span className="text-5xl font-bold text-[#d4af37]">O</span>
                            <p className="mt-3 font-semibold">Outstanding</p>
                        </div>
                        <div className="bg-[#2a4a6f] text-white p-6 rounded-2xl text-center">
                            <span className="text-5xl font-bold text-[#d4af37]">R</span>
                            <p className="mt-3 font-semibold">Reliable</p>
                        </div>
                        <div className="bg-[#3d5a80] text-white p-6 rounded-2xl text-center">
                            <span className="text-5xl font-bold text-[#d4af37]">A</span>
                            <p className="mt-3 font-semibold">Astounding</p>
                        </div>
                        <div className="bg-[#4a6a90] text-white p-6 rounded-2xl text-center">
                            <span className="text-5xl font-bold text-[#d4af37]">C</span>
                            <p className="mt-3 font-semibold">Committed</p>
                        </div>
                        <div className="bg-[#5b7c99] text-white p-6 rounded-2xl text-center">
                            <span className="text-5xl font-bold text-[#d4af37]">L</span>
                            <p className="mt-3 font-semibold">Loyal</p>
                        </div>
                        <div className="bg-[#6b8ca9] text-white p-6 rounded-2xl text-center">
                            <span className="text-5xl font-bold text-[#d4af37]">E</span>
                            <p className="mt-3 font-semibold">Experienced</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our security personnel have a minimum of 12 years of service in the Armed Forces of Sri Lanka. Additionally, around 90% of our staff has experience in commanding and administrating combat troops with a number of select having experience in military intelligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Zero Liability */}
            <section className="py-16 bg-[#1e3a5f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Zero Liability</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Oracle Services is known for its &quot;zero liability policy&quot; across all our divisions. While being cost-effective at meeting service demands, Oracle Services absorbs liability for actions not authorized by the client. Coupled with our comprehensive insurance policy, this eliminates any liability to our clients that may arise as the result of the actions of our personnel.
                        </p>
                        <div className="bg-[#d4af37] p-6 rounded-2xl text-center mt-8">
                            <p className="text-2xl font-bold text-[#1e3a5f]">Insurance Cover: LKR 50 Million</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
