"use client";

import React from "react";
import type { IconType } from "react-icons";
import { motion } from "motion/react";
import {
  SiAndroidstudio,
  SiClaude,
  SiN8N,
  SiPostman,
  SiGit,
  SiGithub,
  SiLinux,
  SiFigma,
  SiVercel,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiCloudflare,
  SiDocker,
  SiExpo,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LuMousePointer2 } from "react-icons/lu";
import { FaReact, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { Code2 } from "lucide-react";
import { CometCard } from "../components/ui/comet-card";
import { toolsPageStyles as s, timelineStyles as t } from "@/public/dummyStyles";

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

type ToolCategory =
  | "Editor / IDE"
  | "AI Assistant"
  | "Automation"
  | "API Testing"
  | "Version Control"
  | "Operating System"
  | "Design"
  | "Deployment";

interface Tool {
  name: string;
  category: ToolCategory;
  icon: IconType;
  color: string;
  href: string;
}

const tools: Tool[] = [
  { name: "VS Code", category: "Editor / IDE", icon: VscVscode, color: "#007ACC", href: "https://code.visualstudio.com" },
  { name: "Cursor", category: "Editor / IDE", icon: LuMousePointer2, color: "#111111", href: "https://cursor.com" },
  { name: "Android Studio", category: "Editor / IDE", icon: SiAndroidstudio, color: "#3DDC84", href: "https://developer.android.com/studio" },
  { name: "Claude AI", category: "AI Assistant", icon: SiClaude, color: "#D97757", href: "https://claude.ai" },
  { name: "n8n", category: "Automation", icon: SiN8N, color: "#EA4B71", href: "https://n8n.io" },
  { name: "Postman", category: "API Testing", icon: SiPostman, color: "#FF6C37", href: "https://postman.com" },
  { name: "Git", category: "Version Control", icon: SiGit, color: "#F05032", href: "https://git-scm.com" },
  { name: "GitHub", category: "Version Control", icon: SiGithub, color: "#181717", href: "https://github.com" },
  { name: "Linux", category: "Operating System", icon: SiLinux, color: "#E6A800", href: "https://kernel.org" },
  { name: "Figma", category: "Design", icon: SiFigma, color: "#F24E1E", href: "https://figma.com" },
  { name: "Vercel", category: "Deployment", icon: SiVercel, color: "#000000", href: "https://vercel.com" },
];

const techCategories = [
  {
    title: "Frontend",
    icons: [
      { icon: <SiReact className="w-5 h-5 text-cyan-400" />, name: "React" },
      { icon: <SiTypescript className="w-5 h-5 text-blue-400" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="w-5 h-5 text-cyan-300" />, name: "Tailwind" },
      { icon: <SiNextdotjs className="w-5 h-5 text-white" />, name: "Next.js" },
    ],
  },
  {
    title: "Backend",
    icons: [
      { icon: <SiNodedotjs className="w-5 h-5 text-green-400" />, name: "Node.js" },
      { icon: <SiNestjs className="w-5 h-5 text-red-400" />, name: "Nest.js" },
      { icon: <SiGraphql className="w-5 h-5 text-pink-400" />, name: "GraphQL" },
      { icon: <TbApi className="w-5 h-5 text-zinc-300" />, name: "REST API" },
    ],
  },
  {
    title: "Databases",
    icons: [
      { icon: <SiPostgresql className="w-5 h-5 text-blue-300" />, name: "PostgreSQL" },
      { icon: <SiRedis className="w-5 h-5 text-red-400" />, name: "Redis" },
      { icon: <SiMongodb className="w-5 h-5 text-green-500" />, name: "MongoDB" },
    ],
  },
  {
    title: "Mobile Apps",
    icons: [
      { icon: <FaReact className="w-5 h-5 text-cyan-400" />, name: "React Native" },
      { icon: <SiExpo className="w-5 h-5 text-white" />, name: "Expo" },
      { icon: <SiTypescript className="w-5 h-5 text-blue-400" />, name: "TypeScript" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icons: [
      { icon: <FaAws className="w-5 h-5 text-orange-400" />, name: "AWS" },
      { icon: <SiCloudflare className="w-5 h-5 text-orange-300" />, name: "Cloudflare" },
      { icon: <SiDocker className="w-5 h-5 text-blue-400" />, name: "Docker" },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>

        <FadeInUp>
          <div className={t.techSectionHeader}>
            <div className={t.techSectionIconContainer}>
              <Code2 className={t.techSectionIcon} />
            </div>
            <div>
              <h3 className={t.techSectionTitle}>Technologies Mastered</h3>
              <p className={t.techSectionSubtitle}>
                Full-Stack expertise across modern tech stack.
              </p>
            </div>
          </div>
        </FadeInUp>

        <div className="mt-8 grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {techCategories.map((cat, i) => (
            <FadeInUp key={cat.title} delay={0.1 + i * 0.05}>
              <div className={`${t.techCard} min-w-0`}>
                <div className={`${t.techCardTitle} text-blue-400 mb-3`}>
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {cat.icons.map((item) => (
                    <div key={item.name} className="flex flex-col items-center gap-1">
                      {item.icon}
                      <span className="text-[10px] text-zinc-400">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.35}>
          <div className={`${s.headerContainer} mt-16`}>
<h1 className="text-lg font-bold text-zinc-100">Shovels</h1>
<p className="text-sm text-zinc-400">
  Tools I frequently use to make life easier.
</p>
          </div>
        </FadeInUp>

        <ul className={`${s.toolsGrid} mt-8`}>
          {tools.map(({ name, category, icon: Icon, color, href }, i) => (
            <FadeInUp key={name} delay={0.45 + i * 0.03}>
              <li>
                <CometCard>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/90 p-4 text-left shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-slate-800/90"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-inner">
                      <Icon size={30} color={color} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="truncate text-base font-semibold text-white">
                        {name}
                      </h2>
                      <p className="truncate text-sm font-medium text-slate-300">
                        {category}
                      </p>
                    </div>
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                </CometCard>
              </li>
            </FadeInUp>
          ))}
        </ul>
      </div>
    </div>
  );
}