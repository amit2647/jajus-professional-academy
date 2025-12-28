import { useState } from 'react';
import {
  MapPin,
  GraduationCap,
  Layers,
  BookOpenCheck,
  LineChart,
  Trophy,
  ShieldCheck
} from "lucide-react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroSec from "../assets/hero_section.webp";
import { Link } from 'react-router-dom';
import React from 'react';
import { photoMap } from '../data/photoMap';
import Nikhiljaju from "../assets/teachers/Ca_Nikhil_Jaju.webp"

const teachers = [
  { name: "Nikhi Jaju Sir", photo: photoMap["Nikhil Jaju"], title: "Teaching Exp.: 19 Years" },
  { name: "CA Pooja Jaju", photo: photoMap["Pooja Jaju"], title: "Teaching Exp.: 19 Years" },
  { name: "Er. Anuj Totla", photo: photoMap["Anuj Totla"], title: "Teaching Exp.: 14 Years" },
  { name: "Er. Shailesh Dahad", photo: photoMap["Shailesh Dahad"], title: "Teaching Exp.: 28 Years" },
  { name: "Er. Ganesh Agharde", photo: photoMap["Ganesh Agharde"], title: "Teaching Exp.: 11 Years" },
  { name: "Prof. Sunil Sharma", photo: photoMap["Sunil Sharma"], title: "Teaching Exp.: 28 Years" },
  { name: "Adv. Swapnil Mundada", photo: photoMap["Swapnil Mundada"], title: "Teaching Exp.: 13 Years" },
  { name: "Prof. Sagar Mantri", photo: photoMap["Sagar Mantri"], title: "Teaching Exp.: 14 Years" },
  { name: "CA Darshan Patni", photo: photoMap["Darshan Patni"], title: "Teaching Exp.: 4 Years" },
  { name: "Prof. Krushna Kabra", photo: photoMap["Krishna Kabra"], title: "Teaching Exp.: 9 Years" },
  { name: "Prof. Dr. Kajal Mundada", photo: photoMap["Kajal Madam"], title: "Teaching Exp.: 21 Years" },
  { name: "CMA Anand Dargad", photo: photoMap["Anand Dargad"], title: "Teaching Exp.: 11 Years" },
  { name: "CA Payal Sarda", photo: photoMap["Payal Sarda"], title: "Teaching Exp.: 7 Years" },
  { name: "Prof. Shrikant Mundada", photo: photoMap["Shrikant Mundada"], title: "Teaching Exp.: 13 Years" },
  { name: "Prof. B. B. Ghuge", photo: photoMap["B B Ghuge"], title: "Teaching Exp.: 28 Years" },
  { name: "CA Ravi Lohiya", photo: photoMap["Ravi Lohiya"], title: "Teaching Exp.: 4 Years" },
  { name: "Adv. Gauri Mundada", photo: photoMap["Gauri Sarda"], title: "Teaching Exp.: 2 Years" },
  { name: "CA Kshitij Kaushike", photo: photoMap["Kshitij Kaushike"], title: "Teaching Exp.: 3 years" },
  { name: "Adv. Shraddha Sharma", photo: photoMap["Shraddha Sharma"], title: "Teaching Exp.: 13 years" },
];

