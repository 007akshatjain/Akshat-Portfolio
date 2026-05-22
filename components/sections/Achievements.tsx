"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Users,
  Globe,
  GraduationCap,
  Shield,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { achievements } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Medal,
  Users,
  Globe,
  GraduationCap,
  Shield,
};

const categoryColors: Record<string, string> = {
  "Competitive Programming": "#f59e0b",
  Sports: "#ef4444",
  Leadership: "#8b5cf6",
  "Web Development": "#3b82f6",
  Education: "#10b981",
  Professional: "#06b6d4",
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-950/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Achievements"
          title="Beyond the"
          highlight="Code"
          description="Milestones that define character — from competitive programming to state-level athletics and institutional leadership."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            const color = categoryColors[achievement.category] || achievement.color;

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass-card glass-card-hover rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/2"
                  style={{ background: color }}
                />

                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      color,
                      background: `${color}15`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {achievement.category}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}25`,
                  }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-base mb-2 leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${color}80, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Coding stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 glass-card rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-semibold text-base mb-1">
              Competitive Programming
            </h3>
            <p className="text-gray-500 text-sm">
              Consistent problem solver across major platforms
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { platform: "LeetCode", color: "#f59e0b" },
              { platform: "CodeChef", color: "#8b5cf6" },
              { platform: "GFG", color: "#10b981" },
            ].map((p) => (
              <div key={p.platform} className="text-center">
                <div
                  className="text-xs font-mono mb-1"
                  style={{ color: p.color }}
                >
                  {p.platform}
                </div>
                <div className="text-white font-bold text-sm">Active</div>
              </div>
            ))}
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <div className="gradient-text text-2xl font-black">500+</div>
              <div className="text-gray-500 text-xs">Problems Solved</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
