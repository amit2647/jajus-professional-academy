import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path based on your file structure
import Footer from '../components/Footer';

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

                    {/* Contact Info Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Phone */}
                        <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg">
                            <Phone className="w-12 h-12 text-[#4D14C7] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                            <span>
                                +91 9028272762
                                <br />
                                +91 9359794886
                            </span>
                        </div>

                        {/* Email */}
                        <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg">
                            <Mail className="w-12 h-12 text-[#4D14C7] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">Jajusprofessionalacademy@gmail.com</p>
                            <p className="text-gray-600">We'll respond within 24 hours</p>
                        </div>
                    </div>

                    {/* Location Row */}
                    <div className="flex justify-center">
                        <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg w-full md:w-3/4 lg:w-2/3">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center mb-4">
                                    <MapPin className="w-6 lg:w-8 h-6 lg:h-8 text-violet-600 mr-3" />
                                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Our Location</h3>
                                </div>

                                <div className="w-full h-64 lg:h-96 rounded-2xl overflow-hidden shadow-lg border border-violet-200">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.5281878602793!2d75.33292503782774!3d19.87433524149135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb987469ba1515%3A0x1f5fd27a76a6b06b!2sJaju%20Professional%20Academy!5e0!3m2!1sen!2sin!4v1761569288710!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Jaju Professional Academy Location"
                                    ></iframe>
                                </div>
                            </div>
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
            <Footer />
        </div>
    );
};

export default Contact;