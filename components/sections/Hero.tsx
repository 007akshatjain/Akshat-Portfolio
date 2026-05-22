"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Sparkles,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const stats = [
  { value: personalInfo.yearsExperience, label: "Years Exp." },
  { value: personalInfo.projectsCompleted, label: "APIs Built" },
  { value: personalInfo.techStackCount, label: "Technologies" },
  { value: personalInfo.problemsSolved, label: "DSA Solved" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/25 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/15 via-transparent to-transparent rounded-full blur-3xl translate-x-20" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-[12%] w-64 h-64 rounded-full bg-purple-600/5 border border-purple-500/10 pointer-events-none"
      />
      <motion.div
        animate={{ y: [10, -20, 10], rotate: [360, 180, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[8%] w-48 h-48 rounded-full bg-blue-600/5 border border-blue-500/10 pointer-events-none"
      />
      <motion.div
        animate={{ y: [-8, 14, -8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[5%] w-3 h-3 rounded-full bg-purple-400/60 pointer-events-none"
      />
      <motion.div
        animate={{ y: [12, -10, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-2/3 right-[10%] w-2 h-2 rounded-full bg-blue-400/60 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-60" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <Sparkles size={12} className="text-emerald-400" />
          <span className="text-emerald-400 text-xs font-medium tracking-wider">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-1.5 mb-6 text-gray-500 text-sm"
        >
          <MapPin size={13} />
          <span>{personalInfo.location}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4 leading-none"
        >
          <span className="text-white">Akshat</span>
          <br />
          <span className="gradient-text">Jain</span>
        </motion.h1>

        {/* Typing roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-6 font-mono h-8 flex items-center justify-center gap-2"
        >
          <span className="text-purple-400">{">"}</span>
          <TypeAnimation
            sequence={[
              "Backend Engineer",
              2000,
              "API Architect",
              2000,
              "Full Stack Developer",
              2000,
              "Systems Engineer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gray-200"
          />
          <span className="text-purple-400 animate-pulse">_</span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-full text-sm transition-all duration-300 shadow-glow"
          >
            View Projects
            <ExternalLink size={15} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-full text-sm transition-all duration-300"
          >
            Contact Me
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3.5 border border-purple-500/30 hover:border-purple-500/60 text-purple-300 hover:text-purple-200 rounded-full text-sm transition-all duration-300"
          >
            <Download size={15} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
              aria-label={label}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl py-4 px-3 text-center"
            >
              <div className="text-2xl font-black gradient-text mb-0.5">
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
