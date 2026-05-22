"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 18 + 4;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#050510] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="text-5xl font-bold mb-2">
                <span className="gradient-text">AJ</span>
              </div>
              <div className="text-gray-500 text-sm font-mono tracking-widest">
                akshat jain
              </div>
            </motion.div>

            <div className="w-48 h-[1px] bg-white/10 mx-auto mb-3 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="text-xs font-mono text-gray-600">
              {Math.round(Math.min(progress, 100))}%
            </div>
          </div>

          {/* Background grid */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
