import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaHandsHelping, FaLightbulb, FaShieldAlt, FaStar, FaQuoteLeft } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const timeline = [
  { year: "2010", event: "Little Garden School founded with just 12 students" },
  { year: "2013", event: "Expanded to include pre-primary classes" },
  { year: "2016", event: "Moved to our current state-of-the-art campus" },
  { year: "2019", event: "Introduced STEM and ICT programs" },
  { year: "2022", event: "Recognized as Top Early Childhood Center" },
  { year: "2026", event: "Over 500 students enrolled, 40+ teachers" },
];

const values = [
  { icon: FaHeart, title: "Nurturing Love", desc: "Every child thrives when they feel loved, safe, and valued." },
  { icon: FaLightbulb, title: "Curiosity", desc: "We inspire wonder and a lifelong love for learning." },
  { icon: FaHandsHelping, title: "Community", desc: "Building strong partnerships between school, family, and community." },
  { icon: FaShieldAlt, title: "Integrity", desc: "Teaching honesty, responsibility, and respect for others." },
  { icon: FaStar, title: "Excellence", desc: "Striving for the highest standards in everything we do." },
  { icon: FaLeaf, title: "Growth Mindset", desc: "Embracing challenges and learning from every experience." },
];

const teachers = [
  { name: "Dr. Demo Name", role: "Principal", img: "/iwaria-inc-K8g07Oaguqw-unsplash.jpg", desc: "Over 20 years in education, PhD in Early Childhood Development." },
  { name: "Mr. Demo Name", role: "Head of Academics", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop", desc: "M.Ed in Curriculum Development, passionate about innovative teaching." },
  { name: "Ms. Demo Name", role: "Early Years Coordinator", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop", desc: "Specialist in Montessori and Reggio Emilia approaches." },
  { name: "Mr. Demo Name", role: "STEM Coordinator", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", desc: "B.Sc. Computer Science, leading our technology integration." },
  { name: "Ms. Demo Name", role: "Arts Director", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop", desc: "Expert in creative arts education with 12 years experience." },
  { name: "Mr. Demo Name", role: "PE & Sports Coach", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop", desc: "Certified physical education instructor and youth sports coach." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary via-primary-dark to-primary-darkest overflow-hidden">
        <div className="absolute inset-0 bg-[url('/matthew-kirk-aGVMJk3j26U-unsplash.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            About <span className="text-secondary-light">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-lighter text-lg max-w-2xl mx-auto"
          >
            Discover our story, our values, and the passionate team behind Little Garden School
          </motion.p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-primary-lighter text-primary-darker rounded-full text-sm font-medium">Our History</span>
                <h2 className="font-brand text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                  A Journey of <span className="text-primary">Growth</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Little Garden School began in 2010 with a simple vision: to create a nurturing environment where every child could discover their unique potential. What started as a small playgroup of 12 children in a rented space has blossomed into one of the region's most respected early childhood education centers.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Today, our purpose-built campus serves over 500 students from early years through primary, with state-of-the-art facilities, a dedicated team of 40+ educators, and a curriculum that balances academic excellence with creative exploration.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img src="/matthew-kirk-aGVMJk3j26U-unsplash.jpg" alt="School history" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
                <div className="absolute -bottom-4 -left-4 bg-secondary text-gray-900 p-5 rounded-2xl shadow-xl">
                  <p className="font-brand text-2xl font-bold">15+ Years</p>
                  <p className="text-sm">of Educational Excellence</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-primary-lightest to-primary-lighter dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-primary-light dark:border-gray-700">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <h3 className="font-brand text-xl font-bold text-gray-800 dark:text-white mb-3">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">To provide a safe, nurturing, and stimulating environment where each child develops intellectually, socially, emotionally, and physically, fostering a lifelong love for learning and a strong foundation for future success.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-blue-200 dark:border-gray-700">
                <div className="w-14 h-14 bg-primary-dark rounded-2xl flex items-center justify-center mb-4">
                  <FaStar className="text-white text-xl" />
                </div>
                <h3 className="font-brand text-xl font-bold text-gray-800 dark:text-white mb-3">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">To be a leading center of early childhood excellence, recognized for nurturing confident, compassionate, and creative individuals who are well-prepared to thrive in a rapidly changing world.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Journey" subtitle="Milestones" />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-primary-light dark:bg-primary-darker hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className={`bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md inline-block max-w-md ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                        <span className="font-brand text-primary font-bold text-lg">{item.year}</span>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{item.event}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-gray-800 shadow shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Values" subtitle="What We Stand For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary-dark rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="text-white text-lg" />
                  </div>
                  <h3 className="font-brand text-lg font-bold text-gray-800 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <ScrollReveal>
              <div className="lg:col-span-1">
                <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl">
                  <img src="/iwaria-inc-K8g07Oaguqw-unsplash.jpg" alt="Principal" className="w-full h-full object-cover blur-sm" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <FaQuoteLeft className="text-white/30 text-5xl mb-4" />
              <h2 className="font-brand text-3xl font-bold text-white mb-6">A Message from Our Principal</h2>
              <p className="text-primary-lighter leading-relaxed mb-6">
                Welcome to Little Garden School, where every child's journey begins with wonder and grows with purpose. As an educator with over two decades of experience, I have always believed that the early years are the most crucial in shaping a child's future. Our dedicated team works tirelessly to create an environment where children feel safe, valued, and inspired to explore their world.
              </p>
              <p className="text-primary-lighter leading-relaxed mb-8">
                We partner closely with parents to ensure each child receives the individualized attention and encouragement they need to flourish. I invite you to visit our campus and experience the warmth and vibrancy of our school community firsthand.
              </p>
              <div>
                <p className="font-brand text-white font-bold text-lg">Dr. Jane Mwangi</p>
                <p className="text-primary-light text-sm">Principal, Little Garden School</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Meet Our Team" subtitle="Dedicated Educators" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary-lighter dark:border-primary-darkest">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover blur-sm" />
                  </div>
                  <h3 className="font-brand text-lg font-bold text-gray-800 dark:text-white">{t.name}</h3>
                  <span className="inline-block px-3 py-1 bg-primary-lighter dark:bg-primary-darkest/50 text-primary-darker dark:text-primary-light text-xs font-medium rounded-full mb-3">{t.role}</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{t.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

