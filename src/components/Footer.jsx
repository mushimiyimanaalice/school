import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Gallery", path: "/gallery" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

const programs = [
  "Early Years (2-4 yrs)",
  "Pre-Primary (4-5 yrs)",
  "Primary (6-11 yrs)",
  "After School Care",
  "Summer Camps",
  "Music & Arts",
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#1a2220] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light via-secondary to-primary-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <span className="font-brand text-xl font-bold">
                Little Garden <span className="text-secondary">School</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nurturing young minds in a caring, creative environment. Where every child blossoms into their best self.
            </p>
            <div className="flex gap-3">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-brand text-lg font-semibold mb-5 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary-light text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary-light rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-brand text-lg font-semibold mb-5 text-secondary">Programs</h3>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary-light rounded-full" />
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-brand text-lg font-semibold mb-5 text-secondary">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-primary-light mt-1 shrink-0" />
                KN 78 Street, Kimironko, Kigali, Rwanda
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone className="text-primary-light shrink-0" />
                +250 788 345 678
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-primary-light shrink-0" />
                info@littlegardenschool.rw
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Little Garden School. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

