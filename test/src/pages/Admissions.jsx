import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaFileAlt, FaClipboardList, FaIdCard, FaCreditCard, FaSmile, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

const requirements = [
  "Birth certificate (original & copy)",
  "Passport-size photos (4 copies)",
  "Previous school records (if applicable)",
  "Immunization record",
  "Parent/guardian ID copies",
  "Medical report from a recognized hospital",
  "Completed enrollment application form",
];

const steps = [
  { icon: FaClipboardList, step: "1", title: "Inquiry", desc: "Contact us or visit our campus for a tour and information package." },
  { icon: FaFileAlt, step: "2", title: "Application", desc: "Complete and submit the application form with all required documents." },
  { icon: FaIdCard, step: "3", title: "Assessment", desc: "Schedule a child assessment and parent interview with our admissions team." },
  { icon: FaSmile, step: "4", title: "Acceptance", desc: "Receive your admission decision and acceptance letter within one week." },
  { icon: FaCreditCard, step: "5", title: "Enrollment", desc: "Pay the enrollment fee and secure your child's place for the academic year." },
];

export default function Admissions() {
  const [form, setForm] = useState({
    childName: "", dob: "", grade: "", parentName: "", email: "", phone: "", address: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.childName.trim()) errs.childName = "Child's name is required";
    if (!form.dob) errs.dob = "Date of birth is required";
    if (!form.grade) errs.grade = "Please select a grade";
    if (!form.parentName.trim()) errs.parentName = "Parent/guardian name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email address";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^\+?[\d\s-]{7,}$/.test(form.phone)) errs.phone = "Invalid phone number";
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
      setForm({ childName: "", dob: "", grade: "", parentName: "", email: "", phone: "", address: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-secondary-dark via-secondary to-secondary-darker overflow-hidden">
        <div className="absolute inset-0 bg-[url('/leon-wu-LLfRMRT-9AY-unsplash.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Admissions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-orange-100 text-lg max-w-2xl mx-auto">
            Begin your child's journey with us. We're here to make the enrollment process smooth and welcoming.
          </motion.p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-primary-lighter text-primary-darker rounded-full text-sm font-medium mb-4">Requirements</span>
              <h2 className="font-brand text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Admission <span className="text-primary">Requirements</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To ensure a smooth enrollment process, please prepare the following documents:
              </p>
              <div className="space-y-3">
                {requirements.map((req, i) => (
                  <motion.div
                    key={req}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"
                  >
                    <FaCheckCircle className="text-primary shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-sm">{req}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-primary-lightest to-primary-lightest dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-primary-lighter dark:border-gray-700">
                <h3 className="font-brand text-xl font-bold text-gray-800 dark:text-white mb-4">Important Dates</h3>
                <div className="space-y-4">
                  {[
                    { label: "Applications Open", date: "January 1, 2026" },
                    { label: "Early Bird Deadline", date: "March 31, 2026" },
                    { label: "Regular Deadline", date: "June 30, 2026" },
                    { label: "Academic Year Begins", date: "September 1, 2026" },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between items-center p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{d.label}</span>
                      <span className="font-brand font-bold text-primary-dark dark:text-primary-light text-sm">{d.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Admission Process" subtitle="Simple Steps" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10">
                    <s.icon className="text-white text-xl" />
                  </div>
                  <span className="absolute top-0 right-1/4 w-8 h-8 bg-secondary text-gray-900 rounded-full flex items-center justify-center font-bold text-sm -translate-y-1/3 z-20">
                    {s.step}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-light dark:bg-primary-darker" />
                  )}
                  <h3 className="font-brand text-lg font-bold text-gray-800 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Online Application" subtitle="Apply Now" />
          {submitted && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-primary-lightest dark:bg-primary-darkest/30 border border-primary-light dark:border-primary-dark text-primary-darker dark:text-primary-light p-6 rounded-2xl mb-8 text-center">
              <FaCheckCircle className="text-primary text-3xl mx-auto mb-2" />
              <p className="font-semibold">Application submitted successfully!</p>
              <p className="text-sm">We will contact you within 3-5 business days.</p>
            </motion.div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Child's Full Name *</label>
                <input type="text" name="childName" value={form.childName} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.childName ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all`} placeholder="Enter child's name" />
                {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Date of Birth *</label>
                <input type="date" name="dob" value={form.dob} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.dob ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all`} />
                {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Grade Applying For *</label>
              <select name="grade" value={form.grade} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.grade ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all`}>
                <option value="">Select grade</option>
                <option value="Early Years (2-3 yrs)">Early Years (2-3 yrs)</option>
                <option value="Pre-Primary (4-5 yrs)">Pre-Primary (4-5 yrs)</option>
                <option value="Lower Primary (6-8 yrs)">Lower Primary (6-8 yrs)</option>
                <option value="Upper Primary (9-11 yrs)">Upper Primary (9-11 yrs)</option>
              </select>
              {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Parent/Guardian Name *</label>
                <input type="text" name="parentName" value={form.parentName} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.parentName ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all`} placeholder="Full name" />
                {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all`} placeholder="your@email.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Phone Number *</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-400" : "border-gray-200 dark:border-gray-600"} bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all`} placeholder="+254 7XX XXX XXX" />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Address</label>
                <input type="text" name="address" value={form.address} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all" placeholder="Your address" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">Additional Information</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all resize-none" placeholder="Any special requirements or questions..." />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Submit Application <FaArrowRight />
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
}

