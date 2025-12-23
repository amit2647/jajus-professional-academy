import { useState } from 'react';
import { MapPin, BookOpen, Users, Award, Target, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroSec from "../assets/hero_section.png";
import { Link } from 'react-router-dom';
import React from 'react';
import { photoMap } from '../data/photoMap';

const teachers = [
  {
    name: "Nikhi Jaju Sir",
    photo: photoMap["Nikhi Jaju"],
    title: "Head of Classes & Academic Director",
  },
  {
    name: "Pooja Jaju",
    photo: photoMap["Pooja Jaju"],
    title: "Faculty - Business Studies",
  },
  {
    name: "Sunil Sharma",
    photo: photoMap["Sunil Sharma"],
    title: "Faculty - Accounting",
  },
  {
    name: "Swapnil Mundada",
    photo: photoMap["Swapnil Mundada"],
    title: "Faculty - Taxation",
  },
  {
    name: "Sagar Mantri",
    photo: photoMap["Sagar Mantri"],
    title: "Faculty - Cost & Management",
  },
  {
    name: "Anuj Totla",
    photo: photoMap["Anuj Totla"],
    title: "Faculty - Economics & Law",
  },
  {
    name: "Ganesh Agharde",
    photo: photoMap["Ganesh Agharde"],
    title: "Faculty - Statistics & FM",
  },
  {
    name: "Anand Dargad",
    photo: photoMap["Anand Dargad"],
    title: "Faculty - Business Studies",
  },
  {
    name: "B B Ghuge",
    photo: photoMap["B B Ghuge"],
    title: "Faculty - Accounting",
  },
  {
    name: "Krushna Kabra",
    photo: photoMap["Krishna Kabra"],
    title: "Faculty - Taxation",
  },
  {
    name: "Darshan Patni",
    photo: photoMap["Darshan Patni"],
    title: "Faculty - Cost & Management",
  },
  {
    name: "Kajal Mundada",
    photo: photoMap["Kajal Madam"],
    title: "Faculty - Mathematics",
  },
  {
    name: "Shrikant Mundada",
    photo: photoMap["Shrikant Mundada"],
    title: "Faculty - Strategic Management",
  },
  {
    name: "Ravi Lohiya",
    photo: photoMap["Ravi Lohiya"],
    title: "Faculty - Information Technology",
  },
];

const Home = () => {

  const [hoveredProgramIndex, setHoveredProgramIndex] = useState<number | null>(null);

  // Programs data for hero section
  const programs = [
    {
      title: "XI & XII Commerce",
      description: "Strong commerce foundation for school students aspiring for CA",
      icon: <Target className="w-12 h-12 text-white-500" />,
      features: ["School Curriculum", "CA Foundation Prep", "Regular Assessments", "Career Counseling"],
      stats: { students: "400+", success: "90%" }
    },
    {
      title: "XI & XII Foundation",
      description: "Strong foundation for school students aspiring for CA",
      icon: <Target className="w-12 h-12 text-white-500" />,
      features: ["School Curriculum", "CA Foundation Prep", "Regular Assessments", "Career Counseling"],
      stats: { students: "400+", success: "90%" }
    },
    {
      title: "CA Foundation",
      description: "Build a strong foundation for your CA journey with comprehensive courses",
      icon: <BookOpen className="w-12 h-12 text-white-500" />,
      features: ["Expert Faculty", "Study Materials", "Test Series", "Crash batches"],
      stats: { students: "500+", success: "85%" }
    },
    {
      title: "CA Intermediate",
      description: "Advanced preparation with industry experts and practical approach",
      icon: <Users className="w-12 h-12 text-white-500" />,
      features: ["Group I", "Group II", "Test Series", "Mentorship"],
      stats: { students: "300+", success: "78%" }
    },
    {
      title: "CA Final",
      description: "Master the final stage with strategic guidance and exam techniques",
      icon: <Award className="w-12 h-12 text-white-500" />,
      features: ["Strategic Planning", "Advanced Topics", "Interview Prep", "Career Guidance"],
      stats: { students: "200+", success: "72%" }
    },
    {
      title: "CS-EET",
      description: "Comprehensive preparation for the CS Executive Entrance Test",
      icon: <Sparkles className="w-12 h-12 text-white-500" />,
      features: ["Expert Faculty", "Study Materials", "Mock Tests", "Doubt Sessions"],
      stats: { students: "300+", success: "80%" }
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" >
      <Navbar />

      <section className="relative w-full h-full overflow-hidden">
        <img
          src={heroSec}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </section>

      {/* ================= Faculty Section (Landing Page) ================= */}
      <section className="py-16 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="">
              <span className="text-blue-800/80 text-sm font-semibold">World-Class Education</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800/80 tracking-tight mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Expert Faculty</span>
            </h2>
            <p className="text-lg text-blue-800/80 max-w-2xl mx-auto">
              Learn from passionate educators who inspire excellence
            </p>
          </div>

          {/* ================= Head of Classes - Featured Card ================= */}
          <div className="mb-20 flex justify-center">
            <div className="relative group">
              <div className="relative rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl border border-violet-500/30">

                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                  ⭐ Head of Classes
                </div>

                {/* Portrait Image with Hexagon Shape */}
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-violet-500 ring-4 ring-violet-500/30">
                    <img
                      src={photoMap["Nikhi Jaju"]}
                      alt="Nikhil Jaju"
                      className="w-full h-full object-cover object-top transform group-hover:scale-110 transition duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-blue-800/80 mb-2">
                    Nikhil Jaju
                  </h3>
                  <p className="text-violet-500 font-semibold mb-4">
                    Academic Director & Head of Classes
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leading JPA's academic vision with years of expertise in shaping young minds and fostering excellence in education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Faculty Grid - Staggered Layout ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachers
              .filter(t => t.name !== "Nikhi Jaju Sir")
              .slice(0, 12)
              .map((teacher, idx) => (
                <div
                  key={idx}
                  className="group relative"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Card with Tilt Effect */}
                  <div className="relative backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-violet-500/20">

                    {/* Image with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={teacher.photo}
                        alt={teacher.name}
                        className="w-full h-full object-cover object-top transform group-hover:scale-110 transition duration-500"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-20 group-hover:opacity-10 transition duration-300"></div>

                      {/* Floating Badge */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-white text-xs">✦</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 relative">
                      <h4 className="text-white font-bold text-blue-800/80 mb-1 group-hover:text-violet-600 transition duration-300">
                        {teacher.name}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {teacher.title}
                      </p>

                      {/* Decorative Line */}
                      {/* <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500 rounded-full"></div> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* View All Button */}
          {/* <div className="mt-16 text-center">
            <button className="relative group px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-violet-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">View All Faculty →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </button>
          </div> */}

        </div>
      </section>
      {/* ================= End Faculty Section ================= */}



      {/* All Programs Grid */}
      <section className="py-16 lg:py-20 bg-white">
        {/* Increased max-width and adjusted padding */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-4 xl:px-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Explore All <span className="text-violet-600">Programs</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Link
                key={index}
                to="/admission#courses"
                onMouseEnter={() => setHoveredProgramIndex(index)}
                onMouseLeave={() => setHoveredProgramIndex(null)}
                className={`
    rounded-2xl 
    p-3 sm:p-4 lg:p-6     
    text-center 
    transition-all duration-300 
    transform hover:scale-105 
    shadow-lg 
    cursor-pointer 
    border border-violet-200
    ${hoveredProgramIndex === index
                    ? "bg-gradient-to-br from-violet-200 to-indigo-200 text-gray-900"
                    : "bg-gradient-to-br from-violet-50 to-indigo-50 text-gray-900"
                  }
  `}
              >
                {/* Smaller icon */}
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="text-violet-700">
                    {/** Force icon size smaller on mobile */}
                    {React.cloneElement(program.icon, {
                      className:
                        "w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-violet-700"
                    })}
                  </div>
                </div>

                {/* Smaller title */}
                <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-gray-900">
                  {program.title}
                </h3>

                {/* Smaller description */}
                <p
                  className={`text-xs sm:text-sm lg:text-base ${hoveredProgramIndex === index ? "text-gray-700" : "text-gray-600"
                    }`}
                >
                  {program.description}
                </p>
              </Link>


            ))}
          </div>
        </div>
      </section>


      {/* Visit Us Section */}
      <section className="py-12 lg:py-20 bg-white">
        {/* Increased max-width and adjusted padding */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-4 xl:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 lg:mb-8">VISIT US</h2>
          <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-6 lg:p-8 shadow-lg max-w-2xl mx-auto border border-violet-200">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-6 lg:w-8 h-6 lg:h-8 text-violet-600 mr-3" />
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Our Location</h3>
              </div>

              <div className="w-full max-w-4xl h-64 lg:h-96 rounded-2xl overflow-hidden shadow-lg border border-violet-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.5281878602793!2d75.33292503782774!3d19.87433524149135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb987469ba1515%3A0x1f5fd27a76a6b06b!2sJaju%20Professional%20Academy!5e0!3m2!1sen!2sin!4v1761569288710!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              Come visit our modern facilities and meet our expert faculty
            </p>
            <button
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 lg:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm lg:text-base shadow-lg"
              aria-label="Get directions to our location"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;