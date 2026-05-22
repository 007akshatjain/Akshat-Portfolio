"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Zap,
  Target,
  Layers,
  GraduationCap,
  Calendar,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const traits = [
  {
    icon: Code2,
    title: "Backend-First Thinking",
    description:
      "I design systems from the data layer up — optimizing for scale, reliability, and clean API contracts before touching the frontend.",
    color: "#8b5cf6",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description:
      "Every system I build is benchmarked and optimized. From 40% query improvements to 90% automation gains — numbers drive my engineering decisions.",
    color: "#3b82f6",
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description:
      "I don't just ship features — I ship outcomes. Reduced 40% support tickets, saved 12+ hours/month, enabled 99.9% data accuracy at scale.",
    color: "#10b981",
  },
  {
    icon: Layers,
    title: "Full-Stack Capable",
    description:
      "While backend is my core, I'm fully capable across the stack — from React frontends to Oracle DB schemas to Docker deployments.",
    color: "#f59e0b",
  },
];

const education = [
  {
    degree: "Master of Computer Application",
    institution: "NIT Bhopal",
    period: "Oct 2021 — May 2024",
    grade: "CPI: 8.59",
    location: "Bhopal, India",
    color: "#8b5cf6",
  },
  {
    degree: "Bachelor's in Computer Applications",
    institution: "Govt. Holkar Science College",
    period: "Aug 2018 — Jun 2021",
    grade: "71.67%",
    location: "Indore, India",
    color: "#3b82f6",
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="About Me"
          title="The Engineer"
          highlight="Behind the Code"
          description="Backend-focused engineer who's spent 2+ years shipping production systems at Texas Instruments — building fast, reliable, and scalable."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Story */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-gray-300 leading-relaxed text-base">
              I'm a systems engineer and backend developer based in Bengaluru,
              currently at{" "}
              <span className="text-purple-400 font-medium">
                Texas Instruments
              </span>{" "}
              — building enterprise infrastructure used by engineers worldwide.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              My engineering philosophy is simple: build systems that work at
              scale, stay readable under pressure, and deliver measurable impact.
              I've reduced manual effort by 90%, boosted query performance by
              40%, and shipped 15+ production APIs supporting 1000+ users.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Outside the terminal, I've solved 500+ DSA problems, led student
              organizations at NIT Bhopal, and won a State Gold Medal in
              Kho-Kho. I bring the same competitive mindset to engineering that I
              brought to sports — persistence, strategy, and a drive to win.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {[
                "FastAPI",
                "Node.js",
                "React",
                "Python",
                "Oracle DB",
                "Redis",
                "Docker",
                "TypeScript",
              ].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">
              Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="glass-card glass-card-hover rounded-2xl p-5"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                  >
                    <GraduationCap size={18} style={{ color: edu.color }} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">
                      {edu.degree}
                    </div>
                    <div className="text-gray-400 text-sm mb-2">
                      {edu.institution} · {edu.location}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={11} />
                        {edu.period}
                      </div>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={{
                          background: `${edu.color}15`,
                          color: edu.color,
                          border: `1px solid ${edu.color}30`,
                        }}
                      >
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { value: "2+", label: "Years at TI", icon: "🏢" },
                { value: "99.9%", label: "System Reliability", icon: "⚡" },
                { value: "1000+", label: "Users Served", icon: "👥" },
                { value: "500+", label: "Problems Solved", icon: "🧩" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-xl p-3 text-center"
                >
                  <div className="text-lg mb-0.5">{stat.icon}</div>
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trait cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {traits.map((trait, i) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover rounded-2xl p-5 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${trait.color}15`,
                    border: `1px solid ${trait.color}25`,
                  }}
                >
                  <Icon size={18} style={{ color: trait.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {trait.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {trait.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
