import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const contactInfo = [
  { icon: FaMapMarkerAlt, title: "Visit Us", details: ["KN 78 Street", "Kimironko, Kigali", "Rwanda"] },
  { icon: FaPhone, title: "Call Us", details: ["+250 788 345 678", "+250 788 123 456"] },
  { icon: FaEnvelope, title: "Email Us", details: ["info@littlegardenschool.rw", "admissions@littlegardenschool.rw"] },
  { icon: FaClock, title: "Working Hours", details: ["Mon - Fri: 7:30 AM - 5:00 PM", "Sat: 8:00 AM - 1:00 PM"] },
];

const socialLinks = [
  { icon: FaFacebook, name: "Facebook", color: "hover:bg-primary-dark" },
  { icon: FaTwitter, name: "Twitter", color: "hover:bg-primary" },
  { icon: FaInstagram, name: "Instagram", color: "hover:bg-secondary" },
  { icon: FaYoutube, name: "YouTube", color: "hover:bg-secondary-dark" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact <span className="text-secondary-light">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-lighter text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us today.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center border border-gray-100 dark:border-gray-700">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-4 shadow-md">
                    <info.icon className="text-white text-xl" />
                  </div>
                  <h3 className="font-brand text-lg font-bold text-gray-800 dark:text-white mb-2">{info.title}</h3>
                  {info.details.map((d, j) => (
                    <p key={j} className="text-gray-500 dark:text-gray-400 text-sm">{d}</p>
                  ))}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <ScrollReveal>
              <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853782876!2d36.68219471933567!3d-1.302861058730972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1690000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                  className="grayscale-[0.3] hover:grayscale-0 transition-all"
                />
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <h2 className="font-brand text-2xl font-bold text-gray-800 dark:text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">We'll get back to you within 24 hours.</p>

                {submitted && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-primary-lightest dark:bg-primary-darkest/30 border border-primary-light dark:border-primary-dark text-primary-darker dark:text-primary-light p-4 rounded-xl mb-6 flex items-center gap-3 text-sm">
                    <FaCheckCircle className="text-primary shrink-0" />
                    Message sent successfully! We'll respond shortly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all`} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email *" className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all`} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all" />
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all" />
                  </div>
                  <div>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Your Message *" className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all resize-none`} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane /> Send Message
                  </motion.button>
                </form>

                {/* Social */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Follow us on social media</p>
                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <a key={s.name} href="#" className={`w-10 h-10 bg-gray-100 dark:bg-gray-700 ${s.color} rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white transition-all hover:scale-110`}>
                        <s.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

