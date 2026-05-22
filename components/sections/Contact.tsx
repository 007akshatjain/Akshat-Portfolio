"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { personalInfo } from "@/data/portfolio";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "007Akshatjain",
    href: personalInfo.github,
    color: "#9ca3af",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Akshat-Jain13",
    href: personalInfo.linkedin,
    color: "#3b82f6",
  },
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#8b5cf6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "#10b981",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Get In Touch"
          title="Let's Build"
          highlight="Together"
          description="Whether it's a full-time role, freelance project, or just a conversation about engineering — I'm listening."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Availability */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative">
                  <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
                </div>
                <span className="text-emerald-400 font-medium text-sm">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm currently open to backend engineering roles, full-stack positions,
                and contract engagements. Especially interested in challenging
                infrastructure, API design, or performance engineering work.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3.5 glass-card glass-card-hover rounded-xl group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">
                      {label}
                    </div>
                    <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}

              <div className="flex items-center gap-3 p-3.5 glass-card rounded-xl">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-orange-500/10 border border-orange-500/20">
                  <MapPin size={15} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-0.5">
                    Location
                  </div>
                  <div className="text-gray-300 text-sm">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mb-5">
                  <CheckCircle size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Message sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-7 space-y-5"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles size={14} className="text-purple-400" />
                  <span className="text-gray-400 text-sm">
                    Send me a message
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell me about the role, project, or what you're working on..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
