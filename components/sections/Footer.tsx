"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] pt-14 pb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                AJ
              </div>
              <span className="text-white font-semibold">Akshat Jain</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Backend engineer building scalable systems at Texas Instruments.
              Open to new opportunities.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = link.href.replace("#", "");
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-500 hover:text-white text-sm transition-colors block"
              >
                {personalInfo.email}
              </a>
              <div className="text-gray-500 text-sm">{personalInfo.location}</div>
              <div className="flex items-center gap-1.5 mt-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
          <div className="flex items-center gap-1.5 text-gray-600 text-xs">
            <span>Built with</span>
            <Heart size={11} className="text-red-500 fill-red-500" />
            <span>by Akshat Jain · Next.js + Framer Motion</span>
          </div>

          <div className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Akshat Jain. All rights reserved.
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
