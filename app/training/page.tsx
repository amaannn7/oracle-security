import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

export default function TrainingPage() {
    return (
        <main>
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1e3a5f] via-[#3d5a80] to-[#5b7c99]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <span className="inline-block animate-letter-spacing">Training</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto animate-reveal-mask animate-delay-300"></div>
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
                        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                            <span className="inline-block animate-split-text">Training</span>{" "}
                            <span className="inline-block animate-bounce-in animate-delay-200">Programs</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto animate-reveal-mask animate-delay-300"></div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
                            <thead className="bg-[#1e3a5f] text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left">Training Programs</th>
                                    <th className="px-6 py-4 text-left">Instructors/Trainers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-semibold text-[#1e3a5f]">Firefighting</td>
                                    <td className="px-6 py-4 text-gray-600">Air Force and Fire Brigade of Sri Lanka</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-semibold text-[#1e3a5f]">Civil Law</td>
                                    <td className="px-6 py-4 text-gray-600">Lectures from the Faculty of Law, Colombo</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-semibold text-[#1e3a5f]">Bomb Disposal</td>
                                    <td className="px-6 py-4 text-gray-600">Home Guard Training Institute, Kalpitya</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-semibold text-[#1e3a5f]">Identification of Explosives</td>
                                    <td className="px-6 py-4 text-gray-600">Ministry of Defense</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-semibold text-[#1e3a5f]">Weapons handling and training</td>
                                    <td className="px-6 py-4 text-gray-600">In-house training</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-semibold text-[#1e3a5f]">First Aid</td>
                                    <td className="px-6 py-4 text-gray-600">St. Johns Ambulance Service</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-semibold text-[#1e3a5f]">Customer Service</td>
                                    <td className="px-6 py-4 text-gray-600">Excellence and Kent Academy of Career Training and Value</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-semibold text-[#1e3a5f]">Regular Refresher Courses</td>
                                    <td className="px-6 py-4 text-gray-600">Addition Training In-house training (Development Manager)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 bg-[#1e3a5f] p-6 rounded-2xl text-center">
                        <p className="text-white">
                            Recently conducted refresher and firefighting and safety Training at Navesta Pharmaceuticals (Pvt) Ltd.
                        </p>
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

                        <div className="bg-[#e8eef4] p-8 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Our security staff is categorized accordingly:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-700">
                                    <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-3"></div>
                                    Chief Security Officer
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-3"></div>
                                    Officer in Charge
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-3"></div>
                                    Senior Security Officer
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-3"></div>
                                    Junior Security Officer
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-3"></div>
                                    Lady Security Officer
                                </li>
                            </ul>
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
