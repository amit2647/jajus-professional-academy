import { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, BookOpen, Users, Award, Star, Trophy, Target, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import { photoMap } from "../data/photoMap";
import Footer from '../components/Footer';

interface Student {
  name: string;
  photo: string;
  description?: string;
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
      title: "CS-EET",
      description: "Comprehensive preparation for the CS Executive Entrance Test",
      icon: <Sparkles className="w-12 h-12 text-white-500" />,
      features: ["Expert Faculty", "Study Materials", "Mock Tests", "Doubt Sessions"],
      stats: { students: "300+", success: "80%" }
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

  const photoFiles = import.meta.glob('../assets/photos/*.{jpg,jpeg,png}', { eager: true, import: 'default' });

  // Match student names to filenames
  Object.entries(photoFiles).forEach(([path, module]) => {
    const fileName = path.split('/').pop() as string;
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

  // CS-EET Toppers
  const csEETToppers = [
    "Karthiki Kulkarni", "Khushi Karwa", "Mithali Chudiwal", "Pratiksha Lonkar", "Sanskruti Rathi", "Swanandi Deshmukh", "Bhoomi Malani", "Bhavika Mutha"
  ]

  // AIR Rank holders
  const airRanks = [
    { name: "Rajan Kabra", description: "AIR 1, Highest Marks in CA foundation july 2021" },
    { name: "Tanisha Boramanikar", description: "1st in Maharashtra , HSC Maharastra Board May 2024" },
    { name: "Karan Choudhari", description: "AIR 48, CA Inter May 2024" }
  ];

  // Marathwada Toppers
  const marathwadaToppers = [
    { name: "Bhakti Mundada", description: "1st in Marathwada (Jan-24)" },
    { name: "Rishee Sethi", description: "1st in Chh. Sambhajinagar (June-24)" },
    { name: "Anushka Bora", description: "2nd in Marathwada (June-24)" },
    { name: "Bhoomi Malani", description: "1st in Marathwada (Dec-23)" },
    { name: "Sarvesh Kabra", description: "1st in Marathwada (June-23)" },
    { name: "Yash Agrawal", description: "1st in Marathwada (Dec-22)" },
    { name: "Naman Agrawal", description: "1st in Marathwada (Nov-21)" },
    { name: "Rajan Kabra", description: "All India Rank 1 (July-21)" },
    { name: "Ritika Chandak", description: "1st in Marathwada (Jan-21)" },
    { name: "Rudransh Sharma", description: "2nd in Chh. Sambhajinagar (Dec-20)" },
    { name: "Aakansha Harne", description: "1st in Marathwada (AIR 44) (June-19)" }
  ];

  // Result categories with student objects
  const resultCategories: { id: string; title: string; subtitle: string; students: Student[]; stats: { total: string; achievement: string } }[] = [
    {
      id: 'air-ranks',
      title: 'AIR Ranks',
      subtitle: 'All India Rank holders in CA Exams',
      students: airRanks.map(s => ({
        name: s.name,
        description: s.description,
        photo: photoMap[s.name] || 'default.jpg'
      })),
      stats: { total: '3', achievement: 'Top AIR Ranks' }
    },
    {
      id: 'marathwada-toppers',
      title: 'Marathwada Toppers',
      subtitle: 'Top performers from the Marathwada region',
      students: marathwadaToppers.map(s => ({
        name: s.name,
        description: s.description,
        photo: photoMap[s.name] || 'default.jpg'
      })),
      stats: { total: '11', achievement: 'Top Marathwada Toppers' }
    },
    {
      id: 'ca-foundation',
      title: 'CA Foundation Toppers',
      subtitle: 'JPA has toppers in 9 out of last 13 CA Foundation Exams',
      students: caFoundationToppers.map(name => ({ name, photo: photoMap[name] || 'default.jpg' })),
      stats: { total: '450+', achievement: 'Qualified Students' }
    },
    {
      id: 'ca-intermediate',
      title: 'CA Intermediate Excellence',
      subtitle: 'Outstanding performers in CA Intermediate examinations',
      students: caInterToppers.map(name => ({ name, photo: photoMap[name] || 'default.jpg' })),
      stats: { total: '280+', achievement: 'Qualified Students' }
    },
    {
      id: 'ca-final',
      title: 'CA Final Achievers',
      subtitle: 'Students who conquered the final milestone',
      students: caFinalToppers.map(name => ({ name, photo: photoMap[name] || 'default.jpg' })),
      stats: { total: '150+', achievement: 'Qualified Students' }
    },
    {
      id: 'cs-eet',
      title: 'CS-EET Toppers',
      subtitle: 'Exceptional achievers in the CS Executive Entrance Test',
      students: csEETToppers.map(name => ({ name, photo: photoMap[name] || 'default.jpg' })),
      stats: { total: '300+', achievement: 'Qualified Students' }
    }
  ];

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

  const goToCategory = (index: number) => {
    setCurrentCategory(index);
    resetAutoRotation();
  };

  const currentResult = resultCategories[currentCategory];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" style={{ fontFamily: '"Inter", "Roboto", sans-serif' }}>
      <Navbar />

      {/* Hero Section - Programs Showcase */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-violet-700 to-[#4D14C7] text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjYjlkNGZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTAgMGg2MHYxSDB6TTYwIDYwaDBWMmg2MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        {/* Increased max-width and adjusted padding */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-4 xl:px-6 relative z-10">
          <div className={`text-center mb-12 transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-white mr-2" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Our Programs</h1>
              <Sparkles className="w-8 h-8 text-white ml-2" />
            </div>
            <p className="text-lg lg:text-xl mt-4">
              Excel in Your CA Journey with Expert Guidance
            </p>
          </div>

          <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="relative bg-white/10 rounded-3xl shadow-lg border border-white/20 overflow-hidden">
              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="inline-block bg-white/20 rounded-full p-4">
                      {programs[currentSlide].icon}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold">{programs[currentSlide].title}</h2>
                    <p className="text-lg lg:text-xl">{programs[currentSlide].description}</p>
                    <a
                      href="/admission#application-form"
                      className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      aria-label="Enroll in our programs"
                    >
                      Enroll Now
                    </a>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl text-yellow-300 font-bold mb-6">Features</h3>
                    {programs[currentSlide].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white/20 rounded-xl p-4 flex items-center space-x-4 transform transition-all duration-300 hover:bg-white/30 hover:scale-105"
                      >
                        <div className="bg-white/30 rounded-full p-2">
                          <Star className="w-5 h-5 text-yellow-200/90" />
                        </div>
                        <span className="text-lg font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all shadow-sm"
              aria-label="Previous program"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/40'}`}
                  aria-label={`Go to program ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all shadow-sm"
              aria-label="Next program"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* All Programs Grid */}
      <section className="py-16 lg:py-20 bg-white">
        {/* Increased max-width and adjusted padding */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-4 xl:px-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-gray-900">
            Explore All <span className="text-violet-600">Programs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-violet-50 to-indigo-50 overflow-hidden">
        {/* Increased max-width and adjusted padding */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-4 xl:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-10 h-10 text-violet-500 mr-3 animate-pulse" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">Our Stellar Results</h2>
              <Trophy className="w-10 h-10 text-violet-500 ml-3 animate-pulse" />
            </div>
            <p className="text-lg lg:text-xl text-gray-700 mt-2">Celebrating Success Stories Across All Programs</p>
          </div>

          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative"
          >
            <div className="mb-8">
              <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-3xl p-8 lg:p-12 shadow-lg border border-violet-200 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">{currentResult.title}</h3>
                      <p className="text-lg lg:text-xl text-gray-700">{currentResult.subtitle}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="bg-violet-50 rounded-2xl p-6 text-center min-w-[140px]">
                        <div className="text-4xl font-bold text-gray-900 mt-1">{currentResult.stats.achievement}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg">
              <div
                className={`grid ${isMobile
                    ? 'grid-cols-2 gap-4'
                    : currentResult.id === 'air-ranks' || currentResult.id === 'marathwada-toppers'
                      ? 'grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-10 justify-center'
                      : 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6'
                  } ${currentResult.id === 'air-ranks' || currentResult.id === 'marathwada-toppers' ? 'justify-items-center' : ''}`}
              >
                {currentResult.students.map((student, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
                  >
                    {/* Photo */}
                    <div
                      className={`rounded-xl overflow-hidden shadow-md border border-violet-200 ${currentResult.id === 'air-ranks' || currentResult.id === 'marathwada-toppers'
                          ? 'w-28 h-28 sm:w-32 sm:h-32'
                          : 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28'
                        }`}
                    >
                      <img
                        src={photoMap[student.name] ?? photoMap["default.jpg"]}
                        alt={student.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Name */}
                    <p
                      className={`mt-3 font-bold text-gray-900 leading-snug ${currentResult.id === 'air-ranks' || currentResult.id === 'marathwada-toppers'
                          ? 'text-lg sm:text-xl'
                          : 'text-sm'
                        }`}
                    >
                      {student.name}
                    </p>

                    {/* Description */}
                    {(currentResult.id === 'air-ranks' || currentResult.id === 'marathwada-toppers') && student.description && (
                      <div className="flex items-center justify-center mt-1 gap-1">
                        <Trophy
                          className={`${currentResult.id === 'air-ranks'
                              ? 'text-amber-500'
                              : 'text-amber-500'
                            } w-4 h-4 sm:w-5 sm:h-5 shrink-0`}
                        />
                        <span className="text-[14px] sm:text-[15px] text-violet-700 font-semibold leading-tight tracking-wide">
                          {student.description}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-12 flex flex-wrap justify-center gap-2 lg:gap-3">
            {resultCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => goToCategory(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${currentCategory === index ? 'bg-violet-600 text-white scale-110 shadow-lg' : 'bg-violet-100 text-gray-700 hover:bg-violet-200'
                  }`}
                aria-label={`Go to ${category.title}`}
              >
                {category.title.split(' ').slice(0, isMobile ? 2 : 3).join(' ')}
              </button>
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
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 lg:w-8 h-6 lg:h-8 text-violet-600 mr-3" />
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Our Location</h3>
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