const Home = () => {

  const [hoveredProgramIndex, setHoveredProgramIndex] = useState<number | null>(null);

  const programs = [
    {
      title: "XI & XII Commerce",
      description: "Strong commerce foundation for school students aspiring for CA",
      icon: <GraduationCap />
    },
    {
      title: "XI & XII Foundation",
      description: "Strong foundation for aspiring commerce student",
      icon: <Layers />
    },
    {
      title: "CA Foundation",
      description: "Build a strong foundation for your CA journey with comprehensive courses",
      icon: <BookOpenCheck />
    },
    {
      title: "CA Intermediate",
      description: "Advanced preparation with industry experts and practical approach",
      icon: <LineChart />
    },
    {
      title: "CA Final",
      description: "Master the final stage with strategic guidance and exam techniques",
      icon: <Trophy />
    },
    {
      title: "CS-FOUNDATION",
      description: "Comprehensive preparation for the CS course",
      icon: <ShieldCheck />
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      <section className="relative w-full h-full overflow-hidden">
        <img src={heroSec} alt="Hero Background" className="w-full h-full object-cover" />
      </section>

      {/* Faculty Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800/80">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Expert Faculty</span>
            </h2>
            <p className="text-sm sm:text-lg text-blue-800/80 max-w-2xl mx-auto">
              Learn from passionate educators who inspire excellence
            </p>
          </div>

          {/* Head of Class */}
          <div className="mb-16 sm:mb-20 flex justify-center px-3">
            <div className="relative w-full max-w-5xl">

              {/* Floating Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="px-5 py-2 bg-white shadow-lg border border-violet-200 rounded-full text-violet-700 font-bold text-xs sm:text-sm tracking-wide">
                  ⭐ Head of The Class
                </div>
              </div>

              {/* Card */}
              <div
                className="
        rounded-3xl 
        bg-white 
        shadow-xl 
        border border-violet-200/40
        p-5 sm:p-8 lg:p-10
        flex flex-col md:flex-row 
        items-center md:items-start 
        gap-5 sm:gap-8
      "
              >
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-violet-400 shadow-md">
                    <img
                      src={Nikhiljaju}
                      alt="CA Nikhil Jaju"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">

                  {/* Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                    CA Nikhil Jaju
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                      Academic Director
                    </span>
                    <span className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                      ⭐ 17+ Years of Teaching Excellence
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Leading JPA’s academic vision with years of expertise in shaping young minds
                    and inspiring excellence in commerce and professional education.
                  </p>

                  {/* Achievements */}
                  <div className="bg-gradient-to-br from-white to-violet-50  rounded-2xl p-4 sm:p-5 shadow-sm">
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
                      Major Achievements
                    </h4>

                    <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                      {[
                        "33rd Rank All India — CA Final",
                        "10th Rank All India — CS Final",
                        "16th Rank — CS Foundation",
                        "Maharashtra State Topper — HSC (2004)",
                      ].map((item, i) => (
                        <li key={i} className="flex">
                          <span className="text-violet-600 mr-2 leading-6">•</span>
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-6">
            {teachers
              .filter(t => t.name !== "Nikhi Jaju Sir")
              .map((teacher, idx) => (
                <div key={idx} className="group relative">
                  <div
                    className="
            relative rounded-lg sm:rounded-2xl
            overflow-hidden
            border border-violet-500/15
            shadow-sm sm:shadow-xl
            transition-all duration-300
            sm:hover:-translate-y-3 sm:hover:shadow-2xl sm:hover:shadow-violet-500/20
          "
                  >
                    {/* Portrait Image */}
                    <div className="relative h-36 sm:h-36 md:h-44 lg:h-60 overflow-hidden">
                      <img
                        src={teacher.photo}
                        alt={teacher.name}
                        className="
                w-full h-full
                object-cover object-top
                sm:group-hover:scale-110
                transition duration-500
              "
                        loading="lazy"
                      />

                      {/* Very light overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-10 sm:opacity-20"></div>
                    </div>

                    {/* Text Content */}
                    <div className="px-1.5 py-1.5 sm:p-4 text-center">
                      <h4 className="text-[11px] sm:text-base font-semibold text-blue-800/80 leading-tight truncate">
                        {teacher.name}
                      </h4>
                      <p className="text-[8px] sm:text-xs text-gray-600 leading-tight mt-0.5 truncate">
                        {teacher.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 xl:px-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Explore All <span className="text-violet-600">Programs</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">

            {programs.map((program, index) => (
              <Link
                key={index}
                to="/admission#courses"
                onMouseEnter={() => setHoveredProgramIndex(index)}
                onMouseLeave={() => setHoveredProgramIndex(null)}
                className={`
                  rounded-2xl p-3 sm:p-4 lg:p-6 text-center
                  transition-all duration-300 transform hover:scale-105
                  shadow-md cursor-pointer border border-violet-200
                  ${hoveredProgramIndex === index
                    ? "bg-gradient-to-br from-violet-200 to-indigo-200"
                    : "bg-gradient-to-br from-violet-50 to-indigo-50"}
                `}
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  {React.cloneElement(program.icon, {
                    className: "w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-violet-700"
                  })}
                </div>

                <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-gray-900">
                  {program.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-base text-gray-700">{program.description}</p>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-10 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-4 xl:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            VISIT US
          </h2>

          {/* grid for 2 locations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">

            {/* Location 1 */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-violet-200">
              <div className="flex flex-col items-center">

                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-violet-600 mr-2" />
                </div>

                {/* MAP */}
                <div className="w-full rounded-xl overflow-hidden shadow-lg border border-violet-200 aspect-[4/3] sm:aspect-[16/9]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.5281878602793!2d75.33292503782774!3d19.87433524149135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb987469ba1515%3A0x1f5fd27a76a6b06b!2sJaju%20Professional%20Academy!5e0!3m2!1sen!2sin!4v1761569288710!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <p className="mt-3 sm:mt-4 text-violet-700 font-semibold hover:text-violet-900 text-xs sm:text-sm lg:text-base">
                Address:
                <br />
                Jaju Professional Academy,
                Beed Bypass Road, Chhatrapati Sambhajinagar, Maharashtra 431001
              </p>
            </div>

            {/* Location 2 */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-violet-200">
              <div className="flex flex-col items-center">

                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-violet-600 mr-2" />
                </div>

                {/* MAP */}
                <div className="w-full rounded-xl overflow-hidden shadow-lg border border-violet-200 aspect-[4/3] sm:aspect-[16/9]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.9843832682966!2d75.32953414027757!3d19.868162255935832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb987ad35d02e7%3A0x511b29c840a244d8!2sV89H%2B9VR%2C%20Eknath%20Rang%20Mandir%20Rd%2C%20Pannalal%20Nagar%2C%20New%20Usmanpura%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%20431005!5e0!3m2!1sen!2sin!4v1766930460526!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <p className="mt-3 sm:mt-4 text-violet-700 font-semibold hover:text-violet-900 text-xs sm:text-sm lg:text-base">
                Address:
                <br />
                Jaju Professional Academy, Eknath Rang Mandir Road,
                Pannalal Nagar, New Usmanpura,
                Chhatrapati Sambhajinagar, Maharashtra 431005
              </p>
            </div>

          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;
