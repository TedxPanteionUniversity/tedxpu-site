"use client";

import { navItems } from "@/data/navigation";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.38;
      const activeId =
        sectionIds.find((sectionId) => {
          const section = document.getElementById(sectionId);

          if (!section) {
            return false;
          }

          const rect = section.getBoundingClientRect();
          return rect.top <= marker && rect.bottom > marker;
        }) ?? null;

      setActiveHref((currentHref) => {
        const nextHref = activeId ? `#${activeId}` : null;
        return currentHref === nextHref ? currentHref : nextHref;
      });
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sectionIds]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-[9999] bg-white/90 backdrop-blur px-5 sm:px-8 lg:px-9">
      <div className="header-inner flex items-start justify-between gap-6">
        <a href="#hero" className="block shrink-0" aria-label="TEDx Panteion University home">
          <Image
            src="/assets/tedxpu-logo.png"
            alt="TEDx Panteion University"
            width={1364}
            height={492}
            priority
            className="header-logo h-auto w-33 sm:w-90"
          />
        </a>

        <nav
          aria-label="Primary navigation"
          className="primary-nav flex flex-wrap justify-end gap-x-8 gap-y-2 pt-18 text-[17px] font-extralight italic tracking-[0] text-black sm:gap-x-11 sm:text-[32px]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className={activeHref === item.href ? "nav-link nav-link-active" : "nav-link"}
              href={item.href}
              aria-current={activeHref === item.href ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
