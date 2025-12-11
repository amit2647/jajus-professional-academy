import { useState } from 'react';
import { MapPin, BookOpen, Users, Award, Target, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import { photoMap } from "../data/photoMap";
import Footer from '../components/Footer';
import heroSec from "../assets/hero_section.png";
import { Link } from 'react-router-dom';


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

  const photoFiles = import.meta.glob('../assets/photos/*.{jpg,jpeg,png}', { eager: true, import: 'default' });

  // Match student names to filenames
  Object.entries(photoFiles).forEach(([path, module]) => {
    const fileName = path.split('/').pop() as string;
    photoMap[fileName] = module as string;
  });


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
                className={`rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer border border-violet-200 ${hoveredProgramIndex === index
                  ? 'bg-gradient-to-br from-violet-200 to-indigo-200 text-gray-900'
                  : 'bg-gradient-to-br from-violet-50 to-indigo-50 text-gray-900'
                  }`}
              >
                <div className="flex justify-center mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{program.title}</h3>
                <p className={`text-sm ${hoveredProgramIndex === index ? 'text-gray-700' : 'text-gray-600'}`}>
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