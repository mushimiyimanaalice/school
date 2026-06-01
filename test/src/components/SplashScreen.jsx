import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("welcomeSeen");
    if (!seen) {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("welcomeSeen", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center px-6"
          >
            <motion.img
              src="/logo.png"
              alt="Little Garden School"
              className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-brand text-3xl md:text-5xl text-white mb-3"
            >
              Welcome to
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="font-brand text-4xl md:text-6xl text-secondary font-bold mb-6"
            >
              Little Garden School
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
            >
              Nurturing young minds in a caring, creative environment. Where every child blossoms into their best self.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={dismiss}
              className="px-10 py-4 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
