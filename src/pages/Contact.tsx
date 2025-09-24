import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path based on your file structure

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
                "https://script.google.com/macros/s/AKfycbziyWu0qhhCgEfc3WhRgXXtk34ck4pr72yCRQkU-9a5tQILVHHzdk4ZIHlz6oAeu5TY0A/exec",
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
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
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
            <section className="bg-gradient-to-br from-[#4D14C7] via-violet-700 to-[#4D14C7] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
                        Have questions? Reach out to our team for assistance with admissions, courses, or anything else.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-xl text-gray-600">We're here to help you every step of the way</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg">
                            <Phone className="w-12 h-12 text-[#4D14C7] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">+91 999 332 999</p>
                            <p className="text-gray-600">Mon-Sat: 9 AM - 6 PM</p>
                        </div>
                        <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg">
                            <Mail className="w-12 h-12 text-[#4D14C7] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">admissions@jajuacademy.com</p>
                            <p className="text-gray-600">We'll respond within 24 hours</p>
                        </div>
                        <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg">
                            <MapPin className="w-12 h-12 text-[#4D14C7] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">Jaju's Professional Academy</p>
                            <p className="text-gray-600">Schedule a campus visit</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                        <p className="text-xl text-gray-600">
                            Fill out the form below, and our team will get back to you
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
                        >
                            {/* Full Name */}
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
                                    className="w-full h-[52px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5917E8] focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
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
                                    className="w-full h-[52px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5917E8] focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Phone */}
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
                                    className="w-full h-[52px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5917E8] focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5917E8] focus:border-transparent resize-none"
                                    placeholder="Your message or query"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-[#5917E8] hover:bg-[#4D14C7] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
                            >
                                Send Message
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </form>
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
                                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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

export default Contact;