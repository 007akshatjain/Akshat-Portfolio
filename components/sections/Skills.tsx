"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Code,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Code,
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
        />
      </div>
    </motion.div>
  );
}

const techBadges = [
  { name: "FastAPI", category: "Python" },
  { name: "Node.js", category: "Runtime" },
  { name: "React", category: "UI" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Oracle DB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "VCS" },
  { name: "PowerShell", category: "Scripting" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "MongoDB", category: "NoSQL" },
  { name: "Express.js", category: "Framework" },
  { name: "Flask", category: "Python" },
  { name: "Tailwind", category: "CSS" },
  { name: "VMware", category: "Virtualization" },
  { name: "vSphere", category: "Infrastructure" },
  { name: "SCCM", category: "Management" },
  { name: "CI/CD", category: "DevOps" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Technical Skills"
          title="The"
          highlight="Tech Stack"
          description="A curated arsenal of tools and technologies — each chosen to solve real problems at enterprise scale."
        />

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skills.map((skillGroup, groupIndex) => {
            const Icon = iconMap[skillGroup.icon] || Code;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover rounded-2xl p-6 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${skillGroup.color}15`,
                      border: `1px solid ${skillGroup.color}25`,
                    }}
                  >
                    <Icon size={16} style={{ color: skillGroup.color }} />
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: skillGroup.color }}
                  >
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      level={item.level}
                      color={skillGroup.color}
                      delay={groupIndex * 0.1 + i * 0.06}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white mb-1">
              Full Technology Radar
            </h3>
            <p className="text-gray-500 text-sm">
              Every tool in the arsenal
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {techBadges.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-200 cursor-default group"
              >
                <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-gray-600 font-mono group-hover:text-purple-400 transition-colors">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
