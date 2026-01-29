import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#152a45] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-6">
                            <Image
                                src="/oracle.png"
                                alt="Oracle Services"
                                width={50}
                                height={50}
                                className=""
                            />
                            <div className="ml-3">
                                <div className="font-bold text-lg">Oracle Services</div>
                                <div className="text-[#d4af37] text-xs">Security • Care • Logistics</div>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-2">
                            Oracle Services (Pvt) Ltd
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                            No: 562/3A, Welikadawatta Terrace,<br />
                            Nawala Road, Rajagiriya
                        </p>
                        <a href="mailto:info@oraclesecurity.lk" className="text-gray-400 hover:text-[#d4af37] text-sm transition-colors">
                            info@oraclesecurity.lk
                        </a>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Our Divisions</h4>
                        <ul className="space-y-2">
                            <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Oracle Security</Link></li>
                            <li><Link href="/care" className="text-gray-400 hover:text-white transition-colors">Oracle Care</Link></li>
                            <li><Link href="/logistics" className="text-gray-400 hover:text-white transition-colors">Oracle Logistics</Link></li>
                        </ul>
                        <h4 className="font-bold text-lg mb-4 mt-6 text-[#d4af37]">Security Division</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Security Services</Link></li>
                            <li><Link href="/training" className="text-gray-400 hover:text-white transition-colors">Training</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Contact Us</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="tel:+94765344213" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    076 534 4213
                                </a>
                            </li>
                            <li>
                                <a href="tel:+94760044148" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    076 004 4148
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/94765344213" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Form</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-[#d4af37]">ORACLE</h4>
                        <p className="text-gray-400 mb-2"><span className="text-[#d4af37]">O</span>utstanding</p>
                        <p className="text-gray-400 mb-2"><span className="text-[#d4af37]">R</span>eliable</p>
                        <p className="text-gray-400 mb-2"><span className="text-[#d4af37]">A</span>stounding</p>
                        <p className="text-gray-400 mb-2"><span className="text-[#d4af37]">C</span>ommitted</p>
                        <p className="text-gray-400 mb-2"><span className="text-[#d4af37]">L</span>oyal</p>
                        <p className="text-gray-400"><span className="text-[#d4af37]">E</span>xperienced</p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2026 Oracle Services (Pvt) Ltd. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Providing Excellence in Security, Care & Logistics
                    </p>
                </div>
            </div>
        </footer>
    );
}
