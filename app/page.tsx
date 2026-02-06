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

      {/* Ticker Strip */}
      <section className="py-4 bg-[#1e3a5f] overflow-hidden">
        <div className="relative marquee">
          <div className="marquee-content">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-6 px-6">
                {[
                  "Security Division", "Care Division", "Logistics Division",
                  "1000+ Personnel", "90% Combat Veterans", "Zero Liability",
                  "LKR 50M Coverage", "Island-Wide Service", "24/7 Operations"
                ].map((text, i) => (
                  <span key={i} className="flex items-center gap-6">
                    <span className="text-white/90 text-sm font-medium whitespace-nowrap">{text}</span>
                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full flex-shrink-0"></span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section id="divisions" className="py-24 bg-gradient-to-b from-white to-[#e8eef4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
            <Link href="/security" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
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
            <Link href="/care" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
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
                <div className="inline-flex items-center text-[#3d5a80] font-semibold group-hover:gap-3 gap-2 hover:text-[#d4af37] transition-colors">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Oracle Logistics - Coming Soon */}
            <Link href="/logistics" className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
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
                <div className="inline-flex items-center text-[#5b7c99] font-semibold group-hover:gap-3 gap-2 hover:text-[#d4af37] transition-colors">
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
            <div className="animate-slide-in-left">
              <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-6 leading-tight">
                Your Trusted Service Partner
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Choosing the right service provider is one of the most important business decisions you will ever make. Oracle Services (Pvt) Ltd delivers comprehensive solutions through three specialized divisions: Security, Care, and Logistics.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our <span className="font-bold text-[#1e3a5f]">Security Division</span> proudly maintains a force strength exceeding <span className="font-bold text-[#1e3a5f]">1,000 disciplined and specifically trained personnel</span> catering to all aspects of security operations throughout the country.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d4af37] hover:text-[#1e3a5f] transition-all duration-300 shadow-md hover:shadow-lg group">
                Learn More About Us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
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
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3">
              Vision & Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
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
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive security solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Security Officers",
                desc: "Over 1,000 trained & disciplined professionals",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Cash Management",
                desc: "Secure cash transportation & handling",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Event Security",
                desc: "Professional event security management",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                ),
                title: "Escort Services",
                desc: "Armed/unarmed escort for valuables",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "VIP Protection",
                desc: "International standard bodyguard services",
                color: "bg-[#1e3a5f]"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
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
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] px-8 py-4 rounded-full font-semibold hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 group">
              View All Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">
              <span className="text-[#d4af37]">O</span>R<span className="text-[#d4af37]">A</span>CLE
            </h2>
            <p className="text-white/70 text-lg">Our Core Values Define Who We Are</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
      <section className="py-20 bg-gradient-to-r from-[#d4af37] via-[#c9a227] to-[#d4af37] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(30, 58, 95, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(30, 58, 95, 0.3) 0%, transparent 50%)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3">
              Meet Our Leader
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-xl animate-slide-in-up">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative flex-shrink-0">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg ring-4 ring-[#d4af37]/20">
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
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">Dr, Lt Colonel (Rtd) Gamini Gangabadaarachchi</h3>
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
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f2440] p-12 md:p-16 rounded-3xl relative overflow-hidden border-l-4 border-[#d4af37]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#d4af37] text-[#1e3a5f] px-6 py-2 rounded-full text-sm font-bold mb-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Zero Liability Policy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Complete Peace of Mind
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
      <section className="py-24 bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#3d5a80] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-sm font-semibold mb-6 border border-[#d4af37]/30">Get Started Today</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Oracle Services delivers comprehensive solutions across Security, Care, and Logistics. Your success is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#1e3a5f] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
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
