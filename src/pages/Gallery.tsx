import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { galleryMap } from "../data/photoMap";

// Gallery categories
const categories = ['All', 'Events', 'Achievements', 'Campus Life', 'Seminars'];

// Gallery images using galleryMap instead of photoMap
const galleryImages = [
    {
        id: 1,
        src: galleryMap["Seminar"],
        category: 'Seminars',
        title: 'Seminar Session',
        description: 'Students attending seminar session'
    },
    {
        id: 2,
        src: galleryMap["Seminar1"],
        category: 'Seminars',
        title: 'Guest Speaker Seminar',
        description: 'Interactive learning during seminar'
    },
    {
        id: 3,
        src: galleryMap["Seminar2"],
        category: 'Seminars',
        title: 'Career Growth Session',
        description: 'Guidance session for students'
    },
    {
        id: 4,
        src: galleryMap["Teachersday"],
        category: 'Events',
        title: 'Teachers Day Celebration',
        description: 'Celebrating our amazing teachers'
    },
    {
        id: 5,
        src: galleryMap["Teachersday1"],
        category: 'Events',
        title: 'Teachers Day Moments',
        description: 'Students showing gratitude'
    },
    {
        id: 6,
        src: galleryMap["Teachersday2"],
        category: 'Events',
        title: 'Teachers Day Function',
        description: 'Memorable celebration'
    },
    {
        id: 7,
        src: galleryMap["Teachersday3"],
        category: 'Events',
        title: 'Tribute to Teachers',
        description: 'Special appreciation event'
    },
    {
        id: 8,
        src: galleryMap["Seminar6"],
        category: 'Seminars',
        title: 'Student Interaction',
        description: 'Engaged classroom learning'
    },
    {
        id: 9,
        src: galleryMap["Seminar7"],
        category: 'Seminars',
        title: 'Student Success',
        description: 'Celebrating achievements'
    },
    {
        id: 10,
        src: galleryMap["Seminar3"],
        category: 'Seminars',
        title: 'Student Success',
        description: 'Celebrating achievements'
    },
    {
        id: 11,
        src: galleryMap["Seminar4"],
        category: 'Seminars',
        title: 'Student Success',
        description: 'Celebrating achievements'
    },
    {
        id: 12,
        src: galleryMap["Seminar5"],
        category: 'Seminars',
        title: 'Student Success',
        description: 'Celebrating achievements'
    },
];


const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Filter images based on selected category
    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    // Navigate to next image
    const nextImage = () => {
        if (selectedImage !== null) {
            const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
            const nextIndex = (currentIndex + 1) % filteredImages.length;
            setSelectedImage(filteredImages[nextIndex].id);
        }
    };

    // Navigate to previous image
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

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-violet-600 via-violet-700 to-[#4D14C7] text-white py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
                        Our Gallery
                    </h1>
                    <p className="text-sm sm:text-lg lg:text-xl text-violet-100 mb-4 sm:mb-8 max-w-3xl mx-auto">
                        Capturing moments of excellence, growth, and achievement at Jaju's Professional Academy
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white sticky top-0 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`
                                    px-6 py-2.5 rounded-full font-semibold text-sm
                                    transition-all duration-300 transform hover:scale-105
                                    ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-violet-600 to-[#4D14C7] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {filteredImages.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-600">No images found in this category</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
                                    onClick={() => setSelectedImage(image.id)}
                                >
                                    {/* Image */}
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-white font-bold text-lg mb-2">
                                            {image.title}
                                        </h3>
                                        <p className="text-white/90 text-sm">
                                            {image.description}
                                        </p>

                                        {/* Zoom Icon */}
                                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
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
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && currentImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-10"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-10"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="max-w-5xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={currentImage.src}
                            alt={currentImage.title}
                            className="w-full h-full object-contain rounded-lg"
                        />

                        {/* Image Info */}
                        <div className="bg-white/10 backdrop-blur-md rounded-b-lg p-6 mt-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-white font-bold text-xl mb-2">
                                        {currentImage.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {currentImage.description}
                                    </p>
                                </div>
                                <span className="bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {currentImage.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
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