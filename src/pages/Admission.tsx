import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, FileText, CreditCard, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const AdmissionPage = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        experience: '',
        message: ''
    });

    // Pre-fill course from query parameter
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const course = params.get('course');
        if (course) {
            setFormData((prev) => ({ ...prev, course }));
        }
    }, [location.search]);

    // Scroll to application form section if #application-form is in the URL
    useEffect(() => {
        if (location.hash === '#application-form') {
            const scrollToForm = () => {
                const element = document.getElementById('application-form');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            };

            // Attempt to scroll immediately
            scrollToForm();

            // Retry after a short delay to account for rendering
            const timer = setTimeout(scrollToForm, 100);

            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    const admissionProcess = [
        {
            step: "1",
            title: "Application Form",
            description: "Fill out the online application form with your personal and academic details",
            icon: <FileText className="w-8 h-8" />
        },
        {
            step: "2",
            title: "Document Verification",
            description: "Submit required documents for verification and eligibility check",
            icon: <CheckCircle className="w-8 h-8" />
        },
        {
            step: "3",
            title: "Fee Payment",
            description: "Complete the fee payment through our secure payment gateway",
            icon: <CreditCard className="w-8 h-8" />
        },
        {
            step: "4",
            title: "Confirmation",
            description: "Receive confirmation and access to classes and study materials",
            icon: <Users className="w-8 h-8" />
        }
    ];

    const courses = [
        {
            name: "CA Foundation",
            duration: "4-6 months",
            batchSize: "25-30 students",
            fee: "₹25,000",
            features: ["Comprehensive Study Material", "Mock Tests", "Doubt Clearing Sessions", "Progress Tracking"],
            nextBatch: "March 15, 2025"
        },
        {
            name: "CA Intermediate",
            duration: "8-12 months",
            batchSize: "20-25 students",
            fee: "₹45,000",
            features: ["Advanced Study Material", "Practical Training", "One-on-One Mentoring", "Exam Strategies"],
            nextBatch: "April 1, 2025"
        },
        {
            name: "XI & XII Commerce",
            duration: "1-2 years",
            batchSize: "30-35 students",
            fee: "₹20,000",
            features: ["Board Exam Preparation", "Regular Assessments", "Career Guidance", "Foundation Building"],
            nextBatch: "June 1, 2025"
        }
    ];

    const documents = [
        "10th Mark Sheet",
        "12th Mark Sheet (if applicable)",
        "Graduation Certificate (for CA Intermediate)",
        "Aadhar Card",
        "Passport Size Photographs (4)",
        "Transfer Certificate (if applicable)"
    ];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyDJfzyBigQPDD4UivWn1itEG2yrnPIJ0Nw3x0hKCuJHWRD0-WqBb-eri3wgGdVPRuDqw/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify(formData),
                    redirect: "follow"
                }
            );

            const result = await response.json();
            console.log("Response:", result);

            if (result.status === "success") {
                alert("Form submitted successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    course: "",
                    experience: "",
                    message: ""
                });
            } else {
                alert(`Submission failed: ${result.message || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold mb-6">Admission Open</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Join thousands of successful CA professionals. Start your journey with India's most trusted CA coaching institute.
                    </p>
                    <div className="flex justify-center space-x-8 text-sm">
                        <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>Admissions Open Till: March 31, 2025</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            <span>Limited Seats Available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Options */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Course</h2>
                        <p className="text-xl text-gray-600">Select the program that best fits your career goals</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                                    <div className="text-3xl font-bold text-blue-600 mb-4">{course.fee}</div>
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
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Apply Now
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
                        <p className="text-xl text-gray-600">Simple and straightforward admission process</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {admissionProcess.map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    {process.step}
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                                    <div className="flex justify-center mb-4 text-blue-600">
                                        {process.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                                    <p className="text-gray-600 text-sm">{process.description}</p>
                                </div>
                                {index < admissionProcess.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-blue-300 transform translate-x-4"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Required Documents</h2>
                        <p className="text-xl text-gray-600">Please ensure you have these documents ready for admission</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {documents.map((doc, index) => (
                                <div
                                    key={index}
                                    className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                                >
                                    <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700 break-words flex-1">{doc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-yellow-800 text-sm">
                                <strong>Note:</strong> All documents should be original with photocopies.
                                Documents in languages other than English/Hindi should be translated and notarized.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="application-form" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Enquire About Admission Process</h2>
                        <p className="text-xl text-gray-600">Submit your details and our team will get back to you</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Course *
                                    </label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select a course</option>
                                        <option value="CA Foundation">CA Foundation</option>
                                        <option value="CA Intermediate">CA Intermediate</option>
                                        <option value="XI & XII Commerce">XI & XII Commerce</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Educational Background
                                </label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select your level</option>
                                    <option value="10th Pass">10th Pass</option>
                                    <option value="12th Pass">12th Pass</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="Post Graduate">Post Graduate</option>
                                </select>
                            </div>

                            <div className="mt-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Any specific questions or requirements?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors mt-8 flex items-center justify-center"
                            >
                                Submit Application
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Help?</h2>
                        <p className="text-xl text-gray-600">Contact our admission team for any queries</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gray-50 rounded-2xl">
                            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">+91 999 332 999</p>
                            <p className="text-gray-600">Mon-Sat: 9 AM - 6 PM</p>
                        </div>

                        <div className="text-center p-8 bg-gray-50 rounded-2xl">
                            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">admissions@jajuacademy.com</p>
                            <p className="text-gray-600">We'll respond within 24 hours</p>
                        </div>

                        <div className="text-center p-8 bg-gray-50 rounded-2xl">
                            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">Jaju's Professional Academy</p>
                            <p className="text-gray-600">Schedule a campus visit</p>
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
                                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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

export default AdmissionPage;