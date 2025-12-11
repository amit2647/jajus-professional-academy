import { Link } from 'react-router-dom';
import { Users, Award, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path based on your file structure
import Footer from '../components/Footer';
import { photoMap } from "../data/photoMap";
import { useState } from 'react';

const teachers = [
    { name: "Nikhi Jaju Sir", photo: photoMap["Nikhi "], title: "Head of Classes & Academic Director" },
    { name: "Pooja Jaju ", photo: photoMap["Pooja Jaju"], title: "Faculty - Business Studies" },
    { name: "Sunil Sharma ", photo: photoMap["Sunil Sharma Sir"], title: "Faculty - Accounting" },
    { name: "Swapnil Mundada", photo: photoMap["Swapnil Sir"], title: "Faculty - Taxation" },
    { name: "Sagar Mantri ", photo: photoMap["Sagar Mantri Sir"], title: "Faculty - Cost & Management" },
    { name: "Anuj Totla ", photo: photoMap["Anuj Totla Sir"], title: "Faculty - Economics & Law" },
    { name: "Ganesh Agharde ", photo: photoMap["Ganesh Agharde Sir"], title: "Faculty - Statistics & FM" },
    { name: "Anand Dargad ", photo: photoMap["Anand Dargad Sir"], title: "Faculty - Business Studies" },
    { name: "Shailesh Dahad ", photo: photoMap["Shailes Dhad Sir"], title: "Faculty - Audit & Assurance" },
    { name: "B B Ghuge ", photo: photoMap["B B Ghuge sir"], title: "Faculty - Accounting" },
    { name: "Krushna Kabra ", photo: photoMap["Krishna Kabra"], title: "Faculty - Taxation" },
    { name: "Darshan Patni ", photo: photoMap["Daran Pat"], title: "Faculty - Cost & Management" },
    { name: "Komal Rathi ", photo: photoMap["Komal Rathi Madam"], title: "Faculty - Business Law" },
    { name: "Payal Sarda ", photo: photoMap["Payal Sarda Madam"], title: "Faculty - Economics" },
    { name: "Kajal Mundada", photo: photoMap["Kajal Madam"], title: "Faculty - Mathematics" },
    { name: "Shrikant Mundada", photo: photoMap["Shrikant Mundada"], title: "Faculty - Strategic Management" },
    { name: "Ravi Lohiya", photo: photoMap["Ravi Lohiya"], title: "Faculty - Information Technology" },
    { name: "Gauri Mundada", photo: photoMap["Gauri Mundada"], title: "Faculty - Communication Skills" },
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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
                        About Jaju's Professional Academy
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
                    transition-all duration-300 
                    transform hover:scale-105
                "
                        >
                            Join Us Today
                        </Link>
                    </div>

                </div>
            </section>

            {/* Faculty Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h2>
                        <p className="text-lg text-gray-600">Meet the pillars of JPA’s excellence</p>
                    </div>

                    {/* Head of Classes */}
                    <div className="mb-16 flex flex-col items-center">
                        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-violet-400">
                            <img
                                src={photoMap["Nikhi Sir"]}
                                alt="Nikhil Sir"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="mt-4 text-2xl font-bold text-gray-900">Nikhil Jaju</h3>
                        <p className="text-gray-600 text-sm sm:text-base mt-1">
                            Head of Classes & Academic Director
                        </p>
                    </div>

                    {/* All Other Faculty */}
                    <div className="
    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
    gap-4 sm:gap-6
">

                        {teachers
                            .filter(t => t.name !== "Nikhi Jaju Sir")
                            .map((teacher, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden shadow-md border border-violet-200">
                                        <img
                                            src={teacher.photo}
                                            alt={teacher.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    <p className="mt-2 text-center text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                                        {teacher.name}
                                    </p>
                                </div>

                            ))}
                    </div>
                </div>
            </section>



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
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted Since 2000</h3>
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
                                    className="w-full h-[44px] sm:h-[52px] px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5917E8]"
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
                                    className="w-full h-[44px] sm:h-[52px] px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5917E8]"
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
                                    className="w-full h-[44px] sm:h-[52px] px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5917E8]"
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
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5917E8] resize-none"
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