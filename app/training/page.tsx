import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Security Training Academy - Professional Guard Training Programs",
    description: "Oracle Training Academy offers comprehensive security guard training programs including physical fitness, tactical training, first aid, fire safety, and professional conduct. SLPSA certified training in Sri Lanka.",
    keywords: ["security training Sri Lanka", "guard training programs", "security academy", "Oracle training", "SLPSA certified", "security guard certification", "professional security training"],
    openGraph: {
        title: "Oracle Training Academy - Security Guard Training",
        description: "Comprehensive security training programs. Physical fitness, tactical training, first aid, and professional conduct.",
        url: "https://oracleservices.lk/training",
        images: [{ url: "/training-1.jpeg", width: 1200, height: 630, alt: "Oracle Training Academy" }],
    },
    alternates: {
        canonical: "https://oracleservices.lk/training",
    },
};

export default function TrainingPage() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1e3a5f] via-[#3d5a80] to-[#5b7c99]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Training</h1>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                </div>
            </section>

            {/* Training Intro */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Three Images Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64">
                            <Image
                                src="/training-1.jpeg"
                                alt="Security Training Session"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64">
                            <Image
                                src="/training-2.jpeg"
                                alt="Firefighting Training"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64">
                            <Image
                                src="training-3.jpeg"
                                alt="Security Personnel Training"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Training forms the quintessence of any business. In the security industry, it may be the only factor that plays a key role under life-threatening situations. Thus, in order to maintain the standard and quality of our services, we require that all our security personnel are trained in programs constantly updated by qualified experts to keep up with the changing security requirements of our clientele.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our training encompasses the physical and logistical aspects of security including armed and unarmed combat, perimeter patrol, elements of gate control, firefighting, first aid, maintenance of security-related documents and a host of other disciplines that strictly follow military principles.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Training and development begin when an employee joins our organization and continue throughout his/her tenure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Programs Table */}
            <section className="py-16 bg-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Training Programs</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            {
                                program: "Firefighting",
                                instructor: "Air Force and Fire Brigade of Sri Lanka",
                                icon: (
                                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                )
                            },
                            {
                                program: "Civil Law",
                                instructor: "Faculty of Law, Colombo",
                                icon: (
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                )
                            },
                            {
                                program: "Bomb Disposal",
                                instructor: "Home Guard Training Institute, Kalpitya",
                                icon: (
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                )
                            },
                            {
                                program: "Explosives ID",
                                instructor: "Ministry of Defense",
                                icon: (
                                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                )
                            },
                            {
                                program: "Weapons Training",
                                instructor: "In-house training",
                                icon: (
                                    <svg className="w-8 h-8 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                program: "First Aid",
                                instructor: "St. Johns Ambulance Service",
                                icon: (
                                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                )
                            },
                            {
                                program: "Customer Service",
                                instructor: "Kent Academy of Career Training",
                                icon: (
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )
                            },
                            {
                                program: "Refresher Courses",
                                instructor: "Development Manager (In-house)",
                                icon: (
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                )
                            },
                        ].map((item, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#d4af37]/30">
                                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1e3a5f]/5 transition-colors">{item.icon}</div>
                                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#d4af37] transition-colors">{item.program}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.instructor}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 bg-gradient-to-r from-[#1e3a5f] to-[#3d5a80] p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 px-4 py-2 rounded-full mb-4">
                                <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></span>
                                <span className="text-[#d4af37] text-sm font-semibold">Recent Training</span>
                            </div>
                            <p className="text-white text-lg">
                                Successfully conducted refresher and firefighting safety training at Navesta Pharmaceuticals (Pvt) Ltd.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Staff */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Operational Staff</h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Oracle Services Security Division has over 1,000 disciplined and specially trained security personnel from all over the country. Being professionally competent, they are fully prepared to meet the security challenges of a volatile and high-risk environment.
                        </p>

                        <div className="bg-gradient-to-br from-[#e8eef4] to-white p-6 sm:p-8 rounded-2xl mb-8 border border-[#1e3a5f]/10">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Our security staff is categorized accordingly:</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { title: "Chief Security Officer", level: "Executive" },
                                    { title: "Officer in Charge", level: "Senior" },
                                    { title: "Senior Security Officer", level: "Senior" },
                                    { title: "Junior Security Officer", level: "Junior" },
                                    { title: "Lady Security Officer", level: "Specialist" },
                                ].map((role, index) => (
                                    <div key={index} className="group relative bg-white px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#1e3a5f]/10 hover:border-[#d4af37]/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#3d5a80] rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[#1e3a5f] text-sm sm:text-base">{role.title}</p>
                                                <span className="text-xs text-[#d4af37] font-medium">{role.level}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#1e3a5f] p-6 rounded-2xl">
                            <p className="text-gray-300">
                                All of our employees are insured against employment risk and have been provided with fringe benefits such as EPF, ETF, leave, medical, and insurance benefits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
