import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { profile, social } from "@/lib/data";

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string | null;
  label: string;
  children: React.ReactNode;
}) {
  const className =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors duration-200";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={`${label} — not provided`}
        className={className + " cursor-not-allowed text-muted-2 opacity-50"}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={className + " text-muted hover:border-accent-line hover:text-accent"}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-medium text-foreground">{profile.name}</span>

          <div className="flex items-center gap-3">
            <FooterIcon href={social.linkedin} label="LinkedIn">
              <LinkedinIcon size={15} />
            </FooterIcon>
            <FooterIcon href={social.github} label="GitHub">
              <GithubIcon size={15} />
            </FooterIcon>
            <FooterIcon href={social.email} label="Email">
              <Mail size={15} />
            </FooterIcon>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {profile.name}. All rights reserved.</span>
          <span>Built with Next.js, TypeScript &amp; Tailwind CSS.</span>
        </div>
      </Container>
    </footer>
  );
}
