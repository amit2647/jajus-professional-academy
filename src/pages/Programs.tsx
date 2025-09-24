import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path based on your file structure

const ProgramPage = () => {
    const courses = [
        {
            name: "CA Foundation",
            duration: "4-6 months",
            batchSize: "25-30 students",
            fee: "₹25,000",
            features: ["Comprehensive Study Material", "Mock Tests", "Doubt Clearing Sessions", "Progress Tracking"],
            nextBatch: "March 15, 2025",
            description: "The CA Foundation course is designed for students starting their journey to become Chartered Accountants. It covers fundamental concepts in accounting, law, economics, and mathematics, providing a strong base for further CA levels."
        },
        {
            name: "CA Intermediate",
            duration: "8-12 months",
            batchSize: "20-25 students",
            fee: "₹45,000",
            features: ["Advanced Study Material", "Practical Training", "One-on-One Mentoring", "Exam Strategies"],
            nextBatch: "April 1, 2025",
            description: "The CA Intermediate course builds on foundational knowledge, diving deeper into advanced accounting, taxation, auditing, and financial management. Ideal for students aiming to excel in professional CA exams."
        },
        {
            name: "XI & XII Commerce",
            duration: "1-2 years",
            batchSize: "30-35 students",
            fee: "₹20,000",
            features: ["Board Exam Preparation", "Regular Assessments", "Career Guidance", "Foundation Building"],
            nextBatch: "June 1, 2025",
            description: "Our XI & XII Commerce program prepares students for board exams while laying a strong foundation for future careers in commerce, accounting, and finance. Includes personalized guidance and regular assessments."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#4D14C7] via-violet-700 to-[#4D14C7] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
                    <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
                        Explore our comprehensive courses designed to help you succeed in your CA journey and commerce education.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="/admission?#application-form"
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
                        <p className="text-xl text-gray-600">Select from our expertly crafted programs to achieve your career goals</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-violet-500 hover:shadow-xl transition-all duration-300">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                                    <div className="text-3xl font-bold text-[#4D14C7] mb-4">{course.fee}</div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <Clock className="w-4 h-4 inline mr-1" />
                                        Duration: {course.duration}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        <Users className="w-4 h-4 inline mr-1" />
                                        Batch Size: {course.batchSize}
                                    </div>
                                    <div className="text-sm text-green-600 font-semibold">
                                        <Calendar className="w-4 h-4 inline mr-1" />
                                        Next Batch: {course.nextBatch}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <p className="text-gray-600 mb-4">{course.description}</p>
                                    <h4 className="font-semibold text-gray-900 mb-4">Course Features:</h4>
                                    <ul className="space-y-2">
                                        {course.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={`/admission?course=${encodeURIComponent(course.name)}#application-form`}
                                    className="w-full bg-[#4D14C7] hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Apply Now
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Programs?</h2>
                        <p className="text-xl text-gray-600">Discover the advantages of studying with Jaju's Professional Academy</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <CheckCircle className="w-12 h-12 text-[#4D14C7] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
                            <p className="text-gray-600">Learn from experienced CA professionals with proven track records.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <CheckCircle className="w-12 h-12 text-[#4D14C7] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Resources</h3>
                            <p className="text-gray-600">Access study materials, mock tests, and personalized mentoring.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <CheckCircle className="w-12 h-12 text-[#4D14C7] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Success</h3>
                            <p className="text-gray-600">Join thousands of students who have cleared their exams with us.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#5917E8] to-[#4D14C7] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Jaju Professional Academy</h3>
                            <p className="text-violet-200 leading-relaxed">
                                Your trusted partner in CA education and professional development.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="text-violet-200 space-y-2">
                                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
                                <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Programs</h4>
                            <ul className="text-violet-200 space-y-2">
                                <li>CA Foundation</li>
                                <li>CA Intermediate</li>
                                <li>XI & XII Commerce</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <div className="text-violet-200 space-y-2">
                                <p>+91 999 332 999</p>
                                <p>admissions@jajuacademy.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-violet-700 mt-12 pt-8 text-center">
                        <p className="text-violet-200">&copy; 2025 Jaju's Professional Academy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProgramPage;