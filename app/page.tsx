"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { homePageStyles, spotlightStyles } from "@/public/dummyStyles"
import { Spotlight } from "./components/ui/spotlight"
import { PointerHighlight } from "./components/ui/pointer-highlight"
import { Cover } from "./components/ui/cover"
import { projects } from "@/lib/projects-data"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { Briefcase, Code2, Rocket } from "lucide-react"
import emailjs from "@emailjs/browser"
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiGraphql, SiPostgresql,
  SiRedis, SiMongodb, SiCloudflare,
  SiDocker, SiGit, SiFigma, SiVercel, SiExpo
} from "react-icons/si"
import { FaReact, FaAws } from "react-icons/fa"
import { TbApi } from "react-icons/tb"

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <FadeInUp>
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">{title}</h2>
      {subtitle && <p className="text-zinc-400 text-sm">{subtitle}</p>}
      <div className="mt-3 h-px w-16 bg-blue-500" />
    </div>
  </FadeInUp>
)

const tools = [
  { icon: <SiReact className="w-6 h-6 text-cyan-400" />, name: "React" },
  { icon: <SiNextdotjs className="w-6 h-6 text-white" />, name: "Next.js" },
  { icon: <SiTypescript className="w-6 h-6 text-blue-400" />, name: "TypeScript" },
  { icon: <SiTailwindcss className="w-6 h-6 text-cyan-300" />, name: "Tailwind" },
  { icon: <SiNodedotjs className="w-6 h-6 text-green-400" />, name: "Node.js" },
  { icon: <SiNestjs className="w-6 h-6 text-red-400" />, name: "Nest.js" },
  { icon: <SiGraphql className="w-6 h-6 text-pink-400" />, name: "GraphQL" },
  { icon: <TbApi className="w-6 h-6 text-zinc-300" />, name: "REST API" },
  { icon: <SiPostgresql className="w-6 h-6 text-blue-300" />, name: "PostgreSQL" },
  { icon: <SiRedis className="w-6 h-6 text-red-400" />, name: "Redis" },
  { icon: <SiMongodb className="w-6 h-6 text-green-500" />, name: "MongoDB" },
  { icon: <FaAws className="w-6 h-6 text-orange-400" />, name: "AWS" },
  { icon: <SiCloudflare className="w-6 h-6 text-orange-300" />, name: "Cloudflare" },
  { icon: <SiDocker className="w-6 h-6 text-blue-400" />, name: "Docker" },
  { icon: <SiGit className="w-6 h-6 text-orange-400" />, name: "Git" },
  { icon: <SiFigma className="w-6 h-6 text-purple-400" />, name: "Figma" },
  { icon: <SiVercel className="w-6 h-6 text-white" />, name: "Vercel" },
  { icon: <FaReact className="w-6 h-6 text-cyan-400" />, name: "React Native" },
  { icon: <SiExpo className="w-6 h-6 text-white" />, name: "Expo" },
]

const experience = [
  {
    period: "Dec 2025 - Present",
    title: "Freelance Full-Stack Developer",
    company: "Remote",
    icon: <Rocket className="w-5 h-5 text-blue-400" />,
    bullets: [
      "Delivering full-stack web and mobile solutions for clients via Upwork, Fiverr, and Freelancer.com.",
      "Built and shipped ShopCart, Agentic Calendar, and LukuApp.",
      "Managed full project lifecycle independently — requirements, architecture, deployment, and client support.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Node", "AI Agents"],
  },
  {
    period: "Aug 2025 - Dec 2025",
    title: "Junior Software Developer",
    company: "SwahiliPot Hub",
    icon: <Briefcase className="w-5 h-5 text-blue-400" />,
    bullets: [
      "Built and maintained web projects using React, Next.js, and Node.js.",
      "Performed networking hardware maintenance and troubleshooting in the innovation lab.",
      "Collaborated with a team of developers across the full build-to-deployment cycle.",
    ],
    tags: ["React", "Next.js", "Tailwind", "Node.js", "Git"],
  },
  {
    period: "Jan 2024 - Dec 2024",
    title: "Frontend Developer",
    company: "Makhsdevcode",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    bullets: [
      "Built responsive, pixel-perfect UIs with React and Tailwind CSS for real estate and business clients.",
      "Integrated frontend interfaces with REST APIs for dynamic, data-driven experiences.",
      "Worked with designers and backend devs to ship client projects on schedule.",
    ],
    tags: ["React", "Tailwind", "JavaScript", "MongoDB"],
  },
]

