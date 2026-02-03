import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

export default function ServicesPage() {
    const services = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Security Officers",
            description: "Over 1,000 carefully selected professionals trained extensively in defensive tactics and handgun use.",
            features: ["1000+ Trained Professionals", "Visible Security Deterrent", "Defensive Tactics Expert", "Island-Wide Coverage"],
            color: "from-[#1e3a5f] to-[#3d5a80]",
            image: "/security-1.jpeg"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Cash Management",
            description: "Customized vans with highly trained crew for secure cash transfer operations.",
            features: ["Armored Vehicle Fleet", "GPS Tracking", "Experienced Crew", "Real-Time Monitoring"],
            color: "from-[#3d5a80] to-[#5b7c99]",
            image: "/security4.jpeg"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Event Security",
            description: "Tailored security solutions combining technology with personnel for flawless event management.",
            features: ["Crowd Control", "Access Management", "Emergency Response", "Coordination with Authorities"],
            color: "from-[#5b7c99] to-[#1e3a5f]",
            image: "/event1.jpeg"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            title: "Escort Services",
            description: "Armed/unarmed escort services for high-value cargo and individuals between destinations.",
            features: ["Armed Guards Available", "Route Planning", "Cargo Protection", "24/7 Availability"],
            color: "from-[#1e3a5f] to-[#d4af37]",
            image: "/security2.jpeg"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            title: "VIP Protection",
            description: "International standard bodyguard services with Special Forces veterans and expert operatives.",
            features: ["Ex-Special Forces", "Close Protection", "Threat Assessment", "Discrete Operations"],
            color: "from-[#d4af37] to-[#3d5a80]",
            image: "/security-3.jpeg"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Training Programs",
            description: "Comprehensive security training for corporate and individual clients.",
            features: ["Self-Defense Training", "Awareness Programs", "First Aid Certification", "Custom Modules"],
            color: "from-[#3d5a80] to-[#1e3a5f]",
            image: "/training-1.jpeg"
        }
    ];

    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pb-16 bg-gradient-to-br from-[#1e3a5f] via-[#3d5a80] to-[#5b7c99]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-[#d4af37] text-[#1e3a5f] rounded-full text-sm font-semibold mb-6">
                        Oracle Security Division
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        <span className="inline-block animate-letter-spacing">Security</span>{" "}
                        <span className="inline-block animate-bounce-in animate-delay-300">Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Professional security solutions from Oracle Services (Pvt) Ltd
                    </p>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto animate-reveal-mask animate-delay-400"></div>
                </div>
            </section>

            {/* Services Intro */}
            <section className="py-20 bg-gradient-to-b from-white to-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="scroll-animate max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
                            Oracle Security - Comprehensive Protection Solutions
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our Oracle Security division transcends the boundaries of traditional security in Sri Lanka. We offer a wide range of services from security guard services for organizations and private functions to security transport for cash and valuables; from surveillance and personal/VIP bodyguards to specialized training programs.
                        </p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="scroll-animate grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift"
                            >
                                {/* Image Header */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="mb-2 transform group-hover:scale-110 transition-transform duration-500 flex justify-center">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold">{service.title}</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <svg className="w-5 h-5 text-[#d4af37] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Gradient Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Officers Premium Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="scroll-animate text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#d4af37] text-[#1e3a5f] rounded-full text-sm font-semibold mb-4">
                            Elite Security Personnel
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
                            Professional Security Officers
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                            Over 1,000 carefully selected professionals, 90% of whom are combat veterans. Extensively trained in defensive tactics, handgun use, and professional security operations.
                        </p>
                    </div>

                    <div className="scroll-animate grid md:grid-cols-3 gap-8 mb-12">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="/security-1.jpeg"
                                alt="Security Officers"
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] via-transparent to-transparent opacity-50"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Trained Professionals</h3>
                                <p className="text-white/90">Expert security personnel ready for deployment</p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="/security-2.jpeg"
                                alt="Security Operations"
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] via-transparent to-transparent opacity-50"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Combat Veterans</h3>
                                <p className="text-white/90">90% of our officers are experienced combat veterans</p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="/security-3.jpeg"
                                alt="VIP Protection"
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] via-transparent to-transparent opacity-50"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">VIP Protection</h3>
                                <p className="text-white/90">Elite close protection and bodyguard services</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#3d5a80] rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-4 gap-6 text-center text-white">
                            <div>
                                <div className="text-4xl font-bold text-[#d4af37] mb-2">1000+</div>
                                <div className="text-sm uppercase tracking-wide">Trained Officers</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#d4af37] mb-2">90%</div>
                                <div className="text-sm uppercase tracking-wide">Combat Veterans</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#d4af37] mb-2">24/7</div>
                                <div className="text-sm uppercase tracking-wide">Operations</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#d4af37] mb-2">Island-Wide</div>
                                <div className="text-sm uppercase tracking-wide">Coverage</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cash Management Detailed Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-[#1e3a5f] to-[#3d5a80] p-12 rounded-3xl shadow-2xl">
                                <h3 className="text-2xl font-bold text-[#d4af37] mb-8">We Serve:</h3>
                                <div className="grid grid-cols-2 gap-4 text-white">
                                    {["Banks", "Restaurants", "Diamond Merchants", "Jewelers", "Petrol Stations", "Government Orgs", "Retail Outlets", "Supermarkets", "Corporations", "Shopping Malls"].map((item, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-sm font-semibold mb-4">
                                Premium Service
                            </span>
                            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-6">
                                Cash Management Excellence
                            </h2>
                            <div className="w-20 h-1 bg-[#d4af37] mb-6"></div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Transfer your cash to any destination without apprehension. Our customized vans are equipped with state-of-the-art security systems and operated by highly trained crews under experienced supervision.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-[#e8eef4] p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-[#1e3a5f]">100%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>
                                <div className="bg-[#e8eef4] p-4 rounded-xl">
                                    <div className="text-3xl font-bold text-[#1e3a5f]">24/7</div>
                                    <div className="text-sm text-gray-600">Operations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Security Showcase */}
            <section className="py-20 bg-gradient-to-br from-[#1e3a5f] via-[#3d5a80] to-[#1e3a5f] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-[#d4af37] text-[#1e3a5f] rounded-full text-sm font-semibold mb-4">
                            Event Management
                        </span>
                        <h2 className="text-4xl font-bold mb-6">Flawless Event Security</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Specific events require special security arrangements. We provide tailored solutions combining electronic gadgetry with security personnel and computerized coordination systems.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { img: "/event1.jpeg", title: "Event Security", desc: "Large-scale event coverage" },
                            { img: "/event2.jpeg", title: "Venue Protection", desc: "Complete venue security" },
                            { img: "/event3.jpeg", title: "Access Control", desc: "Secure entry management" },
                            { img: "/security4.jpeg", title: "Emergency Response", desc: "Rapid response team" }
                        ].map((event, idx) => (
                            <div key={idx} className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden hover:scale-105">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.img}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-gray-300 text-sm">{event.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#e8eef4] to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                        Ready to Enhance Your Security?
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Contact us today for a customized security solution tailored to your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-[#1e3a5f] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#152a45] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get a Quote
                        </a>
                        <a
                            href="https://wa.me/94765344213"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
