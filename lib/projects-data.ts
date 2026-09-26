export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
   archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
{
  id: "1",
  title: "ShopCart",
  slug: "shopcart",
  description: "Full-stack grocery delivery platform with payments, live tracking, and role based dashboards.",
  detailedDescription:
    "ShopCart is a full-stack grocery delivery platform built with React, TypeScript, Node.js, Express, and Prisma. It supports three distinct user roles i.e customers, administrators, and delivery partners each with a tailored dashboard. The platform integrates Pesapal for secure payments, Cloudinary for image management, Brevo for automated emails, and Inngest for background jobs, delivering an end-to-end e-commerce experience from product browsing to verified delivery.",
  image: "/shopcart.jpg",
  tags: ["PERN", "E-Commerce", "PesaPal", "Gps", "Delivery"],
  status: "active",
  techStack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "SQLite",
    "JWT",
    "Cloudinary",
    "Pesapal",
    "Brevo",
    "Inngest",
    "Vercel",
    "Render"
  ],
  features: [
    "Browse, search, and filter grocery products by category and price",
    "Add items to cart and complete checkout with Pesapal (M-Pesa, Airtel, Card)",
    "Track orders in real time with live delivery partner location",
    "Verify deliveries using a secure 6-digit OTP sent via email",
    "Admin dashboard for managing products, orders, and delivery partners",
    "Delivery partner dashboard for viewing and completing assigned deliveries"
  ],
  learningOutcomes: [
    "Full-stack application architecture with TypeScript across frontend and backend.",
    "Payment gateway integration with Pesapal API 3.0 and IPN webhooks.",
    "Role-based authentication and authorization using JWT and custom middleware.",
    "Relational database modeling with Prisma ORM and PostgreSQL.",
    "Background job orchestration with Inngest for automated workflows.",
    "Email automation with Nodemailer and Brevo SMTP.",
    "Production deployment across Vercel, Render, and Neon."
  ],
  links: {
    github: "https://github.com/FREDRICKMUMU/Grocery-Delivery"
  },
  author: "shopcart",
  authorAvatar: "/logo.jpg"
},
 {
  id: "2",
  title: "Agentic Calendar Assistant",
  slug: "agentic-calendar-assistant",
  description: "AI-powered calendar agent for scheduling and managing meetings.",
  detailedDescription:
    "A production-ready Agentic AI application that lets users securely authenticate, connect their Google Calendar, and manage meetings through natural language conversation with an AI agent. Built with Next.js, Express, Descope, Mastra, and PostgreSQL, it streams agent responses, persists conversation history, and exposes capabilities through MCP.",
  image: "/agentic-calendar.jpg",
  tags: ["AI", "Full-Stack", "Agentic AI", "MCP", "Productivity"],
  status: "active",
  techStack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Descope", "Mastra", "Google Calendar API", "Neon", "Tailwind CSS", "shadcn/ui", "MCP"],
  features: [
    "Natural language meeting scheduling and rescheduling.",
    "Secure authentication with Descope and session management.",
    "Google Calendar integration with OAuth connections.",
    "Real-time streaming AI agent responses.",
    "Persistent chat history with conversation threads.",
    "MCP server exposing calendar tools to external AI clients.",
  ],
  learningOutcomes: [
    "Building production-ready Agentic AI applications end-to-end.",
    "Integrating Descope for authentication and OAuth connections.",
    "Designing AI agent workflows with Mastra.",
    "Implementing Server-Sent Events for streaming responses.",
    "Model Context Protocol (MCP) server implementation.",
    "Full-stack architecture with Next.js, Express, and PostgreSQL.",
  ],
  links: {
    github: "https://github.com/FREDRICKMUMU/AgenticCalendar",
  },
  author: "AgenticCalendar",
  authorAvatar: "/logo.jpg",
},
  {
  id: "3",
  title: "LukuApp - Mobile Application",
  slug: "lukuapp-ecommerce",
  description: "Cross platform e-commerce mobile app with Clerk auth and full checkout flow",
  detailedDescription:
    "A production ready e-commerce mobile application built with React Native and Expo, delivering a native shopping experience on Android from a single codebase. Powered by Clerk for user authentication and a Node.js/Express backend with MongoDB, it handles product browsing, cart management, address handling, and secure cash-on-delivery checkout end to end.",
  image: "/lukuapp.jpg",
  tags: ["Mobile App", "Full-Stack", "React Native", "E-Commerce"],
  status: "active",
  techStack: ["React Native", "Expo", "TypeScript", "Clerk Auth", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  features: [
    "Browse products by category with search and filters.",
    "Secure sign-in and sign-up powered by Clerk.",
    "Add to cart and manage quantities in real time.",
    "Save and manage multiple shipping addresses.",
    "Cash-on-delivery checkout with order summary.",
    "Order history and profile management.",
  ],
  learningOutcomes: [
    "Cross-platform mobile development with React Native and Expo.",
    "User authentication and session management with Clerk.",
    "RESTful API design with Node.js and Express.",
    "Schema modeling and validation with Mongoose.",
    "Cloud build and deployment pipelines with EAS.",
    "Debugging dependency conflicts and lockfile integrity issues.",
  ],
  links: {
      visit: "https://expo.dev/accounts/fredmunyao/projects/client/builds/62ee88b0-54a2-46d2-b422-6f4b507a7f3d",
    github: "https://github.com/FREDRICKMUMU/LukuApp",
  },
  author: "LukuApp",
  authorAvatar: "/logo.jpg",
},
  {
  id: "4",
  title: "Social Media Scheduler",
  slug: "social-scheduler",
  description: "AI-powered platform for scheduling and automating social media content across multiple platforms",
  detailedDescription:
    "A full-stack social media management platform built with MERN stack that enables users to generate AI-powered content, schedule posts, and manage multiple social media accounts from a single dashboard. Integrated with Google Gemini for content generation and Leonardo.ai for image creation, it streamlines the entire social media workflow from ideation to publishing.",
  image: "/social-scheduler.jpg",
  tags: ["AI", "SaaS", "MERN", "Full-Stack", "Automation"],
  status: "active",
  techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Gemini AI", "Leonardo.ai", "Cloudinary", "Zernio"],
  features: [
    "AI-powered post generation from text prompts.",
    "Automated image generation with Leonardo.ai.",
    "Multi-platform social media scheduling.",
    "OAuth account connection and management.",
    "Real-time post preview and calendar view.",
    "Activity tracking and analytics dashboard.",
  ],
  learningOutcomes: [
    "Full-stack application development with MERN stack.",
    "Third-party API integration (Gemini, Leonardo.ai, Zernio).",
    "OAuth authentication and social platform connectivity.",
    "Media storage and optimization with Cloudinary.",
    "Scheduled task automation and job polling.",
    "Secure JWT-based user authentication.",
  ],
  links: {
    
    github: "https://github.com/FREDRICKMUMU/social-Media-Schedular",
  },
  author: "Social-Media-Schedular",
  authorAvatar: "/logo.jpg",
},

];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}