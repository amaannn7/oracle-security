import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <span className="inline-block animate-word-slide">Our</span>{" "}
                        <span className="inline-block animate-bounce-in animate-delay-200">Clients</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto animate-reveal-mask animate-delay-300"></div>
                </div>
            </section>

            {/* Client Logos Marquee */}
            <section className="py-16 bg-white relative overflow-hidden border-y-2 border-gray-100">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-2">
                        Trusted by Leading Brands
                    </h2>
                    <p className="text-center text-gray-600">Our prestigious client portfolio</p>
                </div>

                <div className="relative pointer-events-none">
                    <div className="marquee">
                        <div className="marquee-content pointer-events-none">
                            {/* First set of logos */}
                            <div className="inline-flex items-center gap-16 px-8">
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/fab.logo.jpg" alt="FAB" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/fashion-bug.logo.png" alt="Fashion Bug" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/hameedia.logo.png" alt="Hameedia" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/hayleys.logo.png" alt="Hayleys" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/Heritance_Kandalama_logo.png" alt="Heritance" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/Port-City-BPO-logo.webp" alt="Port City" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/aitken.logo.jpg" alt="Aitken Spence" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/amethyst.logo.jpg" alt="Amethyst" className="max-w-full max-h-full object-contain" />
                                </div>
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="inline-flex items-center gap-16 px-8">
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/fab.logo.jpg" alt="FAB" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/fashion-bug.logo.png" alt="Fashion Bug" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/hameedia.logo.png" alt="Hameedia" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/hayleys.logo.png" alt="Hayleys" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/Heritance_Kandalama_logo.png" alt="Heritance" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/Port-City-BPO-logo.webp" alt="Port City" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/aitken.logo.jpg" alt="Aitken Spence" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl p-6 border-2 border-[#1e3a5f]/10 hover:border-[#d4af37] transition-all duration-300 w-48 h-32">
                                    <img src="/amethyst.logo.jpg" alt="Amethyst" className="max-w-full max-h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients List */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
                            <thead className="bg-[#1e3a5f] text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left">Client Name</th>
                                    <th className="px-6 py-4 text-left">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((client, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                        <td className="px-6 py-4 font-semibold text-[#1e3a5f]">{client.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{client.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
