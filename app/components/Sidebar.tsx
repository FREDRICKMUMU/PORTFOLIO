"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarStyles as s } from "@/public/dummyStyles";
import { TypingAnimation } from "@/app/components/ui/typing-animation"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { HiHome, HiFolder, HiBriefcase, HiWrenchScrewdriver, HiUser, HiEnvelope } from "react-icons/hi2"
import { HiMenu, HiX } from "react-icons/hi"

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest(".mobile-sidebar") && !target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/", label: "Home", Icon: HiHome },
    { href: "/projects", label: "Projects", Icon: HiFolder },
    { href: "/experience", label: "Experience", Icon: HiBriefcase },
    { href: "/tools", label: "Skills", Icon: HiWrenchScrewdriver },
    { href: "/about", label: "About", Icon: HiUser },
    { href: "/contact", label: "Contact", Icon: HiEnvelope },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/FREDRICKMUMU",
      icon: <FaGithub className="w-4 h-4" />,
      text: "FREDRICKMUMU",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/fredmumu2",
      icon: <FaXTwitter className="w-4 h-4" />,
      text: "@fredmumu2",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fred-munyao-07a347418",
      icon: <FaLinkedin className="w-4 h-4" />,
      text: "Fred Munyao",
    },
    {
      label: "Email",
      href: "mailto:fredmunyao70@gmail.com",
      icon: <FaEnvelope className="w-4 h-4" />,
      text: "fredmunyao70@gmail.com",
    },
  ];

  const typingWords = [
    "Full-Stack Developer",
    "Agentic AI Builder",
    "Freelancer",
    "Web Developer",
    "Mobile App Developer",
    "Problem Solver",
    "AI & Automation",
  ];

  return (
    <>
      <div className={s.mobileTopNav}>
        <div className={s.mobileTopNavInner}>
          <div className={s.mobileAvatarContainer}>
            <div className={s.mobileAvatar}>
              <Image src="/logo.jpg" alt="Fred Munyao" width={40} height={40} className={s.mobileAvatarImage} priority />
            </div>
            <div>
              <div className={s.mobileName}>Fred Munyao</div>
              <TypingAnimation className={s.mobileTyping} words={typingWords} loop />
            </div>
          </div>
        </div>
      </div>

      <aside className={s.desktopSidebar} aria-labelledby="desktop-sidebar">
        <div className={s.desktopAvatarContainer}>
          <div className={s.desktopAvatar}>
            <Image src="/logo.jpg" alt="Fred Munyao" width={48} height={48} className={s.desktopAvatarImage} priority />
          </div>
          <div>
            <div className={s.desktopName}>Fred Munyao</div>
            <TypingAnimation className={s.desktopTyping} words={typingWords} loop />
          </div>
        </div>

        <nav id="desktop-sidebar" className={s.navContainer} aria-label="Primary">
          <ul className={s.navList}>
            {navItems.map(({ href, label, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${s.navItem} ${pathname === href ? s.navItemActive : s.navItemInactive}`}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  <span className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className={s.navLabel}>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={s.connectLabel}>Connect</div>

          <div className="space-y-3 mt-3">
            {socials.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target={soc.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-zinc-100 transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                  {soc.icon}
                </span>
                <span className="text-xs truncate">{soc.text}</span>
              </a>
            ))}
          </div>
        </nav>
      </aside>

      <div className={`${s.mobileOverlay} ${isMobileMenuOpen ? s.mobileOverlayVisible : s.mobileOverlayHidden}`}>
        <div
          className={`${s.mobileOverlayBg} ${isMobileMenuOpen ? s.mobileOverlayBgVisible : s.mobileOverlayBgHidden}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`${s.mobileSidebar} ${isMobileMenuOpen ? s.mobileSidebarVisible : s.mobileSidebarHidden}`}>
          <div className={s.mobileSidebarHeader}>
            <div className={s.mobileHeaderInner}>
              <div className={s.mobileAvatarContainer}>
                <div className={s.mobileAvatar}>
                  <Image src="/logo.jpg" alt="Fred Munyao" width={40} height={40} className={s.mobileAvatarImage} priority />
                </div>
                <div>
                  <div className={s.mobileName}>Fred Munyao</div>
                  <TypingAnimation className={s.mobileTyping} words={typingWords} loop />
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className={s.mobileCloseButton} aria-label="Close Menu">
                <HiX className="w-5 h-5 text-zinc-400" />
              </button>
            </div>
          </div>

          <div className={s.mobileContent}>
            <nav className="mb-8">
              <div className={s.mobileSectionLabel}>Menu</div>
              <ul className={s.mobileNavList}>
                {navItems.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <Link
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`${s.mobileNavItem} ${pathname === href ? s.navItemActive : s.navItemInactive}`}
                      aria-current={pathname === href ? "page" : undefined}
                      href={href}
                    >
                      <span className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className={s.mobileNavLabel}>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={s.mobileSocialSection}>
              <div className={s.mobileSectionLabel}>Connect</div>
              <div className="space-y-3">
                {socials.map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target={soc.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-300 hover:text-zinc-100 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                      {soc.icon}
                    </span>
                    <span className="text-xs truncate">{soc.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={s.mobileFooter}>
            <div className={s.mobileFooterLabel}>Reach out ➔</div>
            <div className={s.mobileFooterText}>
              <div>Designed & Built by Fred | © 2026</div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.bottomNav}>
        <div className={s.bottomNavContainer}>
          <div className={s.bottomNavInner}>
            <div className={s.bottomNavBar}>
             <div className={s.bottomNavGrid}>
  {navItems.map(({ href, label, Icon }) => (
    <Link
      key={href}
      href={href}
      className={s.bottomNavLink}
      aria-label={label}
    >
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
          pathname === href
            ? "bg-blue-500/20 text-blue-400"
            : "bg-zinc-800 text-blue-400"
        }`}
      >
        <Icon className="w-3.5 h-3.5" />
      </span>
    </Link>
  ))}
</div>
              <div className={s.bottomNavDivider}></div>
             <button onClick={() => setIsMobileMenuOpen(true)} className={s.bottomMenuButton} aria-label="Open Menu">
  <span className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
    <HiMenu className="w-3.5 h-3.5" />
  </span>
</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
