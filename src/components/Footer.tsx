import { Mail, Phone } from "lucide-react";

function Footer() {
    return (
        < footer id="contact" className="bg-gradient-to-r from-[#5917E8] to-[#4D14C7] text-white py-16" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Jaju Professional Academy</h3>
                        <p className="text-violet-200 leading-relaxed">
                            Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams.
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
                            <li>Ca Foundation</li>
                            <li>Ca Intermediate</li>
                            <li>XI & XII Commerce</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">CONTACT</h4>
                        <div className="text-violet-200 text-sm space-y-3">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>
                                    +91 9028272762
                                    <br />
                                    +91 9359794886
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>Jajusprofessionalacademy@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-violet-700 mt-12 pt-8 text-center">
                    <p className="text-violet-200">&copy; 2025 Jaju's Professional Academy. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;