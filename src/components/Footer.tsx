import { Mail, Phone, Instagram, Facebook } from "lucide-react";

function Footer() {
    return (
        < footer id="contact" className="bg-gradient-to-r from-[#5917E8] to-[#4D14C7] text-white py-16" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Jaju Professional Academy</h3>
                        <p className="text-violet-200 leading-relaxed">
                            Join Jaju's Professional Academy and start preparing for your CA Journey.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">ABOUT US</h4>
                        <p className="text-violet-200 text-sm leading-relaxed">
                            Enroll for the latest batches and get quality classes from the top CA Educators.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">PROGRAMS</h4>
                        <ul className="text-violet-200 text-sm space-y-2">
                            <li>XI & XII Commerce</li>
                            <li>XI & XII + CA Foundation</li>
                            <li>CA Foundation</li>
                            <li>CA Intermediate</li>
                            <li>CA Final</li>
                            <li>CS-Foundation</li>
                            <li>Test Series</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-center sm:text-left">
                            CONTACT
                        </h4>

                        <div className="text-violet-200 text-sm space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">

                            {/* Phone Numbers */}
                            <div className="flex flex-col gap-2 items-center sm:items-start">

                                <div className="flex items-center justify-center sm:justify-start">
                                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                                    <a href="tel:+919028272762" className="hover:underline">
                                        +91 9028272762
                                    </a>
                                </div>

                                <div className="flex items-center justify-center sm:justify-start">
                                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                                    <a href="tel:+919359794886" className="hover:underline">
                                        +91 9359794886
                                    </a>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="flex items-center justify-center sm:justify-start">
                                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                                <a
                                    href="mailto:Jajusprofessionalacademy@gmail.com"
                                    className="hover:underline break-all"
                                >
                                    Jajusprofessionalacademy@gmail.com
                                </a>
                            </div>

                            {/* Social Media */}
                            <div className="flex flex-col space-y-2 items-center sm:items-start pt-2">

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/jajus_professional_academy/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    <div className="flex items-center justify-center sm:justify-start">
                                        <Instagram className="w-5 h-5 mr-2" />
                                        <span>Jajus Professional Academy</span>
                                    </div>
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/profile.php?id=100057527465942"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    <div className="flex items-center justify-center sm:justify-start">
                                        <Facebook className="w-5 h-5 mr-2" />
                                        <span>Jajus Professional Academy</span>
                                    </div>
                                </a>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="border-t border-violet-700 mt-12 pt-8 text-center space-y-2">

                    {/* Copyright */}
                    <p className="text-violet-200">
                        &copy; 2026 Jaju's Professional Academy. All rights reserved.
                    </p>

                    {/* Developer Credit */}
                    <p className="text-violet-300 text-sm">
                        Website developed by{" "}
                        <a
                            href="https://www.amitmahorkar.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white hover:underline hover:text-violet-100 transition-colors"
                        >
                            Amit Mahorkar
                        </a>
                    </p>

                </div>

            </div>
        </footer >
    );
}

export default Footer;