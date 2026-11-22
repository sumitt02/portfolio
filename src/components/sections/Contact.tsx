"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, social } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const channels = [
  { icon: Mail, label: "Email me", value: profile.email, href: social.email },
  { icon: LinkedinIcon, label: "Connect", value: "LinkedIn", href: social.linkedin },
  { icon: GithubIcon, label: "Code", value: "GitHub", href: social.github },
  { icon: Phone, label: "Call", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Based in", value: profile.location, href: null },
];

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-watermark",
        { xPercent: -8 },
        { xPercent: 8, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } },
      );
      gsap.from(".contact-line", {
        yPercent: 105,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".contact-fade", {
        y: 24,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="contact" className="relative overflow-hidden bg-black py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(ellipse_at_30%_0%,rgba(201,178,124,0.14),transparent_60%)]" />
      <span
        aria-hidden
        className="contact-watermark pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 whitespace-nowrap font-display text-[24vw] uppercase leading-none text-white/[0.035]"
      >
        Contact
      </span>

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-14 px-5 sm:px-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="contact-fade inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> 06 · Contact
          </span>
          <h2 className="mt-8 text-[clamp(3rem,6.2vw,6rem)] font-bold leading-[0.98] tracking-[-0.045em]">
            <span className="block overflow-hidden pb-1">
              <span className="contact-line block text-foreground">Let&apos;s build</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="contact-line block text-gold">something</span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="contact-line block text-foreground">meaningful.</span>
            </span>
          </h2>
          <p className="contact-fade mt-6 max-w-md text-base leading-relaxed text-muted">
            Got an idea, a tricky problem, or a role you think I&apos;d be good for? Reach out on any of these
            and I&apos;ll get back to you.
          </p>
        </div>

        <ul className="flex w-full max-w-xl flex-col gap-3 lg:mt-24 lg:justify-self-end">
          {channels.map((c) => {
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-foreground">
                  <c.icon size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-foreground">{c.label}</span>
                  <span className="block truncate text-xs text-muted">{c.value}</span>
                </span>
                {c.href ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:bg-gold group-hover:text-black">
                    <ArrowUpRight size={14} />
                  </span>
                ) : null}
              </>
            );
            const cls =
              "contact-fade group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 pr-4 transition-colors duration-300";
            return (
              <li key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cls + " hover:border-gold-line"}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
