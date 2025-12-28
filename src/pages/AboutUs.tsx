import { Link } from 'react-router-dom';
import { Users, Award, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path based on your file structure
import Footer from '../components/Footer';
import { photoMap } from "../data/photoMap";
import { useState } from 'react';
import Nikhiljaju from "../assets/teachers/Ca_Nikhil_Jaju.webp"


const teachers = [
    // Head of Classes
    {
        name: "Nikhi Jaju Sir",
        photo: photoMap["Nikhil Jaju"],
        title: "Teaching Exp.: 19 Years",
    },


    {
        name: "CA Pooja Jaju",
        photo: photoMap["Pooja Jaju"],
        title: "Teaching Exp.: 19 Years",
    },
    {
        name: "Er. Anuj Totla",
        photo: photoMap["Anuj Totla"],
        title: "Teaching Exp.: 14 Years",
    },
    {
        name: "Er. Shailesh Dahad",
        photo: photoMap["Shailesh Dahad"],
        title: "Teaching Exp.: 28 Years",
    },
    {
        name: "Er. Ganesh Agharde",
        photo: photoMap["Ganesh Agharde"],
        title: "Teaching Exp.: 11 Years",
    },


    {
        name: "Prof. Sunil Sharma",
        photo: photoMap["Sunil Sharma"],
        title: "Teaching Exp.: 28 Years",
    },
    {
        name: "Adv. Swapnil Mundada",
        photo: photoMap["Swapnil Mundada"],
        title: "Teaching Exp.: 13 Years",
    },
    {
        name: "Prof. Sagar Mantri",
        photo: photoMap["Sagar Mantri"],
        title: "Teaching Exp.: 14 Years",
    },
    {
        name: "CA Darshan Patni",
        photo: photoMap["Darshan Patni"],
        title: "Teaching Exp.: 4 Years",
    },


    {
        name: "Prof. Krushna Kabra",
        photo: photoMap["Krishna Kabra"],
        title: "Teaching Exp.: 9 Years",
    },
    {
        name: "Prof. Dr. Kajal Mundada",
        photo: photoMap["Kajal Madam"],
        title: "Teaching Exp.: 21 Years",
    },
    {
        name: "CMA Anand Dargad",
        photo: photoMap["Anand Dargad"],
        title: "Teaching Exp.: 11 Years",
    },
    {
        name: "CA Payal Sarda",
        photo: photoMap["Payal Sarda"],
        title: "Teaching Exp.: 7 Years",
    },


    {
        name: "Prof. Shrikant Mundada",
        photo: photoMap["Shrikant Mundada"],
        title: "Teaching Exp.: 13 Years",
    },
    {
        name: "Prof. B. B. Ghuge",
        photo: photoMap["B B Ghuge"],
        title: "Teaching Exp.: 28 Years",
    },
    {
        name: "CA Ravi Lohiya",
        photo: photoMap["Ravi Lohiya"],
        title: "Teaching Exp.: 4 Years",
    },
    {
        name: "Adv. Gauri Mundada",
        photo: photoMap["Gauri Sarda"],
        title: "Teaching Exp.: 2 Years",
    },

    {
        name: "CA Kshitij Kaushike",
        photo: photoMap["Kshitij Kaushike"],
        title: "Teaching Exp.: 3 years",
    },
    {
        name: "Adv. Shraddha Sharma",
        photo: photoMap["Shraddha Sharma"],
        title: "Teaching Exp.: 13 years",
    },
];



const AboutUs = () => {

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
            <section className="bg-gradient-to-br from-violet-600 via-violet-700 to-[#4D14C7] text-white py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    {/* Smaller heading on mobile */}
                    <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 font-semibold">
                        Jaju's Professional Academy
                    </h1>

                    {/* Smaller paragraph on mobile */}
                    <p className="text-sm sm:text-lg lg:text-xl text-violet-100 mb-4 sm:mb-8 max-w-3xl mx-auto">
                        Your trusted partner in shaping successful careers in Chartered Accountancy and commerce education.
                    </p>

                    {/* Button — smaller on mobile */}
                    <div className="flex justify-center">
                        <Link
                            to="/admission?#application-form"
                            className="
                    bg-yellow-400 hover:bg-yellow-500 
                    text-gray-900 font-bold 
                    py-2.5 sm:py-4 
                    px-6 sm:px-8 
                    rounded-lg 
                    text-sm sm:text-lg 
                    transition-all duration-500 
                    transform hover:scale-105
                "
                        >
                            Join Us Today
                        </Link>
                    </div>

                </div>
            </section>

            {/* ================= Faculty Section (Landing Page) ================= */}
            <section className="relative py-20 overflow-hidden">

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-800/80 tracking-tight mb-4">
                            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">Mentors</span>
                        </h2>
                        <p className="mt-4 text-lg text-purple-500 max-w-2xl mx-auto">
                            Expert educators committed to unlocking your full potential
                        </p>
                    </div>

                    {/* ================= Head of Classes - Featured Card ================= */}
                    <div className="mb-20 flex justify-center">
                        <div className="relative group">
                            {/* Card */}
                            <div className="relative bg-gradient-to-br from-white via-purple-50 to-indigo-50 rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full border border-white/50">

                                {/* Badge */}
                                <div className="absolute -top-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                                    ⭐ Head of the class
                                </div>

                                {/* Portrait Image with Frame */}
                                <div className="relative">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl blur opacity-50"></div>
                                    <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-105 transition duration-500">
                                        <img
                                            src={Nikhiljaju}
                                            alt="Nikhil Jaju"
                                            className="w-full h-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Text */}
                                <h3 className="mt-8 text-3xl font-bold bg-gradient-to-r from-purple-900 to-indigo-900 bg-clip-text text-transparent">
                                    Nikhil Jaju
                                </h3>
                                <p className="mt-2 text-sm text-purple-700 font-semibold text-center">
                                    Academic Director
                                </p>

                                {/* Decorative Line */}
                                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* ================= Faculty Grid with Cards ================= */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {teachers
                            .filter(t => t.name !== "Nikhi Jaju Sir")
                            .map((teacher, idx) => (
                                <div
                                    key={idx}
                                    className="group relative"
                                >
                                    {/* Card Background Glow */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

                                    {/* Card */}
                                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 transform group-hover:-translate-y-2 transition-all duration-500">

                                        {/* Portrait Image */}
                                        <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md border-2 border-purple-500 group-hover:border-purple-400 transition-all duration-500">
                                            <img
                                                src={teacher.photo}
                                                alt={teacher.name}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Name */}
                                        <p className="mt-3 text-sm font-bold text-gray-900 leading-tight text-center">
                                            {teacher.name}
                                        </p>

                                        {/* Title with Slide-up Effect */}
                                        <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                                            <p className="text-xs text-purple-700 font-medium mt-1 text-center pt-1 border-t border-purple-500">
                                                {teacher.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* View All Button with Animation
                    <div className="mt-16 text-center">
                        <button className="group relative inline-flex items-center gap-3 px-10 py-4 overflow-hidden rounded-full bg-white text-purple-900 font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                            <span className="relative z-10">View All Faculty</span>
                            <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <span className="absolute inset-0 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span>View All Faculty</span>
                                <svg className="w-5 h-5 transform translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                    </div> */}

                </div>

                {/* Bottom Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-16 fill-current text-white" viewBox="0 0 1500 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>
            {/* ================= End Faculty Section ================= */}

            {/* Mission Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                            Our Mission
                        </h2>
                        <p className="text-sm sm:text-xl text-gray-600">
                            Empowering students to achieve excellence in CA and commerce education
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 sm:p-8 shadow-lg max-w-3xl mx-auto">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            At Jaju's Professional Academy, our mission is to provide world-class education and mentorship to aspiring Chartered Accountants and commerce students. We aim to foster a learning environment that combines rigorous academics with practical insights, ensuring our students are well-prepared for their exams and future careers.
                        </p>
                    </div>
                </div>
            </section>


            {/* Faculty Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

                        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg text-center">
                            <Users className="w-8 h-8 sm:w-12 sm:h-12 text-violet-600 mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">CA Professionals</h3>
                            <p className="text-xs sm:text-base text-gray-600">
                                Our faculty includes practicing CAs...
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg text-center">
                            <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 text-violet-600 mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Academic Experts</h3>
                            <p className="text-xs sm:text-base text-gray-600">
                                Educators with deep knowledge...
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg text-center">
                            <Award className="w-8 h-8 sm:w-12 sm:h-12 text-violet-600 mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Mentors & Guides</h3>
                            <p className="text-xs sm:text-base text-gray-600">
                                Personalized mentoring to guide...
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Achievements Section
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
                        <p className="text-xl text-gray-600">Celebrating our legacy of success</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                            <Award className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+ Students</h3>
                            <p className="text-gray-600">Trained over 10,000 students in CA and commerce programs.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                            <Award className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">High Success Rate</h3>
                            <p className="text-gray-600">Consistently high pass rates in CA Foundation and Intermediate exams.</p>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                            <Award className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted Since 5000</h3>
                            <p className="text-gray-600">Over two decades of excellence in CA education.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Footer */}

            <section className="py-12 sm:py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                            Send Us a Message
                        </h2>
                        <p className="text-sm sm:text-xl text-gray-600">
                            Fill out the form below, and our team will get back to you
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg space-y-4 sm:space-y-6"
                        >

                            {/* Name */}
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
                                    className="w-full h-[44px] sm:h-[52px] px-3 sm:px-4 border border-gray-500 rounded-lg focus:ring-2 focus:ring-[#5917E8]"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
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
                                    className="w-full h-[44px] sm:h-[52px] px-3 sm:px-4 border border-gray-500 rounded-lg focus:ring-2 focus:ring-[#5917E8]"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Phone */}
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
                                    className="w-full h-[44px] sm:h-[52px] px-3 sm:px-4 border border-gray-500 rounded-lg focus:ring-2 focus:ring-[#5917E8]"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-[#5917E8] resize-none"
                                    placeholder="Your message or query"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#5917E8] hover:bg-[#4D14C7] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-lg transition-colors"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default AboutUs;