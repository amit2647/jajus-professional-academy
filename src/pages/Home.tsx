import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, BookOpen, Users, Award, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      text: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
      author: "CA Foundation Student"
    },
    {
      text: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
      author: "CA Intermediate Student"
    },
    {
      text: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
      author: "CA Final Student"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const programs = [
    {
      title: "CA Foundation",
      description: "Comprehensive foundation courses for aspiring CAs",
      icon: <BookOpen className="w-8 h-8" />,
      featured: true,
    },
    {
      title: "CA Intermediate",
      description: "Advanced intermediate level preparation",
      icon: <Users className="w-8 h-8" />,
      featured: false,
    },
    {
      title: "XI & XII COMMERCE",
      description: "Commerce foundation for school students",
      icon: <Award className="w-8 h-8" />,
      featured: false,
    },
  ];

  const features = [
    {
      title: "Test Series",
      description: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
      icon: <BookOpen className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Online Classes",
      description: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
      icon: <Users className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Mentorship Program",
      description: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
      icon: <Award className="w-12 h-12 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                WELCOME TO<br />
                <span className="text-yellow-300">JAJU'S</span><br />
                PROFESSIONAL<br />
                ACADEMY
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams.
                Enroll for the latest batches and get quality classes from the top CA Educators.
              </p>
              <Link
                to="/admission?#application-form"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mx-auto flex items-end justify-center overflow-hidden shadow-2xl">
                  <div className="w-64 h-80 bg-blue-900 rounded-t-full flex items-center justify-center">
                    <div className="w-48 h-64 bg-orange-400 rounded-t-full flex items-end justify-center">
                      <div className="text-6xl">👨‍🎓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Programs
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`rounded-2xl p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-lg 
                  ${isHovered
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white"
                    }`}
                >
                  <div className="flex justify-center mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-sm opacity-90">{program.description}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed font-bold">
            Availing a variety of affordable CA Foundation courses to help
            students boost their learnings and practices for the exam.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Take Words from <span className="text-blue-600">Our Proud Students!</span>
            </h2>
          </div>

          <div className="relative">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`bg-blue-600 text-white rounded-2xl p-8 transition-all duration-500 transform ${index === currentTestimonial
                      ? 'scale-105 shadow-2xl'
                      : 'scale-95 opacity-70'
                      }`}
                  >
                    <div className="flex justify-center mb-4">
                      <Star className="w-8 h-8 text-yellow-400 fill-current" />
                    </div>
                    <p className="text-sm leading-relaxed mb-4 font-bold">{testimonial.text}</p>
                    <p className="text-xs opacity-80 text-center">{testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">VISIT US</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Location</h3>
            </div>
            <p className="text-gray-600 mb-6">Come visit our modern facilities and meet our expert faculty</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Jaju Professional Academy</h3>
              <p className="text-blue-200 leading-relaxed">
                Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">ABOUT US</h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Enroll for the latest batches and get quality classes from the top CA Educators.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">PROGRAMS</h4>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>Ca Foundation</li>
                <li>Ca Intermediate</li>
                <li>XI & XII Commerce</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">CONTACT</h4>
              <div className="text-blue-200 text-sm space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 999 332 999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>example@gmail.com</span>
                </div>
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

export default Home;