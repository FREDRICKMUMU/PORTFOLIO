"use client"


import { aboutPageStyles } from "@/public/dummyStyles";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import Link from "next/link";

export default function AboutPage() {
  const interests = [
    "FULL-STACK DEV",
    "SPORTS",
    "LLMS",
    "MUSIC",
    "AGENTIC AI",
    "AUTOMATION",
    "READING",
    "ESPAÑOL"
  ];

 

  const email = "fredmunyao70@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

 return (
  <div className={aboutPageStyles.pageContainer}>
    <div className={aboutPageStyles.contentContainer}>
      <div className={aboutPageStyles.backgroundContainer}>

        <div className={aboutPageStyles.backgroundEffect}>
          <BackgroundBeamsWithCollision />
        </div>

        <div className={aboutPageStyles.contentWrapper}>

         <h1 className={aboutPageStyles.mainHeading}>About Me</h1>

          <div className={aboutPageStyles.interestsContainer}>
            {interests.map((interest, index) => (
              <span key={interest} className={aboutPageStyles.interestItem}>
                {interest}
                {index < interests.length - 1 && (
                  <span className={aboutPageStyles.interestSeparator}>.</span>
                )}
              </span>
            ))}
          </div>

          

          <div className={aboutPageStyles.sectionsContainer}>
            <section>
              <h2 className={aboutPageStyles.sectionHeading}>Who I Am</h2>
<p className={aboutPageStyles.paragraph}>
I&apos;m Fred, a self-taught full-stack developer with 4+ years of experience building products that ship. From web apps to AI-powered tools
to automation pipelines, I focus on software that solves real
problems and stays reliable.
</p>
            </section>

            <section>
              <h2 className={aboutPageStyles.sectionHeading}>What I Do</h2>
   <p className={aboutPageStyles.paragraph}>
  Currently a Freelance Full-Stack Developer, delivering web and
  mobile solutions across React, Next.js, Node.js, and React Native.
  I focus on solving real-world problems and building products people
  actually use daily, not just demos.
</p>
            </section>

           <section>
  <h2 className={aboutPageStyles.sectionHeading}>My Journey</h2>
<p className={aboutPageStyles.paragraph}>
  My journey began with frontend work, building responsive interfaces for real
  estate and business clients. Early on I worked under senior and
  backend developers, connecting frontend interfaces to REST APIs
  and learning how production systems really fit together. From
  there I grew into full-stack development, building complete web
  and mobile apps end to end. Along the way I shipped ShopCart,
  Agentic Calendar, LukuApp, among other projects. Working across
  teams and under senior developers on various projects has taught me
  the value of collaboration and shaped how I build today.
</p>
</section>

            <section>
              <h2 className={aboutPageStyles.sectionHeading}>Vision</h2>
             <p className={aboutPageStyles.paragraph}>
  AI and automation aren&apos;t the future,they&apos;re already here.
  I focus on building practical AI tools and automation workflows
  that solve real problems today, while staying close to where the
  technology is heading next.
</p>
            </section>

           
          </div>

          <div className={aboutPageStyles.ctaContainer}>
            <Link
              href="/contact"
              className={aboutPageStyles.primaryButton}
              aria-label="Get in touch — open contact page"
            >
              Get in Touch
            </Link>

            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={aboutPageStyles.secondaryButton}
              aria-label={`Compose email to ${email} in Gmail`}
            >
              <svg
                className={aboutPageStyles.emailIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              E-Mail
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
)};