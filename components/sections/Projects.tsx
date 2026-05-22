"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  Zap,
  Users,
  Database,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Featured Work"
          title="Projects That"
          highlight="Ship"
          description="Production systems built for real enterprise problems — designed for scale, reliability, and lasting impact."
        />

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative mb-8"
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute -top-3 left-6 z-10 flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                <Star size={10} fill="white" className="text-white" />
                <span className="text-white text-xs font-semibold tracking-wide">
                  Featured Project
                </span>
              </div>
            )}

            <div
              className={`relative rounded-3xl overflow-hidden border border-white/[0.07] bg-gradient-to-br ${project.gradient} hover:border-purple-500/25 transition-all duration-500`}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accentColor}10, transparent 40%)`,
                }}
              />

              <div className="relative z-10 p-7 md:p-10">
                <div className="grid lg:grid-cols-5 gap-10">
                  {/* Left: Main content */}
                  <div className="lg:col-span-3 space-y-5">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-gray-500">
                          {project.company} · {project.period}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: project.accentColor }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Problem / Solution */}
                    <div className="space-y-3">
                      <div className="glass-card rounded-xl p-4">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-400 text-xs">!</span>
                          </div>
                          <div>
                            <div className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">
                              Problem
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {project.problem}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="glass-card rounded-xl p-4">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-emerald-400 text-xs">✓</span>
                          </div>
                          <div>
                            <div className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">
                              Solution
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                        Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white rounded-full text-sm transition-all duration-200"
                      >
                        <Github size={14} />
                        View Code
                      </motion.a>
                      {project.live ? (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm"
                          style={{
                            background: `linear-gradient(135deg, ${project.accentColor}, #3b82f6)`,
                          }}
                        >
                          <ExternalLink size={14} />
                          Live Demo
                          <ArrowUpRight size={13} />
                        </motion.a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-xs text-gray-600 italic">
                          Internal enterprise platform
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: Features + Stats */}
                  <div className="lg:col-span-2 space-y-5">
                    {/* Features */}
                    <div className="glass-card rounded-2xl p-5">
                      <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                        <Zap size={14} className="text-yellow-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2
                              size={13}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: project.accentColor }}
                            />
                            <span className="text-gray-400 text-xs leading-relaxed">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: Database, value: "15+", label: "REST APIs", color: "#8b5cf6" },
                        { icon: Users, value: "1000+", label: "Users Served", color: "#3b82f6" },
                        { icon: Zap, value: "60%", label: "Efficiency Gain", color: "#10b981" },
                        { icon: Star, value: "99.9%", label: "Data Accuracy", color: "#f59e0b" },
                      ].map((stat) => {
                        const Icon = stat.icon;
                        return (
                          <motion.div
                            key={stat.label}
                            whileHover={{ scale: 1.03 }}
                            className="glass-card rounded-xl p-3 text-center"
                          >
                            <Icon
                              size={14}
                              className="mx-auto mb-1.5"
                              style={{ color: stat.color }}
                            />
                            <div
                              className="text-lg font-bold"
                              style={{ color: stat.color }}
                            >
                              {stat.value}
                            </div>
                            <div className="text-gray-500 text-[10px] mt-0.5">
                              {stat.label}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://github.com/007Akshatjain"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 glass-card border border-white/[0.08] hover:border-purple-500/30 hover:bg-purple-500/5 text-gray-300 hover:text-white rounded-full text-sm transition-all duration-300"
          >
            <Github size={16} />
            Explore all projects on GitHub
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
