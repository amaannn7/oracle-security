import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import CountUpStats from "./components/CountUpStats";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Marquee Section - Modern Blue Design */}
      <section className="relative py-8 bg-gradient-to-r from-[#1e3a5f] via-[#2b4c75] to-[#1e3a5f] overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px)' }}></div>
        </div>

        {/* Glowing accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

        <div className="relative marquee">
          <div className="marquee-content">
            <div className="flex items-center gap-8 px-8">
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Security Division</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Care Division</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Logistics Division</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Trusted by Major Corporations</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">90% Combat Veterans</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Zero Liability Policy</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">LKR 50M Insurance Coverage</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">1000+ Trained Personnel</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Island-Wide Service</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Premier Service Provider</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Professional & Reliable</span>
              </div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-8 px-8">
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Security Division</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Care Division</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Logistics Division</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Trusted by Major Corporations</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">90% Combat Veterans</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Zero Liability Policy</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">LKR 50M Insurance Coverage</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">1000+ Trained Personnel</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Island-Wide Service</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Premier Service Provider</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-white font-semibold text-base whitespace-nowrap">Professional & Reliable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section id="divisions" className="py-24 bg-gradient-to-b from-white to-[#e8eef4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Our Divisions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-6">
              Three Pillars of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oracle Services provides comprehensive solutions across three specialized divisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Oracle Security */}
            <Link href="/security" className="scroll-animate group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1e3a5f] to-[#3d5a80]"></div>
              <div className="p-8">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/oracle-security.png"
                    alt="Oracle Security"
                    width={100}
                    height={100}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Oracle Security</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Premier security solutions with over 1,000 trained professionals. From security officers to VIP protection, cash management to event security.
                </p>
                <div className="inline-flex items-center text-[#1e3a5f] font-semibold hover:text-[#d4af37] transition-colors group-hover:gap-3 gap-2">
                  Explore Security Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Oracle Care - Coming Soon */}
            <Link href="/care" className="scroll-animate group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#3d5a80] to-[#5b7c99]"></div>
              <div className="p-8 relative">
                <div className="absolute top-4 right-4 bg-[#d4af37] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/oracle-care.png"
                    alt="Oracle Care"
                    width={100}
                    height={100}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Oracle Care</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive care services division. Details and services will be announced soon.
                </p>
                <div className="inline-flex items-center text-[#3d5a80] font-semibold group-hover:gap-3 gap-2">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Oracle Logistics - Coming Soon */}
            <Link href="/logistics" className="scroll-animate group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5b7c99] to-[#d4af37]"></div>
              <div className="p-8 relative">
                <div className="absolute top-4 right-4 bg-[#d4af37] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/oracle-logistics.png"
                    alt="Oracle Logistics"
                    width={100}
                    height={100}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Oracle Logistics</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional logistics and transportation solutions. Details and services will be announced soon.
                </p>
                <div className="inline-flex items-center text-[#5b7c99] font-semibold group-hover:gap-3 gap-2">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Modern */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate animate-slide-in-left">
              <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider animate-reveal-mask">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-6 leading-tight">
                <span className="inline-block animate-char-rotate">Y</span>
                <span className="inline-block animate-char-rotate animate-delay-100">o</span>
                <span className="inline-block animate-char-rotate animate-delay-100">u</span>
                <span className="inline-block animate-char-rotate animate-delay-100">r</span>{" "}
                <span className="inline-block animate-bounce-in animate-delay-200">Trusted</span>{" "}
                <span className="inline-block animate-bounce-in animate-delay-300">Service</span>{" "}
                <span className="inline-block animate-bounce-in animate-delay-400">Partner</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Choosing the right service provider is one of the most important business decisions you will ever make. Oracle Services (Pvt) Ltd delivers comprehensive solutions through three specialized divisions: Security, Care, and Logistics.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our <span className="font-bold text-[#1e3a5f]">Security Division</span> proudly maintains a force strength exceeding <span className="font-bold text-[#1e3a5f]">1,000 disciplined and specifically trained personnel</span> catering to all aspects of security operations throughout the country.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-[#d4af37] transition-colors group">
                Learn More About Us
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="scroll-animate animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3a5f]/20 to-[#d4af37]/20 rounded-3xl blur-2xl animate-pulse-slow"></div>

                {/* Main large image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift mb-4">
                  <Image
                    src="/security1.jpeg"
                    alt="Professional Security Services"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <p className="text-2xl font-bold text-[#d4af37]">1000+</p>
                        <p className="text-sm text-white/90">Security Personnel</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <p className="text-2xl font-bold text-[#d4af37]">24/7</p>
                        <p className="text-sm text-white/90">Protection</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Three smaller images in a grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift group animate-slide-in-up animate-delay-100">
                    <Image
                      src="/security2.jpeg"
                      alt="Security Training"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      unoptimized
                    />

                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift group animate-slide-in-up animate-delay-200">
                    <Image
                      src="/security3.jpeg"
                      alt="Event Security"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      unoptimized
                    />

                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift group animate-slide-in-up animate-delay-300">
                    <Image
                      src="/security4.jpeg"
                      alt="VIP Protection"
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      unoptimized
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider animate-fade-in">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3">
              <span className="inline-block animate-split-text">Vision</span>{" "}
              <span className="inline-block animate-char-rotate animate-delay-200">&</span>{" "}
              <span className="inline-block animate-split-text animate-delay-300">Mission</span>
            </h2>
          </div>
          <div className="scroll-animate grid md:grid-cols-2 gap-8">
            <div className="group relative bg-[#1e3a5f] p-10 rounded-3xl overflow-hidden hover-lift animate-slide-in-left">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#d4af37] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Our Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">&quot;To be the premier Security Service provider in the Region.&quot;</p>
              </div>
            </div>
            <div className="group relative bg-white border-2 border-[#e8eef4] p-10 rounded-3xl overflow-hidden hover-lift animate-slide-in-right">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#1e3a5f]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#1e3a5f] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">&quot;To develop comprehensive safety protection services tailored to clients&apos; needs to deliver top-notch security services and become a nationally recognized organization in security and defense.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Modern Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider animate-reveal-mask">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-4">
              <span className="inline-block animate-letter-spacing">Our</span>{" "}
              <span className="inline-block animate-bounce-in animate-delay-300">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive security solutions tailored to your needs</p>
          </div>
          <div className="scroll-animate grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Security Officers",
                desc: "Over 1,000 trained & disciplined professionals",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Cash Management",
                desc: "Secure cash transportation & handling",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Event Security",
                desc: "Professional event security management",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: "Escort Services",
                desc: "Armed/unarmed escort for valuables",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "VIP Protection",
                desc: "International standard bodyguard services",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Private Investigations",
                desc: "Professional & confidential investigations",
                color: "bg-[#1e3a5f]"
              },
            ].map((service, index) => (
              <div key={index} className={`group bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#d4af37] hover:shadow-xl transition-all duration-300 hover-lift animate-slide-in-up animate-delay-${(index + 1) * 100}`}>
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d4af37] hover:text-[#1e3a5f] transition-all duration-300">
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ORACLE Values - Modern */}
      <section className="py-24 bg-[#1e3a5f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="inline-block text-[#d4af37] animate-char-rotate">O</span>
              <span className="inline-block animate-char-rotate animate-delay-100">R</span>
              <span className="inline-block animate-char-rotate animate-delay-200">A</span>
              <span className="inline-block animate-char-rotate animate-delay-300">C</span>
              <span className="inline-block animate-char-rotate animate-delay-400">L</span>
              <span className="inline-block animate-char-rotate animate-delay-500">E</span>
            </h2>
            <p className="text-white/70 text-lg">Our Core Values Define Who We Are</p>
          </div>
          <div className="scroll-animate grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { letter: "O", word: "Outstanding" },
              { letter: "R", word: "Reliable" },
              { letter: "A", word: "Astounding" },
              { letter: "C", word: "Committed" },
              { letter: "L", word: "Loyal" },
              { letter: "E", word: "Experienced" },
            ].map((item, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300 hover-lift animate-slide-in-up animate-delay-${(index + 1) * 100}`}>
                <span className="text-5xl md:text-6xl font-bold text-[#d4af37]">{item.letter}</span>
                <p className="mt-3 text-white font-medium">{item.word}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#d4af37] to-[#c9a227]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountUpStats stats={[
            { num: "1000+", label: "Security Personnel" },
            { num: "12+", label: "Years Min. Experience" },
            { num: "90%", label: "Combat Veterans" },
            { num: "50M", label: "LKR Insurance Cover" },
          ]} />
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider animate-fade-in">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3">
              <span className="inline-block animate-word-slide">Meet</span>{" "}
              <span className="inline-block animate-word-slide animate-delay-100">Our</span>{" "}
              <span className="inline-block animate-bounce-in animate-delay-200">Leader</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="scroll-animate bg-gradient-to-br from-[#f8fafc] to-white border border-gray-100 p-10 rounded-3xl shadow-xl animate-slide-in-up">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg animate-border-glow">
                    <Image
                      src="/gamini.jpeg"
                      alt="Lt Colonel (Rtd) Gamini Gangabadaarachchi"
                      width={160}
                      height={160}
                      className="w-full h-full object-fill"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <span className="inline-block bg-[#d4af37] text-[#1e3a5f] px-4 py-1 rounded-full text-sm font-semibold mb-4">Managing Director</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">Lt Colonel (Rtd) Gamini Gangabadaarachchi</h3>
                  <p className="text-[#d4af37] font-medium mb-4">RSP, LLB (Hons), MBA (HR), ISF, FISF</p>
                  <p className="text-gray-600 leading-relaxed">
                    Over 25 years of experience in the armed forces as an infantry officer and in military intelligence. Highly experienced in active combat duties both locally and overseas, with expertise in special security operations from courses in Europe and Asia. Former secretary of the Sri Lanka Security Services Providers Association (SLSSPA) and fellow member of Industrial Security Foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Liability - Modern */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate bg-gradient-to-br from-[#1e3a5f] to-[#0f2440] p-12 md:p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#d4af37] text-[#1e3a5f] px-6 py-2 rounded-full text-sm font-bold mb-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Zero Liability Policy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="inline-block animate-split-text">Complete</span>{" "}
                <span className="inline-block animate-split-text animate-delay-100">Peace</span>{" "}
                <span className="inline-block animate-bounce-in animate-delay-200">of</span>{" "}
                <span className="inline-block animate-bounce-in animate-delay-300">Mind</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Oracle Security absorbs liability for actions not authorized by the client. Coupled with our comprehensive insurance policy, this eliminates any liability to our clients that may arise from the actions of our personnel.
              </p>
              <div className="inline-block bg-white/10 backdrop-blur px-10 py-6 rounded-2xl border border-white/20">
                <p className="text-[#d4af37] text-sm font-semibold mb-2">Insurance Coverage</p>
                <p className="text-4xl md:text-5xl font-bold text-white">LKR 50 Million</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/5 to-[#d4af37]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-animate text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
              <span className="inline-block animate-word-slide">Ready</span>{" "}
              <span className="inline-block animate-word-slide animate-delay-100">to</span>{" "}
              <span className="inline-block animate-letter-spacing animate-delay-200">Secure</span>{" "}
              <span className="inline-block animate-bounce-in animate-delay-400">Your</span>{" "}
              <span className="inline-block animate-bounce-in animate-delay-500">Future?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Oracle Services delivers comprehensive solutions across Security, Care, and Logistics. Your success is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#d4af37] hover:text-[#1e3a5f] transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#1e3a5f] hover:text-white transition-all duration-300">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
