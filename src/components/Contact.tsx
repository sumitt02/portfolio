import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLink } from "@/components/ui/SocialLink";
import { profile, social } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="rounded-3xl border border-border-strong bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <Reveal>
            <p className="font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Have a problem worth building?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
              I&apos;m always interested in interesting engineering problems,
              products, and opportunities.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <SocialLink href={social.email} variant="solid">
                <Mail size={16} />
                Email Me
              </SocialLink>
              <SocialLink href={social.linkedin}>
                <LinkedinIcon size={16} />
                LinkedIn
              </SocialLink>
              <SocialLink href={social.github}>
                <GithubIcon size={16} />
                GitHub
              </SocialLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-8 font-mono-tech text-xs text-muted-2">
              {profile.email} · {profile.phone} · {profile.location}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
