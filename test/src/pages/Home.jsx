import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaLeaf, FaHeart, FaUsers, FaTrophy, FaBook, FaPaintBrush, FaMusic, FaLaptop, FaArrowRight, FaQuoteLeft, FaCalendarAlt, FaChess, FaStar } from "react-icons/fa";
import { HiAcademicCap, HiStar } from "react-icons/hi";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const heroSlides = [
  {
    title: "Welcome to Little Garden School",
    subtitle: "Where Every Child Blossoms",
    description: "Nurturing curious minds, building character, and inspiring a lifelong love for learning in a safe, joyful environment.",
    bg: "from-primary-darkest/80 to-primary-darkest/60",
  },
  {
    title: "Excellence in Early Education",
    subtitle: "Building Strong Foundations",
    description: "Our holistic approach combines academic excellence with creative arts, sports, and character development.",
    bg: "from-primary-darker/80 to-primary-darkest/60",
  },
  {
    title: "Join Our Growing Family",
    subtitle: "Admissions Open 2026",
    description: "Give your child the gift of quality education. Limited seats available for the upcoming academic year.",
    bg: "from-primary-darkest/80 to-secondary-darker/60",
  },
];

const stats = [
  { icon: FaUsers, value: "500+", label: "Students" },
  { icon: HiAcademicCap, value: "40+", label: "Teachers" },
  { icon: FaTrophy, value: "15+", label: "Years" },
  { icon: FaHeart, value: "98%", label: "Satisfaction" },
];

const whyUs = [
  { icon: FaLeaf, title: "Holistic Development", desc: "Balanced focus on academics, arts, sports, and life skills." },
  { icon: FaHeart, title: "Loving Environment", desc: "Safe, nurturing space where every child feels valued." },
  { icon: HiStar, title: "Expert Teachers", desc: "Qualified, passionate educators dedicated to your child's growth." },
  { icon: FaChess, title: "Modern Curriculum", desc: "Research-based curriculum aligned with global standards." },
  { icon: FaLaptop, title: "Smart Classrooms", desc: "Technology-integrated learning with interactive smart boards." },
  { icon: FaPaintBrush, title: "Creative Arts", desc: "Music, dance, art, and drama to spark imagination." },
];

const programs = [
  { age: "2-3 yrs", name: "Early Years", time: "Full Day", color: "from-primary-light to-primary-dark", icon: FaLeaf },
  { age: "4-5 yrs", name: "Pre-Primary", time: "Full Day", color: "from-blue-400 to-primary-dark", icon: FaBook },
  { age: "6-11 yrs", name: "Primary", time: "Full Day", color: "from-secondary to-secondary-dark", icon: HiAcademicCap },
  { age: "All Ages", name: "After School", time: "3-6 PM", color: "from-secondary-light to-secondary", icon: FaMusic },
];

const testimonials = [
  { name: "Sarah Johnson", role: "Parent of Maya (Age 6)", text: "Little Garden has been a second home for my daughter. The teachers are incredibly caring and she has grown so much in confidence.", rating: 5 },
  { name: "David Kimani", role: "Parent of Ethan (Age 4)", text: "The holistic approach to education here is remarkable. My son loves going to school every day and we've seen amazing progress.", rating: 5 },
  { name: "Grace Omondi", role: "Parent of Zara (Age 8)", text: "We transferred our daughter here and it was the best decision. The academic standards are high while keeping learning fun.", rating: 5 },
  { name: "Michael Patel", role: "Parent of Leo (Age 5)", text: "The facilities are world-class and the teachers genuinely care about each child's wellbeing and development.", rating: 5 },
];

const events = [
  { date: "Jun 15", title: "Annual Sports Day", desc: "A fun-filled day of sports, games, and friendly competition." },
  { date: "Jul 20", title: "Music & Arts Festival", desc: "Students showcase their talents in music, dance, and art." },
  { date: "Aug 10", title: "Parent-Teacher Conference", desc: "Meet with teachers to discuss your child's progress." },
  { date: "Sep 5", title: "Science Fair", desc: "Young scientists present their exciting projects and experiments." },
];

const galleryImages = [
  "/secondhero.png",
  "/herosection.png",
  "/Screenshot%202026-06-01%20094216.png",
  "/secondhero.png",
  "/herosection.png",
  "/Screenshot%202026-06-01%20094216.png",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="h-full"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className={`relative h-full bg-gradient-to-r ${slide.bg}`}>
                <div className="absolute inset-0 bg-[url('/herosection.png')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                <div className="relative h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="max-w-3xl"
                    >
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                        {slide.subtitle}
                      </span>
                      <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link to="/admissions" className="px-8 py-4 bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                          Enroll Now
                        </Link>
                        <Link to="/about" className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition-all hover:scale-105">
                          Learn More
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img src="/secondhero.png" alt="School" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                  <p className="font-brand text-3xl font-bold">15+</p>
                  <p className="text-sm text-primary-lighter">Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <span className="inline-block px-4 py-1.5 bg-primary-lighter text-primary-darker rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-brand text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Where Learning Meets <span className="text-primary">Joy</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Little Garden School, we believe every child is a unique seed with infinite potential. Founded in 2010, we have grown from a small playgroup into a thriving educational community that nurtures over 500 young minds.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our child-centered approach combines academic rigor with creative exploration, ensuring each child develops intellectually, socially, emotionally, and physically.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:gap-3">
                Discover Our Story <FaArrowRight />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-2xl" />
                  </div>
                  <p className="font-brand text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-primary-lighter text-sm font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Why Choose Us" subtitle="Our Strengths" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-5 shadow-md">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <h3 className="font-brand text-xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Programs" subtitle="What We Offer" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <ScrollReveal key={program.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${program.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all min-h-[220px] flex flex-col relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <program.icon className="text-3xl mb-4 relative z-10" />
                    <span className="text-white/80 text-sm font-medium bg-white/20 px-3 py-1 rounded-full inline-block w-fit mb-2 relative z-10">
                      {program.age}
                    </span>
                    <h3 className="font-brand text-xl font-bold mb-1 relative z-10">{program.name}</h3>
                    <p className="text-white/80 text-sm relative z-10">{program.time}</p>
                    <div className="mt-auto pt-4 relative z-10">
                      <span className="text-white/90 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <FaArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary-lightest to-primary-lightest dark:from-gray-800 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What Parents Say" subtitle="Testimonials" />
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg h-full">
                  <FaQuoteLeft className="text-primary-light dark:text-primary-darker text-3xl mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">{t.text}</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <FaStar key={j} className="text-secondary text-sm" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-sm">{t.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Upcoming Events" subtitle="Stay Connected" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary-lighter dark:bg-primary-darkest/50 text-primary-dark dark:text-primary-light font-brand font-bold text-sm px-3 py-2 rounded-xl text-center leading-tight">
                      {event.date}
                    </div>
                    <FaCalendarAlt className="text-primary-light" />
                  </div>
                  <h3 className="font-brand text-lg font-bold text-gray-800 dark:text-white mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{event.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Gallery" subtitle="Moments at School" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative group rounded-2xl overflow-hidden shadow-md aspect-[4/3] cursor-pointer"
                >
                  <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">View Gallery</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:gap-3">
              View Full Gallery <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