function ContactForm() {
  const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" })
  const [sending, setSending] = React.useState(false)
  const [focused, setFocused] = React.useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setFormData({ name: "", email: "", subject: "", message: "" })
      alert("Message sent. Thank you!")
    } catch (err) {
      console.error(err)
      alert("Failed to send. Please try again.")
    } finally {
      setSending(false)
    }
  }

  const getLabelClass = (field: string) => {
    const base = "absolute left-4 transition-all"
    const active = focused === field || formData[field as keyof typeof formData]
      ? "-top-2.5 bg-zinc-800 px-2 rounded-2xl text-xs text-zinc-400"
      : "top-4 text-zinc-500"
    return `${base} ${active}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            placeholder="John Doe"
            required
            className="peer w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4 text-zinc-100 outline-none transition-all placeholder:text-transparent focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600"
          />
          <label htmlFor="name" className={getLabelClass("name")}>Name</label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            placeholder="john@example.com"
            required
            className="peer w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4 text-zinc-100 outline-none transition-all placeholder:text-transparent focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600"
          />
          <label htmlFor="email" className={getLabelClass("email")}>Email</label>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
          placeholder="Project Collaboration"
          required
          className="peer w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4 text-zinc-100 outline-none transition-all placeholder:text-transparent focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600"
        />
        <label htmlFor="subject" className={getLabelClass("subject")}>Subject</label>
      </div>
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          rows={6}
          placeholder="Tell me about your project..."
          required
          className="peer w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4 text-zinc-100 outline-none transition-all placeholder:text-transparent focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600"
        />
        <label htmlFor="message" className={getLabelClass("message")}>Message</label>
      </div>
      <button
        type="submit"
        disabled={sending}
        className="group relative w-full overflow-hidden rounded-xl bg-zinc-100 px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:shadow-lg active:scale-[0.98] md:w-auto disabled:opacity-50"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {sending ? "Sending..." : "Send Message"}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </span>
      </button>
    </form>
  )
}

export default function HomePage(): React.ReactElement {
  const router = useRouter()
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="bg-zinc-950 min-h-screen">

      <div className={homePageStyles.container}>
        <div className={cn(
          homePageStyles.backgroundGrid.wrapper,
          homePageStyles.backgroundGrid.pattern,
        )} />
        <Spotlight className={spotlightStyles.position} fill="#3b82f6" />
        <div className={homePageStyles.gradientOverlay} />

        <section className={homePageStyles.heroSection}>
          <div className="relative">
            <FadeInUp>
              <h1 className={homePageStyles.h1}>
                Hi, I&apos;m{" "}
                <span className={homePageStyles.spanWithMargin}>
                  <Cover>Fred</Cover>
                </span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h2 className={homePageStyles.h2}>
                Software{" "}
                <span className={homePageStyles.spanInline}>
                  <PointerHighlight rectangleClassName="rounded-full px-4 py-1">
                    Developer
                  </PointerHighlight>
                </span>
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="mb-6">
                <div className="flex items-center justify-between w-full sm:w-auto sm:max-w-md gap-4 rounded-2xl p-3 bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-zinc-200">Available for freelance work.</span>
                  </div>
                  <Link
                    href="#contact"
                    className="flex items-center gap-1.5 px-4 py-1 rounded-full border bg-zinc-100 text-zinc-900 text-sm shrink-0 hover:bg-zinc-200 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Contact
                  </Link>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className={homePageStyles.paragraph}>
                Tech enthusiast & full-stack developer with 4+ years of shipping
                real products. I solve problems with clean code, AI, and automation. From sleek frontends to scalable backends, I don&apos;t just build
                demos, I build things people actually use.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Freelancer", "Full-Stack Dev", "4+ Yrs Experience", "Problem Solver", "AI & Automation"].map((tag) => (
                  <span key={tag} className="text-xs border border-zinc-700 text-zinc-400 px-3 py-1.5 rounded-full bg-zinc-900/50 hover:border-zinc-500 hover:text-zinc-200 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>
      </div>

      <section id="projects" className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <FadeInUp>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">Featured Projects</h2>
              <p className="text-zinc-400 text-sm">Products I&apos;ve built, from MVP to production.</p>
              <div className="mt-3 h-px w-16 bg-blue-500" />
            </div>
            <Link
              href="/projects"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1 shrink-0"
            >
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-600 transition-all cursor-pointer group"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-zinc-100 text-sm truncate">{project.title}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ml-2 shrink-0 ${project.status === "active" ? "bg-green-500/10 text-green-400" : "bg-zinc-500/10 text-zinc-400"}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 mb-3">{project.description}</p>
                <div className="flex gap-2">
                  {project.links.visit && (
                    <a
                      href={project.links.visit}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-900 font-semibold hover:bg-zinc-200 transition-all"
                    >
                      Visit
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] px-2.5 py-1 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-all"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto border-t border-zinc-800/50">
        <SectionHeading title="Experience" subtitle="My journey as a developer across teams and projects." />
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <FadeInUp key={exp.title} delay={i * 0.1}>
              <div className="relative pl-6 border-l border-zinc-800">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h3 className="font-bold text-zinc-100 text-lg">{exp.title}</h3>
                  <span className="text-xs text-zinc-500 mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-sm text-blue-400 mb-3">{exp.company}</p>
                <ul className="space-y-1 mb-4">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="text-sm text-zinc-400 flex gap-2">
                      <span className="text-blue-500 mt-1 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-zinc-800/50 text-zinc-300 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <section id="tools" className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto border-t border-zinc-800/50">
        <SectionHeading title="Skills & Expertise" subtitle="Everything I use to build products." />
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
          {tools.map((tool, i) => (
            <FadeInUp key={tool.name} delay={i * 0.03}>
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-all">
                  {tool.icon}
                </div>
                <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors text-center">{tool.name}</span>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto border-t border-zinc-800/50">
        <SectionHeading title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeInUp>
            <p className="text-zinc-400 leading-relaxed mb-6">
              I&apos;m Fred, a self-taught full-stack developer with 4+ years of
              shipping real products. I write code across the full stack; from sleek
              frontends to scalable backends, AI integrations, and everything in between.
            </p>
            <div className="flex flex-wrap gap-2">
              {["FULL-STACK DEV", "SPORTS", "LLMS", "MUSIC", "AGENTIC AI", "AUTOMATION", "READING", "ESPAÑOL"].map((interest) => (
                <span key={interest} className="text-xs border border-zinc-700 text-zinc-400 px-3 py-1 rounded-full hover:border-zinc-500 hover:text-zinc-200 transition-all">
                  {interest}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/about"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                Read more about me
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "30+", label: "Projects Shipped" },
                { value: "80%", label: "Repeat Clients" },
                { value: "5★", label: "Client Rating" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
                  <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
                  <div className="text-zinc-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto border-t border-zinc-800/50">
        <SectionHeading title="Get in Touch" subtitle="Have a project in mind or want to collaborate ? Reach out to me." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeInUp>
            <div className="space-y-6">
             
              <div className="space-y-4">
              
                <a href="https://x.com/fredmumu2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-zinc-100 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </span>
                  @fredmumu2
                </a>
                <a href="https://github.com/FREDRICKMUMU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-zinc-100 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  FREDRICKMUMU
                </a>
                <a href="https://www.linkedin.com/in/fred-munyao-07a347418" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-zinc-100 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  Fred Munyao
                </a>

                  <a href="mailto:fredmunyao70@gmail.com" className="flex items-center gap-3 text-zinc-300 hover:text-zinc-100 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  fredmunyao70@gmail.com
                </a>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <ContactForm />
          </FadeInUp>
        </div>
      </section>

    </div>
  )
}