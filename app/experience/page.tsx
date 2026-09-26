"use client";

import { Briefcase, Code2, Rocket } from "lucide-react";
import { timelineStyles as s } from "@/public/dummyStyles";
import { Timeline } from "../components/ui/timeline";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiExpo,
  SiCloudflare,
  SiDocker,
} from "react-icons/si";
import { FaReact, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const techCategories = [
  {
    title: "Frontend",
    color: s.textBlue,
    icons: [
      { icon: <SiReact className="w-5 h-5 text-cyan-400" />, name: "React" },
      { icon: <SiTypescript className="w-5 h-5 text-blue-400" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="w-5 h-5 text-cyan-300" />, name: "Tailwind" },
      { icon: <SiNextdotjs className="w-5 h-5 text-white" />, name: "Next.js" },
    ]
  },
  {
    title: "Backend",
    color: s.textBlue,
    icons: [
      { icon: <SiNodedotjs className="w-5 h-5 text-green-400" />, name: "Node.js" },
      { icon: <SiNestjs className="w-5 h-5 text-red-400" />, name: "Nest.js" },
      { icon: <SiGraphql className="w-5 h-5 text-pink-400" />, name: "GraphQL" },
      { icon: <TbApi className="w-5 h-5 text-zinc-300" />, name: "REST API" },
    ]
  },
  {
    title: "Databases",
    color: s.textBlue,
    icons: [
      { icon: <SiPostgresql className="w-5 h-5 text-blue-300" />, name: "PostgreSQL" },
      { icon: <SiRedis className="w-5 h-5 text-red-400" />, name: "Redis" },
      { icon: <SiMongodb className="w-5 h-5 text-green-500" />, name: "MongoDB" },
    ]
  },
  {
    title: "Mobile Apps",
    color: s.textBlue,
    icons: [
      { icon: <FaReact className="w-5 h-5 text-cyan-400" />, name: "React Native" },
      { icon: <SiExpo className="w-5 h-5 text-white" />, name: "Expo" },
      { icon: <SiTypescript className="w-5 h-5 text-blue-400" />, name: "TypeScript" },
    ]
  },
  {
    title: "Cloud & DevOps",
    color: s.textBlue,
    icons: [
      { icon: <FaAws className="w-5 h-5 text-orange-400" />, name: "AWS" },
      { icon: <SiCloudflare className="w-5 h-5 text-orange-300" />, name: "Cloudflare" },
      { icon: <SiDocker className="w-5 h-5 text-blue-400" />, name: "Docker" },
    ]
  },
];

export default function TimelineDemo() {
  const data = [
    {
      title: "Dec 2025 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Freelance Full-Stack Developer</h3>
              <p className={s.contentSubtitle}>Remote</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Delivering full-stack web and mobile solutions for clients sourced via Upwork, Fiverr, and Freelancer.com, working across React, Next.js, Node.js, and React Native.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built and shipped personal projects including ShopCart, Agentic Calendar, and LukuApp.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Managed the full project lifecycle independently including requirements, architecture, deployment, and client support.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Next</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Node</span>
            <span className={s.techBadge}>AI Agents</span>
          </div>
        </div>
      )
    },
    {
      title: "Aug 2025 - Dec 2025",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Briefcase className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Junior Software Developer</h3>
              <p className={s.contentSubtitle}>SwahiliPot Hub</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built and maintained web projects using React, Next.js, and Node.js as part of the hub&apos;s tech team.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Performed networking hardware maintenance and troubleshooting in the innovation lab.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Collaborated with a team of developers across the full build-to-deployment cycle.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Next.js</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Node</span>
            <span className={s.techBadge}>Git</span>
          </div>
        </div>
      )
    },
    {
      title: "Jan 2024 - Dec 2024",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Code2 className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Frontend Developer</h3>
              <p className={s.contentSubtitle}>Makhsdevcode</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built responsive, pixel-perfect UIs with React and Tailwind CSS for real estate and business client websites.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Integrated frontend interfaces with REST APIs to deliver dynamic, data-driven user experiences.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Worked closely within a cross-functional team of designers and backend developers to ship client projects on schedule.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Javascript</span>
            <span className={s.techBadge}>MongoDB</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className="mb-8">
          <div className={s.timelineBadge}>
            <span>Career Timeline</span>
          </div>
          <h1 className={s.mainTitle}>My Journey So Far</h1>
          <p className={s.mainParagraph}>
            I&apos;ve been building products for the past 4+ years.
            <br />
            Here&apos;s a timeline of my growth as a developer across different teams and projects.
          </p>
          <div className={s.legendContainer}>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}></div>
              <span className={s.legendText}>Freelance Full-Stack</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-purple-500`}></div>
              <span className={s.legendText}>Junior Developer</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-amber-500`}></div>
              <span className={s.legendText}>Frontend Developer</span>
            </div>
          </div>
        </div>

        <Timeline data={data} />

        <div className={s.techSectionContainer}>
          <div className={s.techSectionHeader}>
            <div className={s.techSectionIconContainer}>
              <Code2 className={s.techSectionIcon} />
            </div>
            <div>
              <h3 className={s.techSectionTitle}>Technologies Mastered</h3>
              <p className={s.techSectionSubtitle}>Full-Stack expertise across modern tech stack.</p>
            </div>
          </div>

          <div className="mt-8 grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {techCategories.map((cat) => (
              <div key={cat.title} className={`${s.techCard} min-w-0`}>
                <div className={`${s.techCardTitle} ${cat.color} mb-3`}>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}