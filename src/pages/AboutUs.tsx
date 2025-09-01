import { Link } from 'react-router-dom';
import { Users, Award, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path based on your file structure

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold mb-6">About Jaju's Professional Academy</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Your trusted partner in shaping successful careers in Chartered Accountancy and commerce education.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="/admission?#application-form"
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Join Us Today
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-xl text-gray-600">Empowering students to achieve excellence in CA and commerce education</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
                        <p className="text-gray-600 leading-relaxed">
                            At Jaju's Professional Academy, our mission is to provide world-class education and mentorship to aspiring Chartered Accountants and commerce students. We aim to foster a learning environment that combines rigorous academics with practical insights, ensuring our students are well-prepared for their exams and future careers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Faculty Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Faculty</h2>
                        <p className="text-xl text-gray-600">Learn from the best in the industry</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">CA Professionals</h3>
                            <p className="text-gray-600">Our faculty includes practicing CAs with years of industry experience.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Experts</h3>
                            <p className="text-gray-600">Educators with deep knowledge in accounting, taxation, and commerce.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mentors & Guides</h3>
                            <p className="text-gray-600">Personalized mentoring to guide students through their CA journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
                        <p className="text-xl text-gray-600">Celebrating our legacy of success</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+ Students</h3>
                            <p className="text-gray-600">Trained over 10,000 students in CA and commerce programs.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">High Success Rate</h3>
                            <p className="text-gray-600">Consistently high pass rates in CA Foundation and Intermediate exams.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted Since 2000</h3>
                            <p className="text-gray-600">Over two decades of excellence in CA education.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Jaju Professional Academy</h3>
                            <p className="text-blue-200 leading-relaxed">
                                Your trusted partner in CA education and professional development.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="text-blue-200 space-y-2">
                                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
                                <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Programs</h4>
                            <ul className="text-blue-200 space-y-2">
                                <li>CA Foundation</li>
                                <li>CA Intermediate</li>
                                <li>XI & XII Commerce</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <div className="text-blue-200 space-y-2">
                                <p>+91 999 332 999</p>
                                <p>admissions@jajuacademy.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-blue-700 mt-12 pt-8 text-center">
                        <p className="text-blue-200">&copy; 2025 Jaju's Professional Academy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;