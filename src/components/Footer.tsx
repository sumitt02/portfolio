import { profile, social } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex items-baseline gap-2 text-sm font-bold text-foreground">
          ©2026
          <span className="font-script text-3xl font-normal leading-none text-gold">{profile.name.split(" ")[0]}</span>
          <span className="ml-2 text-xs font-medium text-muted-2">{profile.name}. All rights reserved.</span>
        </div>
        <ul className="flex gap-6 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
          <li>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold">LinkedIn</a>
          </li>
          <li>
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-gold">GitHub</a>
          </li>
          <li>
            <a href={social.email} className="hover:text-gold">Email</a>
          </li>
          <li>
            <a href="#" className="hover:text-gold">Back to top ↑</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
