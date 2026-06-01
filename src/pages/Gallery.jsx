import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const categories = ["All", "School Events", "Classroom", "Sports & Games", "Arts & Music", "Outdoor"];

const galleryItems = [
  { id: 1, src: "/secondhero.png", title: "Annual Sports Day", category: "Sports & Games" },
  { id: 2, src: "/Screenshot%202026-06-01%20094216.png", title: "Graduation Ceremony", category: "School Events" },
  { id: 3, src: "/herosection.png", title: "Classroom Learning", category: "Classroom" },
  { id: 4, src: "/secondhero.png", title: "Music Practice", category: "Arts & Music" },
  { id: 5, src: "/Screenshot%202026-06-01%20094216.png", title: "Art Exhibition", category: "Arts & Music" },
  { id: 6, src: "/herosection.png", title: "Outdoor Play", category: "Outdoor" },
  { id: 7, src: "/secondhero.png", title: "Science Fair", category: "School Events" },
  { id: 8, src: "/Screenshot%202026-06-01%20094216.png", title: "Reading Time", category: "Classroom" },
  { id: 9, src: "/herosection.png", title: "Football Match", category: "Sports & Games" },
  { id: 10, src: "/secondhero.png", title: "Dance Performance", category: "Arts & Music" },
  { id: 11, src: "/Screenshot%202026-06-01%20094216.png", title: "Garden Exploration", category: "Outdoor" },
  { id: 12, src: "/herosection.png", title: "Cultural Day", category: "School Events" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filtered[index]);
  };

  const navigate = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filtered[newIndex]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-secondary-light via-secondary to-secondary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/martino-pietropoli-VSo5d9wlT7s-unsplash.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-purple-100 text-lg max-w-2xl mx-auto">
            Capturing precious moments from our school community
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Moments at Little Garden" subtitle="Our Gallery" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-lightest dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="relative group rounded-2xl overflow-hidden shadow-md aspect-[4/3] cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={28} />
            </button>

            {currentIndex > 0 && (
              <button
                className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              >
                <FaChevronLeft size={32} />
              </button>
            )}

            {currentIndex < filtered.length - 1 && (
              <button
                className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
              >
                <FaChevronRight size={32} />
              </button>
            )}

            <motion.img
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-6 text-white font-medium text-lg">{selectedImage.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

