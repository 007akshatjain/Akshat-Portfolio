"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-800/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Work Experience"
          title="Where I've"
          highlight="Shipped"
          description="2+ years building and scaling backend systems at one of the world's largest semiconductor companies."
        />

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Timeline dot */}
              <div className="hidden sm:block absolute left-0 top-7 -translate-x-[calc(25vw-10px)] lg:-translate-x-[340px] z-10">
                <div
                  className="w-3 h-3 rounded-full border-2 border-[#050510]"
                  style={{ background: job.color }}
                />
              </div>

              <div className="glass-card glass-card-hover rounded-3xl p-7 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    {/* Company logo */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${job.color}30, ${job.color}10)`,
                        border: `1px solid ${job.color}30`,
                      }}
                    >
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {job.role}
                      </h3>
                      <div className="text-gray-400 text-sm font-medium mt-0.5">
                        {job.company}
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-mono"
                          style={{
                            background: `${job.color}15`,
                            color: job.color,
                            border: `1px solid ${job.color}25`,
                          }}
                        >
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-400 text-sm whitespace-nowrap">
                    <Calendar size={13} />
                    <span className="font-mono">{job.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 border-l-2 border-purple-800/40 pl-4">
                  {job.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2.5 mb-6">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.08 }}
                      className="flex items-start gap-2.5 text-sm text-gray-400"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: job.color }}
                      />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                {/* Impact metrics */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {job.impact.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
                      style={{
                        background: `${job.color}08`,
                        border: `1px solid ${job.color}20`,
                      }}
                    >
                      <TrendingUp size={12} style={{ color: job.color }} />
                      <span
                        className="font-bold text-sm"
                        style={{ color: job.color }}
                      >
                        {metric.metric}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {job.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline end */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mt-10 gap-3"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/50" />
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Briefcase size={12} />
            <span>Currently at Texas Instruments</span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
        </motion.div>
      </div>
    </section>
  );
}
