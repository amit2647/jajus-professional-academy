import { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, BookOpen, Users, Award, Star, Trophy, Target, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import { photoMap } from "../data/photoMap";

// Import your actual components and images
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Logo from '../assets/nav_logo.png';

interface Student {
  name: string;
  photo: string;
}

const Home = () => {
  const [, setCurrentTestimonial] = useState(0);
  const [hoveredProgramIndex, setHoveredProgramIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [currentCategory, setCurrentCategory] = useState(0);

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

  // Programs data for hero section
  const programs = [
    {
      title: "CA Foundation",
      description: "Build a strong foundation for your CA journey with comprehensive courses",
      icon: <BookOpen className="w-12 h-12" />,
      features: ["Expert Faculty", "Study Materials", "Mock Tests", "Doubt Sessions"],
      color: "from-purple-600 to-blue-600",
      stats: { students: "500+", success: "85%" }
    },
    {
      title: "CA Intermediate",
      description: "Advanced preparation with industry experts and practical approach",
      icon: <Users className="w-12 h-12" />,
      features: ["Live Classes", "Case Studies", "Revision Classes", "Personal Mentoring"],
      color: "from-blue-600 to-cyan-600",
      stats: { students: "300+", success: "78%" }
    },
    {
      title: "CA Final",
      description: "Master the final stage with strategic guidance and exam techniques",
      icon: <Award className="w-12 h-12" />,
      features: ["Strategic Planning", "Advanced Topics", "Interview Prep", "Career Guidance"],
      color: "from-cyan-600 to-teal-600",
      stats: { students: "200+", success: "72%" }
    },
    {
      title: "XI & XII Commerce",
      description: "Strong commerce foundation for school students aspiring for CA",
      icon: <Target className="w-12 h-12" />,
      features: ["School Curriculum", "CA Foundation Prep", "Regular Assessments", "Career Counseling"],
      color: "from-teal-600 to-green-600",
      stats: { students: "400+", success: "90%" }
    }
  ];

  // Results data for testimonial section
  const results = [
    {
      category: "AIR Ranks",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      achievements: [
        { rank: "AIR 15", name: "Rajesh Kumar", exam: "CA Final" },
        { rank: "AIR 23", name: "Priya Sharma", exam: "CA Inter" },
        { rank: "AIR 47", name: "Amit Patel", exam: "CA Foundation" }
      ]
    },
    {
      category: "CA Foundation",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      achievements: [
        { text: "95% Pass Rate", subtext: "May 2024" },
        { text: "450+ Students", subtext: "Qualified" },
        { text: "85+ Distinctions", subtext: "This Year" }
      ]
    },
    {
      category: "CA Intermediate",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
      achievements: [
        { text: "78% Pass Rate", subtext: "Nov 2024" },
        { text: "280+ Students", subtext: "Qualified" },
        { text: "45+ Distinctions", subtext: "Both Groups" }
      ]
    },
    {
      category: "CA Final",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
      achievements: [
        { text: "72% Pass Rate", subtext: "May 2024" },
        { text: "150+ Students", subtext: "Qualified" },
        { text: "25+ Distinctions", subtext: "Both Groups" }
      ]
    },
    {
      category: "Maharashtra Toppers",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      achievements: [
        { rank: "State Rank 3", name: "Sneha Deshmukh", exam: "CA Foundation" },
        { rank: "State Rank 7", name: "Aditya Joshi", exam: "CA Inter" },
        { rank: "State Rank 12", name: "Kavita Rane", exam: "CA Final" }
      ]
    },
    {
      category: "Marathwada Toppers",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
      achievements: [
        { rank: "Region Rank 1", name: "Rohit Pawar", exam: "CA Foundation" },
        { rank: "Region Rank 2", name: "Pooja Bhosale", exam: "CA Inter" },
        { rank: "Region Rank 4", name: "Vikas Shinde", exam: "CA Final" }
      ]
    },
    {
      category: "CS EET Results",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      achievements: [
        { text: "88% Pass Rate", subtext: "June 2024" },
        { text: "120+ Students", subtext: "Qualified" },
        { text: "Top 10 Ranks", subtext: "Regional Level" }
      ]
    },
    {
      category: "Overall Excellence",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      achievements: [
        { text: "1500+ Students", subtext: "Enrolled" },
        { text: "15+ Years", subtext: "Experience" },
        { text: "95% Satisfaction", subtext: "Rate" }
      ]
    }
  ];

  // Touch handlers
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

    if (isLeftSwipe) nextTestimonial();
    if (isRightSwipe) prevTestimonial();
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % results.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + results.length) % results.length);
  };

  const resetAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 5000);
  }, [programs.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
    resetAutoPlay();
  }, [resetAutoPlay, programs.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
    resetAutoPlay();
  }, [resetAutoPlay, programs.length]);

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

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const photoFiles = import.meta.glob('../assets/photos/*.{jpg,jpeg,png}', { eager: true, import: 'default' });


  // Match student names to filenames
  Object.entries(photoFiles).forEach(([path, module]) => {
    const fileName = path.split('/').pop() as string; // get 'Bhakti Mundada.jpg'
    photoMap[fileName] = module as string;
  });

  // CA Foundation Toppers
  const caFoundationToppers = [
    "Bhakti Mundada", "Rishee Sethi", "Anushka Bora", "Bhoomi Malani", "Sarvesh Kabra",
    "Yash Agrawal", "Naman Agrawal", "Rajan Kabra", "Ritika Chandak", "Rudransh Sharma",
    "Aakansha Harne", "Pranav Ladda", "Aditi Ashar", "Asawari Rajvaidya", "Rohit Kulkarni",
    "Vaishnavi Soni", "Varad Dagdiya", "Ashiwani Deshmukh", "Yash Devidan", "Madhura Navandar",
    "Devika Chuttat", "Harsh Shahuji", "Gayati Katkar", "Sartak Kolpe", "Gauri Jaikte",
    "Succhit Jajoo", "Yash Kasliwal", "Krishna Nimodiya", "Rehan Khan", "Anagha Joshi",
    "Gaurav Malpani", "Kirti Chordiya", "Pawan Girhe", "Sanskar Shauji", "Aditi Dhoot",
    "Krish Jaju", "Aryan Rajput", "Mayur Malu", "Shreya Pahade", "Ishwari Darak",
    "Poorva Patil", "Tanisha Boramanikar", "Nikita Bhutada", "Aditya Loha", "Sakshi Pati",
    "Atharva Kulkarni", "Manav Accha", "Anjali Dahiyda", "Ritika Mandhani", "Khushi Bhutada",
    "Pradhymanu Bampalwkar", "Krushna Barjage", "Nirmit Malu", "Shreya Ghatge", "Yogesh Dhangre",
    "Rushikesh Jaju", "Amit Pawar", "Siddhi Runwal", "Tejas Sawi", "Sakshii Morwankar",
    "Om Ajmera", "Tanmayee Bhosale", "Shailesh Jagirdhar", "Devshish Deshpande"
  ];

  // CA Intermediate Toppers
  const caInterToppers = [
    "Karan Choudhari", "Aditya Mundada", "Akshay Rathod", "Aditya Ghuge", "Bhoomi Malani",
    "Pawan Narale", "Payal Ashitikar", "Ritika Sonwane", "Riya Chandak", "Sanjot Thete",
    "Tejaswani Pawar", "Kalyani Sethi", "Pritham Sharma", "Lalit Lahoti", "Namrata Thorle",
    "Krish Nathani", "Monika Nirsahe", "Piyush Borale", "Udyanraje Pawar", "Sanker Barwal",
    "Suraj Gawai", "Aarya Patil", "Omkar Dhotre", "Atharva Salunke", "Kanak Makhaji"
  ];

  // CA Final Toppers
  const caFinalToppers = [
    "Pranav Ladda", "Aditi Ashar", "Asawari Rajvaidya", "Rohit Kulkarni",
    "Vaishnavi Soni", "Varad Dagdiya", "Ashiwani Deshmukh", "Yash Devidan",
    "Madhura Navandar", "Devika Chuttat", "Harsh Shahuji", "Gayati Katkar",
    "Sartak Kolpe", "Gauri Jaikte", "Succhit Jajoo", "Yash Kasliwal", "Krishna Nimodiya",
    "Rehan Khan", "Anagha Joshi", "Gaurav Malpani", "Kirti Chordiya",
    "Pawan Girhe", "Sanskar Shauji", "Aditi Dhoot"
  ];



  // Result categories with student objects
  const resultCategories: { id: string; title: string; subtitle: string; bgGradient: string; students: Student[]; stats: { total: string; achievement: string } }[] = [
    {
      id: 'ca-foundation',
      title: 'CA Foundation Toppers',
      subtitle: 'JPA has toppers in 9 out of last 13 CA Foundation Exams',
      bgGradient: 'from-blue-500 via-purple-500 to-pink-500',
      students: caFoundationToppers.map(name => ({ name, photo: photoMap[name] || 'default.jpg' })),
      stats: { total: '450+', achievement: 'Qualified Students' }
    },
    {
      id: 'ca-intermediate',
      title: 'CA Intermediate Excellence',
      subtitle: 'Outstanding performers in CA Intermediate examinations',
      bgGradient: 'from-green-400 via-teal-500 to-blue-500',
      students: caInterToppers.map(name => ({ name, photo: photoMap[name] || 'default.jpg' })),
      stats: { total: '280+', achievement: 'Qualified Students' }
    },
    {
      id: 'ca-final',
      title: 'CA Final Achievers',
      subtitle: 'Students who conquered the final milestone',
      bgGradient: 'from-purple-500 via-indigo-500 to-blue-600',
      students: caFinalToppers.map(name => ({ name, photo: photoMap[name] || 'default.jpg' })),
      stats: { total: '150+', achievement: 'Qualified Students' }
    }
  ];

  // useEffect(() => {
  //   resultCategories.forEach(category => {
  //     console.log(`\nCategory: ${category.title}`);
  //     category.students.forEach(student => {
  //       if (photoMap[student.name]) {
  //         console.log(`✅ ${student.name} → ${photoMap[student.name]}`);
  //       } else {
  //         console.log(`❌ ${student.name} → MISSING, using default.jpg`);
  //       }
  //     });
  //   });
  // }, []); // empty dependency array ensures it runs only once

  // Auto-rotation
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % resultCategories.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resultCategories.length]);

  const resetAutoRotation = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % resultCategories.length);
    }, 6000);
  };

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % resultCategories.length);
    resetAutoRotation();
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + resultCategories.length) % resultCategories.length);
    resetAutoRotation();
  };

  const goToCategory = (index: number) => {
    setCurrentCategory(index);
    resetAutoRotation();
  };


  const currentResult = resultCategories[currentCategory];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Replace with <Navbar /> */}
      <Navbar />

      {/* Hero Section - Programs Showcase */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI4YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyOGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          {/* Header */}
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-2" />
              <h1 className="text-4xl lg:text-6xl font-bold">Our Programs</h1>
              <Sparkles className="w-8 h-8 text-yellow-400 ml-2" />
            </div>
            <p className="text-xl lg:text-2xl text-purple-200 mt-4">
              Excel in Your CA Journey with Expert Guidance
            </p>
          </div>

          {/* Program Card */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className={`relative bg-gradient-to-br ${programs[currentSlide].color} rounded-3xl shadow-2xl overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Content */}
                  <div className="space-y-6">
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4">
                      {programs[currentSlide].icon}
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold">
                      {programs[currentSlide].title}
                    </h2>

                    <p className="text-lg lg:text-xl text-white/90">
                      {programs[currentSlide].description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-8 pt-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex-1">
                        <div className="text-3xl font-bold">{programs[currentSlide].stats.students}</div>
                        <div className="text-sm text-white/80">Students Enrolled</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex-1">
                        <div className="text-3xl font-bold">{programs[currentSlide].stats.success}</div>
                        <div className="text-sm text-white/80">Success Rate</div>
                      </div>
                    </div>

                    <a
                      href="/admission#application-form"
                      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Enroll Now
                    </a>
                  </div>

                  {/* Right Side - Features */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
                    {programs[currentSlide].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4 transform transition-all duration-300 hover:bg-white/20 hover:scale-105"
                      >
                        <div className="bg-white/20 rounded-full p-2">
                          <Star className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center space-x-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
              aria-label="Previous program"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-2">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-yellow-400 w-8' : 'bg-white/50'
                    }`}
                  aria-label={`Go to program ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
              aria-label="Next program"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* All Programs Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Explore All <span className="text-purple-600">Programs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProgramIndex(index)}
                onMouseLeave={() => setHoveredProgramIndex(null)}
                className={`rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer ${hoveredProgramIndex === index
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white'
                  : 'bg-gradient-to-br from-purple-50 to-blue-50 text-gray-900'
                  }`}
              >
                <div className="flex justify-center mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className={`text-sm ${hoveredProgramIndex === index ? 'text-white/90' : 'text-gray-600'}`}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-10 h-10 text-yellow-400 mr-3 animate-pulse" />
              <h2 className="text-3xl lg:text-5xl font-bold">Our Stellar Results</h2>
              <Trophy className="w-10 h-10 text-yellow-400 ml-3 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 mt-2">Celebrating Success Stories Across All Programs</p>
          </div>

          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative"
          >
            {/* Category Card */}
            <div className="mb-8">
              <div className={`bg-gradient-to-r ${currentResult.bgGradient} rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="text-center lg:text-left">
                      <h3 className="text-3xl lg:text-4xl font-bold mb-2">{currentResult.title}</h3>
                      <p className="text-lg lg:text-xl text-white/90">{currentResult.subtitle}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[140px]">
                        <div className="text-4xl font-bold">{currentResult.stats.total}</div>
                        <div className="text-sm text-white/90 mt-1">{currentResult.stats.achievement}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Students Grid */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl">
              <div className={`grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4'}`}>
                {currentResult.students.map((student, idx) => (
                  <div key={idx} className="group relative aspect-square rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:z-10">
                    <img
                      src={photoMap[student.name] ?? photoMap["default.jpg"]} // Use mapped photo
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-end justify-center p-2">
                      <p className="text-white text-sm font-semibold text-center">{student.name}</p>
                    </div>
                  </div>
                ))}
              </div>


              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View All Results
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevCategory} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 lg:p-4 transition-all duration-300 shadow-xl z-20">
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
            <button onClick={nextCategory} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 lg:p-4 transition-all duration-300 shadow-xl z-20">
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Category Indicators */}
          <div className="mt-8 lg:mt-12 flex flex-wrap justify-center gap-2 lg:gap-3">
            {resultCategories.map((category, index) => (
              <button key={category.id} onClick={() => goToCategory(index)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${currentCategory === index ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                {category.title.split(' ').slice(0, isMobile ? 2 : 3).join(' ')}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 rounded-full" style={{ width: `${((currentCategory + 1) / resultCategories.length) * 100}%` }} />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>Category {currentCategory + 1} of {resultCategories.length}</span>
              <span>Auto-rotating every 6 seconds</span>
            </div>
          </div>
        </div>
      </section>


      {/* Visit Us Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">VISIT US</h2>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 lg:w-8 h-6 lg:h-8 text-purple-600 mr-3" />
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Our Location</h3>
            </div>
            <p className="text-gray-600 mb-6 text-sm lg:text-base">
              Come visit our modern facilities and meet our expert faculty
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 lg:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm lg:text-base shadow-lg">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Replace with <Footer /> */}
      <div className="bg-gray-900 text-white p-8 text-center">
        <p>&copy; 2024 Jaju's Professional Academy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;