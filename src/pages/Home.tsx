import { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, BookOpen, Users, Award, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import HomeSec1 from '../assets/hero_Sec_1.png';
import HomeSec2 from '../assets/hero_Sec_2.png';
import HomeSec3 from '../assets/hero_Sec_3.png';
import Testimony1 from '../assets/testimony_1.png';
import Testimony2 from '../assets/testimony_2.png';
import Testimony3 from '../assets/testimony_3.png';

import Logo from '../assets/nav_logo.png';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);


  useEffect(() => {
    setIsVisible(true);
  }, []);


  const testimonials = [
    {
      text: "Jaju's Academy helped me crack my exams with confidence!",
      author: "Rohit Sharma",
      image: Testimony1,
    },
    {
      text: "The teachers here are amazing and the support is unmatched.",
      author: "Priya Verma",
      image: Testimony2,
    },
    {
      text: "Joining here was the best decision for my career growth.",
      author: "Arjun Mehta",
      image: Testimony3,
    },
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
      icon: <BookOpen className="w-12 h-12 text-[#4D14C7]" />
    },
    {
      title: "Online Classes",
      description: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
      icon: <Users className="w-12 h-12 text-[#4D14C7]" />
    },
    {
      title: "Mentorship Program",
      description: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
      icon: <Award className="w-12 h-12 text-[#4D14C7]" />
    }
  ];

  // Carousel data - you can customize these slides
  const slides = [
    {
      id: 1,
      title: "Our CA Foundation Toppers",
      subtitle: "JPA has toppers in 9 out of last 13 CA Foundation Exams",
      image: HomeSec1,
      bgGradient: "from-white-600 via-white-700 to-white-800",
      buttonText: "Get Started Today",
      buttonLink: "/admission?#application-form"
    },
    {
      id: 2,
      title: "Our CA Intermediate Toppers",
      subtitle: "Join thousands of successful students who have achieved their dreams with JPA",
      image: HomeSec2,
      bgGradient: "",
      buttonText: "Get Started Today",
      buttonLink: "/admission?#application-form"
    },
    {
      id: 3,
      title: "Our CA Foundation Student Passed with Distinction",
      subtitle: "Join thousands of successful students who have achieved their dreams with JPA",
      image: HomeSec3,
      bgGradient: "from-white-600 via-white-700 to-white-800",
      buttonText: "Get Started Today",
      buttonLink: "/admission?#application-form"
    }
  ];


  const resetAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay(); // restart autoplay after manual change
  }, [resetAutoPlay, slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  }, [resetAutoPlay, slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    resetAutoPlay();
  }, [resetAutoPlay]);

  useEffect(() => {
    resetAutoPlay(); // start autoplay on mount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoPlay]);


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden">
        <div className={`bg-gradient-to-br ${slides[currentSlide].bgGradient} text-white transition-all duration-700 ease-in-out`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
              {/* Left Side - Image and CTA */}
              <div className={`flex flex-col items-center transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                <div className="w-full max-w-7xl h-[500px] flex items-center justify-center mb-8">
                  <img
                    src={slides[currentSlide].image}
                    alt="Jaju's Professional Academy"
                    className="max-w-full max-h-full object-contain transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Right Side - Content Card */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} mb-40`}>
                <div className="relative">
                  <div className="w-80 h-96 bg-white-700 rounded-3xl mx-auto flex flex-col items-center justify-center transition-all duration-300">
                    {/* Logo */}
                    <img
                      src={Logo}
                      alt="Logo"
                      className="h-26 w-auto mb-6"
                    />
                    {/* Dynamic Title */}
                    <h1 className="text-center text-xl font-semibold text-gray-900 leading-snug px-4">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-md text-gray-500 mt-2 mx-4 text-center">
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-8'>
              <a
                href={slides[currentSlide].buttonLink}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 mt-12 inline-block"
              >
                {slides[currentSlide].buttonText}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-black/50 hover:bg-white/70'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 bg-black/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
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
                      ? "bg-[#4D14C7] text-white"
                      : "bg-violet-500 text-white"
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
      <section className="py-24 bg-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Take Words from <span className="text-[#4D14C7]">Our Proud Students!</span>
            </h2>
          </div>

          <div className="relative">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform ${index === currentTestimonial
                      ? 'scale-110 shadow-2xl'
                      : 'scale-95 opacity-80'
                      } w-full mx-auto`} // <-- width fills column
                  >
                    {/* Image */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-86 object-contain mx-auto" // <-- fixes cropping
                    />


                    {/* Content */}
                    <div className="p-6 text-center">
                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-base leading-relaxed mb-4 font-medium text-gray-700">
                        {testimonial.text}
                      </p>

                      {/* Author */}
                      <p className="text-sm font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-10 space-x-4">
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
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-[#4D14C7]' : 'bg-gray-300'
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
              <MapPin className="w-8 h-8 text-[#4D14C7] mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Location</h3>
            </div>
            <p className="text-gray-600 mb-6">Come visit our modern facilities and meet our expert faculty</p>
            <button className="bg-[#4D14C7] hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-[#5917E8] to-[#4D14C7] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Jaju Professional Academy</h3>
              <p className="text-violet-200 leading-relaxed">
                Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">ABOUT US</h4>
              <p className="text-violet-200 text-sm leading-relaxed">
                Enroll for the latest batches and get quality classes from the top CA Educators.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">PROGRAMS</h4>
              <ul className="text-violet-200 text-sm space-y-2">
                <li>Ca Foundation</li>
                <li>Ca Intermediate</li>
                <li>XI & XII Commerce</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">CONTACT</h4>
              <div className="text-violet-200 text-sm space-y-3">
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

          <div className="border-t border-yellow-700 mt-12 pt-8 text-center">
            <p className="text-violet-200">&copy; 2025 Jaju's Professional Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;