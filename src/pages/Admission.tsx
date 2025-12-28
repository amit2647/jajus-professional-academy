import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

    const courses = [
        {
            name: "XI & XII Commerce",
            duration: "1-2 years",
            batchSize: "30-35 students",
            fee: "₹20,000",
            features: ["Offline & Online", "Regular Assessments", "Career Guidance"],
            nextBatch: "June 1, 2025"
        },
        {
            name: "XI & XII Foundation",
            duration: "1-2 years",
            batchSize: "30-35 students",
            fee: "₹20,000",
            features: ["Offline", "Regular Assessments", "Career Guidance"],
            nextBatch: "June 1, 2025"
        },
        {
            name: "CA Foundation",
            duration: "4-6 months",
            batchSize: "25-30 students",
            fee: "₹25,000",
            features: ["Offline", "Mock Tests", "Progress Tracking"],
            nextBatch: "March 15, 2025"
        },
        {
            name: "CA Inter",
            duration: "8-12 months",
            batchSize: "20-25 students",
            fee: "₹45,000",
            features: ["Offline", "Practical Training", "Exam Strategies"],
            nextBatch: "April 1, 2025"
        },
        {
            name: "CA Final",
            duration: "8-12 months",
            batchSize: "20-25 students",
            fee: "₹45,000",
            features: ["Offline", "Practical Training", "Exam Strategies"],
            nextBatch: "April 1, 2025"
        },
        {
            name: "CS-EET",
            duration: "8-12 months",
            batchSize: "20-25 students",
            fee: "₹45,000",
            features: ["Offline", "Practical Training", "Exam Strategies"],
            nextBatch: "April 1, 2025"
        }
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
            <section className="bg-gradient-to-br from-violet-600 via-violet-700 to-[#4D14C7] text-white py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
                        Courses
                    </h1>

                    <p className="text-sm sm:text-lg lg:text-xl text-violet-100 mb-4 sm:mb-8 max-w-3xl mx-auto">
                        Join thousands of successful CA professionals. Start your journey with India's most trusted CA coaching institute.
                    </p>

                </div>
            </section>


            {/* Course Options */}
            <section id="courses" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Course</h2>
                        <p className="text-xl text-gray-600">Select the program that best fits your career goals</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="
        bg-white 
        border-2 border-gray-200 
        rounded-2xl 
        p-4 sm:p-6 lg:p-8   /* Smaller padding on mobile */
        hover:border-violet-500 
        hover:shadow-xl 
        transition-all duration-300
    "
                            >
                                <div className="text-center mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                                        {course.name}
                                    </h3>
                                </div>

                                <div className="mb-6 sm:mb-8">
                                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-4 text-sm sm:text-base">
                                        Course Features:
                                    </h4>
                                    <ul className="space-y-1 sm:space-y-2">
                                        {course.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center text-gray-600 text-xs sm:text-sm"
                                            >
                                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={`/admission?course=${encodeURIComponent(course.name)}#application-form`}
                                    onClick={() => {
                                        setTimeout(() => {
                                            const el = document.getElementById("application-form");
                                            if (el) el.scrollIntoView({ behavior: "smooth" });
                                        }, 100);
                                    }}
                                    className="
            w-full 
            bg-violet-600 hover:bg-violet-700 
            text-white 
            font-bold 
            py-2 sm:py-3 lg:py-3 
            px-6 
            rounded-lg 
            text-sm sm:text-base 
            transition-colors
        "
                                >
                                    Apply Now
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="application-form" className="py-14 sm:py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                            Enquire About Admission Process
                        </h2>
                        <p className="text-sm sm:text-xl text-gray-600">
                            Submit your details and our team will get back to you
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                                        Course *
                                    </label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                    >
                                        <option value="">Select a course</option>
                                        <option value="XI & XII Commerce">XI & XII Commerce</option>
                                        <option value="XI & XII Foundation">XI & XII Foundation</option>
                                        <option value="CA Foundation">CA Foundation</option>
                                        <option value="CA Intermediate">CA Intermediate</option>
                                        <option value="CA Final">CA Final</option>
                                        <option value="CS-EET">CS-EET</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-6">
                                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                                    Educational Background
                                </label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                >
                                    <option value="">Select your level</option>
                                    <option value="10th Pass">10th Pass</option>
                                    <option value="12th Pass">12th Pass</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="Post Graduate">Post Graduate</option>
                                </select>
                            </div>

                            <div className="mt-4 sm:mt-6">
                                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                    placeholder="Any specific questions or requirements?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-lg transition-colors mt-6 sm:mt-8 flex items-center justify-center"
                            >
                                Submit Application
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                            </button>

                        </form>
                    </div>
                </div>
            </section>


            {/* Contact Information */}
            <section className="py-14 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                            Need Help?
                        </h2>
                        <p className="text-sm sm:text-xl text-gray-600">
                            Contact our admission team for any queries
                        </p>
                    </div>

                    <div
                        className="
        grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-6 sm:gap-8
        place-items-center md:place-items-stretch
    "
                    >


                        {/* Phone */}
                        <div className="text-center p-5 sm:p-8 bg-gray-50 rounded-2xl shadow-sm">
                            <Phone className="w-8 h-8 sm:w-12 sm:h-12 text-violet-600 mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Phone</h3>
                            <p className="text-sm sm:text-base text-gray-600">+91 9028272762</p>
                            <p className="text-sm sm:text-base text-gray-600">+91 9359794886</p>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">Mon-Sat: 9 AM - 6 PM</p>
                        </div>

                        {/* Email */}
                        <div className="text-center p-5 sm:p-8 bg-gray-50 rounded-2xl shadow-sm">
                            <Mail className="w-8 h-8 sm:w-12 sm:h-12 text-violet-600 mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Email</h3>
                            <p className="text-sm sm:text-base text-gray-600">admissions@jajuacademy.com</p>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                        </div>

                        {/* Visit */}
                        <div className="text-center p-5 sm:p-8 bg-gray-50 rounded-2xl shadow-sm">
                            <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-violet-600 mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Visit Us</h3>
                            <p className="text-sm sm:text-base text-gray-600">Jaju's Professional Academy</p>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">Schedule a campus visit</p>
                        </div>

                    </div>
                </div>
            </section>


            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AdmissionPage;