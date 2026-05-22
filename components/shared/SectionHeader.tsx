"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}
      >
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500" />
        <span className="text-xs font-mono text-purple-400 uppercase tracking-[0.2em]">
          {label}
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500" />
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {description && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
