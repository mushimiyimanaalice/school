import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes } from "react-icons/fa";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setShow(false);
      });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 right-6 z-50 max-w-sm"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-gray-900 dark:text-white">Install Little Garden School</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Add to home screen for quick access</p>
            </div>
            <div className="flex gap-1">
              <button onClick={handleInstall} className="p-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all">
                <FaDownload size={14} />
              </button>
              <button onClick={() => setShow(false)} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all">
                <FaTimes size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

