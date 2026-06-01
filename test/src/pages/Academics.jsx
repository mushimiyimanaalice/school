import { motion } from "framer-motion";
import { FaBook, FaFlask, FaPaintBrush, FaMusic, FaLaptop, FaRunning, FaLanguage, FaCalculator } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const programs = [
  {
    title: "Early Years (Age 2-3)",
    desc: "A gentle introduction to school life through play-based learning, sensory activities, and social interaction in a warm, nurturing environment.",
    features: ["Sensory Play", "Story Time", "Music & Movement", "Outdoor Exploration", "Art & Craft"],
    color: "from-primary-light to-primary-dark",
  },
  {
    title: "Pre-Primary (Age 4-5)",
    desc: "Building foundational skills in literacy, numeracy, and social development through structured play and guided discovery.",
    features: ["Early Literacy", "Numeracy Skills", "Creative Arts", "Physical Education", "Social Skills"],
    color: "from-blue-400 to-primary-dark",
  },
  {
    title: "Lower Primary (Age 6-8)",
    desc: "Developing independent learners with a strong foundation in core subjects while fostering creativity and critical thinking.",
    features: ["English & Math", "Science & Social Studies", "ICT Skills", "Swahili & French", "Music & Drama"],
    color: "from-secondary to-secondary-dark",
  },
  {
    title: "Upper Primary (Age 9-11)",
    desc: "Preparing students for secondary education with advanced academics, leadership opportunities, and specialized programs.",
    features: ["Advanced Math", "STEM Projects", "Debate & Public Speaking", "Environmental Club", "Leadership Training"],
    color: "from-secondary-light to-secondary",
  },
];

const subjects = [
  { icon: FaBook, name: "English" },
  { icon: FaCalculator, name: "Mathematics" },
  { icon: FaFlask, name: "Science" },
  { icon: FaLaptop, name: "ICT" },
  { icon: FaLanguage, name: "Kiswahili" },
  { icon: FaLanguage, name: "French" },
  { icon: FaPaintBrush, name: "Creative Arts" },
  { icon: FaMusic, name: "Music" },
  { icon: FaRunning, name: "PE & Sports" },
  { icon: HiAcademicCap, name: "Social Studies" },
];

const approach = [
  {
    title: "Play-Based Learning",
    desc: "We believe children learn best through meaningful play. Our classrooms are designed to encourage exploration, discovery, and hands-on learning experiences.",
    icon: FaPaintBrush,
  },
  {
    title: "Differentiated Instruction",
    desc: "Every child learns differently. Our teachers adapt their methods to meet each student's unique needs, learning style, and pace of development.",
    icon: HiAcademicCap,
  },
  {
    title: "Technology Integration",
    desc: "Smart classrooms with interactive boards, tablets, and educational software enhance learning while teaching digital literacy from an early age.",
    icon: FaLaptop,
  },
  {
    title: "Character Education",
    desc: "We weave values education throughout our curriculum, teaching kindness, respect, responsibility, and resilience alongside academic subjects.",
    icon: FaBook,
  },
];

export default function Academics() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-secondary-dark via-secondary to-secondary-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('/drahomir-hugo-posteby-mach-OL2FkTjKD6w-unsplash.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Academics
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-purple-100 text-lg max-w-2xl mx-auto">
            A comprehensive curriculum that nurtures curious minds and builds strong foundations
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Programs" subtitle="Age-Appropriate Learning" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className={`bg-gradient-to-br ${p.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all`}>
                  <h3 className="font-brand text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <span key={f} className="px-3 py-1.5 bg-white/20 rounded-lg text-xs font-medium">{f}</span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Subjects We Offer" subtitle="Broad Curriculum" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {subjects.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.05}>
                <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary-light to-primary-dark rounded-xl flex items-center justify-center mb-3">
                    <s.icon className="text-white text-lg" />
                  </div>
                  <p className="font-medium text-gray-800 dark:text-white text-sm">{s.name}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Learning Approach" subtitle="How We Teach" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary-dark rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <a.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-brand text-lg font-bold text-gray-800 dark:text-white mb-2">{a.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-brand text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin the Journey?</h2>
            <p className="text-primary-lighter text-lg mb-8 max-w-2xl mx-auto">Give your child the gift of an exceptional education in a nurturing, stimulating environment.</p>
            <a href="/admissions" className="inline-block px-8 py-4 bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Apply Now for 2026
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

