import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Our Clients - Trusted by Leading Companies in Sri Lanka",
    description: "Oracle Services is trusted by top Sri Lankan corporations including Hayleys PLC, Aitken Spence, Heritance Hotels, and more. View our prestigious client portfolio across security, care, and logistics sectors.",
    keywords: ["Oracle Services clients", "security clients Sri Lanka", "corporate clients", "Hayleys", "Aitken Spence", "Heritance Hotels", "trusted security company"],
    openGraph: {
        title: "Our Clients - Oracle Services (Pvt) Ltd",
        description: "Trusted by leading Sri Lankan corporations including Hayleys, Aitken Spence, Heritance Hotels, and more.",
        url: "https://oracleservices.lk/clients",
        images: [{ url: "/oracle.png", width: 1200, height: 630, alt: "Oracle Services Clients" }],
    },
    alternates: {
        canonical: "https://oracleservices.lk/clients",
    },
};

export default function ClientsPage() {
    const clients = [
        { name: "ACE Powerplant Embilipitiya", address: "Aitken Spence PLC ACE Power Embilipitiya" },
        { name: "Heritance Hotel Ahungalla", address: "Heritance Hotel Ahungalla, Galle Road, Ahungalla" },
        { name: "Dolphin Club Hotel", address: "Kammala South, Waikkal, Negombo" },
        { name: "Palwehara Farm", address: "ACE Palwehara Farm Palwehara, Dambulla" },
        { name: "Hayleys Head Office", address: "Hayleys Head Office Hayleys PLC, 400, Deans Road, Colombo 10" },
        { name: "Jinasena Group of Companies Directors", address: "12/7, Kirimandala Mawatha, Nawala" },
        { name: "Hs Marketing Hameedia", address: "Katubedda" },
        { name: "Ace Distriparks (Pvt) Limited", address: "Mihinthale" },
        { name: "Scavenger Cleaning Services", address: "562/3A, Welikadawatta Terrace, Nawala Road, Rajagiriya" },
        { name: "Hayleys Industrial Solutions (Pvt) Ltd", address: "Ven Baddegama Wimalawansa Mawatha, Colombo" },
        { name: "MA Lanka (Pvt) Ltd Head Office", address: "7, Galle Road, Colombo 03" },
        { name: "MA Lanka (Pvt) Ltd Armed Security Guards", address: "7, Galle Road, Colombo 03" },
        { name: "Jayawardana and Sons Armed Security Guards", address: "179/k, Ragama Road, Kadawatha" },
        { name: "Jayawardana and Sons Nittambuwa", address: "No 16, Kandy Road, Nittambuwa" },
        { name: "Jayawardana and Sons Nittambuwa Armed Security Guards", address: "No 564/1/41, Mipitiya, Kandy Road, Kegalle" },
        { name: "Clan house", address: "Main Street, Galle" },
        { name: "Raj Diamonds (Pvt) Ltd Diamonds Cutting Factory", address: "No 291/01, Kandy Road, Kiribathgoda" },
        { name: "Fashion Bug Showroom", address: "Maharagama" },
        { name: "Fashion Bug Showroom", address: "Kotahena" },
        { name: "Fashion Bug Showroom", address: "Wattala / Kollupitiya" },
        { name: "Hameedia Showroom", address: "No.34, Galle Rd, Colombo 06" },
        { name: "Green Mart", address: "No.271A2, Dehiwala-Mount Lavinia" },
        { name: "Hameedia Showroom", address: "No: 578 Kotte Rd, 10107" },
        { name: "Hameedia Showroom", address: "No :162/C, Kadawatha Rd, Dehiwala" },
        { name: "Hameedia Showroom", address: "No: 337/1 Negombo Rd, Wattala" },
        { name: "Posom Ceramics (Pvt) Ltd", address: "Wattala" },
        { name: "Bellevue Beach Resort", address: "Nilaveli" },
        { name: "Amethyst Resort", address: "Amethyst Resort, Kalkudah" },
        { name: "Of Estonia", address: "No 100, Lake Drive, Colombo 08, Sri Lanka" },
        { name: "Port City BPO (Private) Limited", address: "17th & 18th Floor, Cinnamon Life Office Tower, Colombo 02" },
        { name: "Rossli Holding (Pvt) Ltd", address: "Laxapana Rd, Morahenegama, Hatton" },
        { name: "Rossli Holding (Pvt) Ltd", address: "Avissawella Rd, Thaligama, Kithulgala" },
        { name: "National Holiday Resort Passikkudha", address: "Lakdiyatha (Pvt) Ltd, No 400, Deans Rd, Colombo 10" },
        { name: "Harbour View Piers (Pvt) Ltd - Trincomalee", address: "Business Process Management (Pvt) Ltd, No 3D 1/1, Suranimala Place, Kirulapana" },
        { name: "Taprobana Resort", address: "Asia Capital PLC, No 46/46 Level 06, Green Lanka Towers, Nawam Mawatha, Colombo 02" },
        { name: "Feroze Plaza", address: "No:19/1A–2/1, Chandralekha Mawatha, Colombo 08" },
        { name: "Bungalow", address: "Dehiwala" },
        { name: "Hameedia Land", address: "Wadduwa" },
        { name: "Aitken Spence Printing & Packaging (Pvt) Ltd", address: "No 90 St.Rita's Estate, Mawaramandiya, Siyambalape" },
        { name: "Nilaveli Land", address: "Aitken Spence PLC, Irakkandy, Nilaveli, Trincomalee" },
        { name: "Saga Solar Power", address: "Aitken Spence (Pvt) Ltd, Saga Solar Power, Buruthan Kanda, Hambantota" },
        { name: "FAB", address: "Malabe" },
        { name: "Sunrise Pasikuda (Fortune Premier (PVT) LTD", address: "No 15-5B, Crescat Residencies 75, Galle Road, Colombo 03" },
        { name: "Finto Enterprises (Pvt) Ltd", address: "Elakanda" },
        { name: "Finto Enterprises (Pvt) Ltd", address: "Wattala" },
        { name: "MELWA Hotels & Resorts - Passikudah", address: "No 36, Level 01, Melwa Office Complex II, Abdul Jabbar Mawatha, Colombo 12" },
        { name: "Wickramaratne Distributors (Pvt.) Ltd", address: "Batugedara, Rahnapura" },
        { name: "T.Parameshwaram & Company", address: "3A, 6th Lane, Colombo 03" },
        { name: "Boralugoda Graphite (Pvt) Ltd", address: "Neluwa, Kegalle" },
        { name: "Ceylon Royal Tea (Pvt) Ltd", address: "Kleiderfort (Pvt) Ltd, 1287, Biyagama Road, Kelaniya" },
    ];

    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1e3a5f] via-[#3d5a80] to-[#5b7c99]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Clients</h1>
                    <div className="w-20 sm:w-24 h-1 bg-[#d4af37] mx-auto"></div>
                </div>
            </section>

            {/* Client Logos Marquee */}
            <section className="py-10 sm:py-16 bg-white relative overflow-hidden border-y-2 border-gray-100">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1e3a5f] mb-2">
                        Trusted by Leading Brands
                    </h2>
                    <p className="text-center text-sm sm:text-base text-gray-600">Our prestigious client portfolio</p>
                </div>

                <div className="relative pointer-events-none">
                    <div className="marquee">
                        <div className="marquee-content pointer-events-none">
                            {/* First set of logos */}
                            <div className="inline-flex items-center gap-8 sm:gap-16 px-4 sm:px-8">
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/fab.logo.jpg" alt="FAB" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/fashion-bug.logo.png" alt="Fashion Bug" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/hameedia.logo.png" alt="Hameedia" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/hayleys.logo.png" alt="Hayleys" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/Heritance_Kandalama_logo.png" alt="Heritance" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/Port-City-BPO-logo.webp" alt="Port City" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/aitken.logo.jpg" alt="Aitken Spence" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/amethyst.logo.jpg" alt="Amethyst" className="max-w-full max-h-full object-contain" />
                                </div>
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="inline-flex items-center gap-8 sm:gap-16 px-4 sm:px-8">
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/fab.logo.jpg" alt="FAB" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/fashion-bug.logo.png" alt="Fashion Bug" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/hameedia.logo.png" alt="Hameedia" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/hayleys.logo.png" alt="Hayleys" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/Heritance_Kandalama_logo.png" alt="Heritance" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/Port-City-BPO-logo.webp" alt="Port City" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/aitken.logo.jpg" alt="Aitken Spence" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-3 sm:p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-32 h-20 sm:w-48 sm:h-32">
                                    <img src="/amethyst.logo.jpg" alt="Amethyst" className="max-w-full max-h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients List */}
            <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#e8eef4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2 sm:mb-3">Complete Client Directory</h2>
                        <p className="text-sm sm:text-base text-gray-600">Organizations we proudly serve across Sri Lanka</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {clients.map((client, index) => (
                            <div key={index} className="group bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#d4af37]/30 hover:-translate-y-1">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1e3a5f] to-[#3d5a80] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-[#1e3a5f] text-sm sm:text-base mb-1 line-clamp-2 group-hover:text-[#d4af37] transition-colors">{client.name}</h3>
                                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                                            <svg className="w-3 h-3 inline mr-1 flex-shrink-0 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {client.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
