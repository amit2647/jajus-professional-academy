import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { galleryMap } from "../data/photoMap";

import CampusLifeVideo from "../assets/gallery/Campus_life.mp4";
import CampusLifePoster from "../assets/gallery/campus_life_thumbnail.webp";

// add 'Achievements' 
const categories = ['All', 'Events', 'Campus Life', 'Seminars'];

const galleryImages = [
    {
        id: 1,
        type: 'image',
        src: galleryMap["Seminar"],
        category: 'Seminars',
        title: 'Seminar Session',
        description: 'Students attending seminar session'
    },
    {
        id: 2,
        type: 'image',
        src: galleryMap["Seminar1"],
        category: 'Seminars',
        title: 'Guest Speaker Seminar',
        description: 'Interactive learning during seminar'
    },
    {
        id: 3,
        type: 'image',
        src: galleryMap["Seminar2"],
        category: 'Seminars',
        title: 'Career Growth Session',
        description: 'Guidance session for students'
    },

    // 🎥 YOUR VIDEO (poster now applied)
    {
        id: 100,
        type: 'video',
        src: CampusLifeVideo,
        poster: CampusLifePoster,
        category: 'Campus Life',
        title: 'Campus Life Moments',
        description: 'A glimpse of our vibrant student community'
    },

    {
        id: 4,
        type: 'image',
        src: galleryMap["Teachersday"],
        category: 'Events',
        title: 'Teachers Day Celebration',
        description: 'Celebrating our amazing teachers'
    },
    {
        id: 5,
        type: 'image',
        src: galleryMap["Teachersday1"],
        category: 'Events',
        title: 'Teachers Day Moments',
        description: 'Students showing gratitude'
    },
    {
        id: 6,
        type: 'image',
        src: galleryMap["Teachersday2"],
        category: 'Events',
        title: 'Teachers Day Function',
        description: 'Memorable celebration'
    },
    {
        id: 7,
        type: 'image',
        src: galleryMap["Teachersday3"],
        category: 'Events',
        title: 'Tribute to Teachers',
        description: 'Special appreciation event'
    },
    {
        id: 8,
        type: 'image',
        src: galleryMap["Seminar6"],
        category: 'Seminars',
        title: 'Student Interaction',
        description: 'Engaged classroom learning'
    },
    {
        id: 9,
        type: 'image',
        src: galleryMap["Seminar7"],
        category: 'Seminars',
        title: 'Student Success',
        description: 'Celebrating achievements'
    },
    {
        id: 10,
        type: 'image',
        src: galleryMap["Seminar3"],
        category: 'Seminars',
        title: 'Student Success',
        description: 'Celebrating achievements'
    },
    {
        id: 11,
        type: 'image',
        src: galleryMap["Seminar4"],
        category: 'Seminars',
        title: 'Student Success',
        description: 'Celebrating achievements'
    },
    {
        id: 12,
        type: 'image',
        src: galleryMap["Seminar5"],
        category: 'Seminars',
        title: 'Student Success',
        description: 'Celebrating achievements'
    },
];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages =
        selectedCategory === 'All'
            ? galleryImages
            : galleryImages.filter(img => img.category === selectedCategory);

    const nextImage = () => {
        if (selectedImage !== null) {
            const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
            const nextIndex = (currentIndex + 1) % filteredImages.length;
            setSelectedImage(filteredImages[nextIndex].id);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
            const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
            setSelectedImage(filteredImages[prevIndex].id);
        }
    };

    const currentImage = filteredImages.find(img => img.id === selectedImage);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-gradient-to-br from-violet-600 via-violet-700 to-[#4D14C7] text-white py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Gallery</h1>
                    <p className="text-lg text-violet-100 max-w-3xl mx-auto">
                        Capturing moments of excellence, growth, and achievement at Jaju’s Professional Academy
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-white sticky top-0 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`
                  px-6 py-2.5 rounded-full font-semibold text-sm transition-all
                  ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-violet-600 to-[#4D14C7] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map(image => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-white"
                                onClick={() => setSelectedImage(image.id)}
                            >
                                <div className="aspect-[4/3] overflow-hidden">

                                    {/* IMAGE OR VIDEO PREVIEW */}
                                    {image.type === 'video' ? (
                                        <video
                                            src={image.src}
                                            poster={image.poster}
                                            className="w-full h-full object-cover"
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    )}
                                </div>

                                {/* ▶️ Play Icon Overlay */}
                                {image.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="bg-black/60 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                                    <p className="text-white/90 text-sm">{image.description}</p>
                                    <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full">
                                        <ZoomIn className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {image.category}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LIGHTBOX — portrait safe */}
            {selectedImage && currentImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close */}
                    <button
                        className="absolute top-4 right-4 bg-white/10 p-3 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Prev */}
                    <button
                        className="absolute left-4 bg-white/10 p-3 rounded-full"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Next */}
                    <button
                        className="absolute right-4 bg-white/10 p-3 rounded-full"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Media Wrapper */}
                    <div
                        className="max-w-[90vw] max-h-[90vh] mx-auto flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {currentImage.type === 'video' ? (
                            <video
                                src={currentImage.src}
                                poster={currentImage.poster}
                                controls
                                autoPlay
                                className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg"
                            />
                        ) : (
                            <img
                                src={currentImage.src}
                                alt={currentImage.title}
                                className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg"
                            />
                        )}
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="py-12 sm:py-20 text-violet-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Ready to Join Us?
                    </h2>
                    <p className="text-lg text-violet-600 mb-8">
                        Be part of our success story and create your own memorable moments
                    </p>
                    <Link
                        to="/admission"
                        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Gallery;
