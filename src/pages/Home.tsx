import { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, BookOpen, Users, Award, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import HomeSec1 from '../assets/hero_Sec_1.png';
import HomeSec2 from '../assets/hero_Sec_2.png';
import HomeSec3 from '../assets/hero_Sec_3.png';
import Testimony1 from '../assets/testimony_1.png';
import Testimony2 from '../assets/testimony_2.png';
import Testimony3 from '../assets/testimony_3.png';

import Logo from '../assets/nav_logo.png';
import Footer from '../components/Footer';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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

  // Touch handlers for testimonials
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

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

  // const features = [
  //   {
  //     title: "Test Series",
  //     description: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
  //     icon: <BookOpen className="w-12 h-12 text-[#4D14C7]" />
  //   },
  //   {
  //     title: "Online Classes",
  //     description: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
  //     icon: <Users className="w-12 h-12 text-[#4D14C7]" />
  //   },
  //   {
  //     title: "Mentorship Program",
  //     description: "Join Jaju's Professional Academy and start preparing for your CA Foundation and CA Intermediate exams. Enroll for the latest batches and get quality classes from the top CA Educators.",
  //     icon: <Award className="w-12 h-12 text-[#4D14C7]" />
  //   }
  // ];

  const slides = [
    {
      id: 1,
      title: "Our CA Foundation Toppers",
      subtitle: "JPA has toppers in 9 out of last 13 CA Foundation Exams",
      image: HomeSec1,
      bgGradient: "from-white-600 via-white-700 to-white-800",
      buttonText: "Get Started Today",
      buttonLink: `${import.meta.env.BASE_URL}admission?#application-form`
    },
    {
      id: 2,
      title: "Our CA Intermediate Toppers",
      subtitle: "Join thousands of successful students who have achieved their dreams with JPA",
      image: HomeSec2,
      bgGradient: "",
      buttonText: "Get Started Today",
      buttonLink: `${import.meta.env.BASE_URL}admission?#application-form`

    },
    {
      id: 3,
      title: "Our CA Foundation Student Passed with Distinction",
      subtitle: "Join thousands of successful students who have achieved their dreams with JPA",
      image: HomeSec3,
      bgGradient: "from-white-600 via-white-700 to-white-800",
      buttonText: "Get Started Today",
      buttonLink: `${import.meta.env.BASE_URL}admission?#application-form`
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
    resetAutoPlay();
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
    resetAutoPlay();
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px]">
              {/* Left Side - Image */}
              <div className={`flex flex-col items-center transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                <div className="w-full max-w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center mb-4 lg:mb-8">
                  <img
                    src={slides[currentSlide].image}
                    alt="Jaju's Professional Academy"
                    className="max-w-full max-h-full object-contain transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Right Side - Content Card */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="relative">
                  <div className="w-full max-w-sm mx-auto lg:w-80 h-auto lg:h-96 bg-white-700 rounded-3xl p-6 lg:p-8 flex flex-col items-center justify-center transition-all duration-300">
                    {/* Logo */}
                    <img
                      src={Logo}
                      alt="Logo"
                      className="h-20 lg:h-26 w-auto mb-4 lg:mb-6"
                    />
                    {/* Dynamic Title */}
                    <h1 className="text-center text-lg lg:text-xl font-semibold text-gray-900 leading-snug px-2 lg:px-4">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-sm lg:text-md text-gray-500 mt-2 mx-2 lg:mx-4 text-center">
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-center mt-6 lg:mt-8'>
              <a
                href={slides[currentSlide].buttonLink}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-lg text-base lg:text-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                {slides[currentSlide].buttonText}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Responsive for all devices */}
        <button
          onClick={prevSlide}
          className={`absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white transition-all duration-300 backdrop-blur-sm rounded-full ${isMobile ? 'p-2' : 'p-3'
            }`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={isMobile ? 20 : 24} />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white transition-all duration-300 backdrop-blur-sm rounded-full ${isMobile ? 'p-2' : 'p-3'
            }`}
          aria-label="Next slide"
        >
          <ChevronRight size={isMobile ? 20 : 24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2 lg:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-black/50 hover:bg-white/70'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter - Hidden on small mobile */}
        <div className="hidden sm:block absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-black/20 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 lg:mb-6">{feature.icon}</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Programs Section */}
      <section id="programs" className="py-12 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {programs.map((program, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 transform hover:scale-105 shadow-lg 
                  ${isHovered
                      ? "bg-[#4D14C7] text-white"
                      : "bg-violet-500 text-white"
                    }`}
                >
                  <div className="flex justify-center mb-4">{program.icon}</div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-sm opacity-90">{program.description}</p>
                </div>
              );
            })}
          </div>

          <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-bold text-center lg:text-left">
            Availing a variety of affordable CA Foundation courses to help
            students boost their learnings and practices for the exam.
          </p>
        </div>
      </section>

      {/* Testimonials Section - Mobile Optimized */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Take Words from <span className="text-[#4D14C7]">Our Proud Students!</span>
            </h2>
            {/* Mobile swipe hint */}
            {isMobile && (
              <p className="text-gray-500 text-sm mt-2">
                👆 Swipe left or right to view testimonials
              </p>
            )}
          </div>

          <div className="relative">
            {/* Mobile: Single testimonial with swipe */}
            {isMobile ? (
              <div
                ref={testimonialRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="flex justify-center overflow-hidden"
              >
                <div className="w-full max-w-sm">
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-full h-64 object-contain"
                    />
                    <div className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </div>
                      <p className="text-base leading-relaxed mb-4 font-medium text-gray-700">
                        {testimonials[currentTestimonial].text}
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {testimonials[currentTestimonial].author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Desktop: All testimonials visible */
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform ${index === currentTestimonial
                        ? 'scale-110 shadow-2xl'
                        : 'scale-95 opacity-80'
                        } w-full mx-auto`}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-86 object-contain mx-auto"
                      />
                      <div className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </div>
                        <p className="text-base leading-relaxed mb-4 font-medium text-gray-700">
                          {testimonial.text}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 lg:mt-10 space-x-4">
              {/* Navigation arrows - Now visible on all devices */}
              <button
                onClick={prevTestimonial}
                className={`bg-gray-200 hover:bg-gray-300 rounded-full transition-colors ${isMobile ? 'p-2' : 'p-3'
                  }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className={`text-gray-600 ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
              </button>

              {/* Dot indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-[#4D14C7]' : 'bg-gray-300'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className={`bg-gray-200 hover:bg-gray-300 rounded-full transition-colors ${isMobile ? 'p-2' : 'p-3'
                  }`}
                aria-label="Next testimonial"
              >
                <ChevronRight className={`text-gray-600 ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-12 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">VISIT US</h2>
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 lg:w-8 h-6 lg:h-8 text-[#4D14C7] mr-3" />
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Our Location</h3>
            </div>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">Come visit our modern facilities and meet our expert faculty</p>
            <button className="bg-[#4D14C7] hover:bg-violet-700 text-white font-bold py-3 px-6 lg:px-8 rounded-lg transition-colors text-sm lg:text-base">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;