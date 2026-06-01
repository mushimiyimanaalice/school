import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
        light ? "bg-white/20 text-white" : "bg-primary-lighter text-primary-darker"
      }`}>
        {subtitle}
      </span>
      <h2 className={`font-brand text-3xl md:text-4xl font-bold ${
        light ? "text-white" : "text-gray-800 dark:text-white"
      }`}>
        {title}
      </h2>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="w-12 h-1 bg-primary-light rounded-full" />
        <span className="w-4 h-1 bg-secondary rounded-full" />
        <span className="w-12 h-1 bg-primary-light rounded-full" />
      </div>
    </motion.div>
  );
}

