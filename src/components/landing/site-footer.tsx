import { memo, useEffect } from "react";
import { GitHubMark, LinkedinMark, DiscordMark } from "@/components/ui/brand-icon";

const SOCIAL_LINKS = [
  { href: "https://github.com/Tams3d", label: "GitHub", Icon: GitHubMark },
  { href: "https://www.linkedin.com/in/tamilselvan29/", label: "LinkedIn", Icon: LinkedinMark },
  { href: "https://discord.com/users/947461185530372146", label: "Discord", Icon: DiscordMark },
];

export const SiteFooter = memo(function SiteFooter() {
  useEffect(() => {
    const el = document.getElementById("footer-email") as HTMLAnchorElement | null;
    if (el) {
      el.href = `mailto:${el.dataset.user}@${el.dataset.domain}`;
    }
  }, []);

  return (
    <footer className="mx-auto max-w-172.5 px-4 pt-4 pb-8 sm:px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>

        <p className="max-w-xs text-sm text-muted-foreground">
          Down for hackathons, internships, and research. Wanna connect?{" "}
          <a
            id="footer-email"
            data-user="stamilselvan.tams"
            data-domain="gmail.com"
            className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-primary hover:decoration-primary"
          >
            Email me
          </a>
          <noscript>stamilselvan.tams [at] gmail.com</noscript>
        </p>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Tamilselvan
        </p>
      </div>
    </footer>
  );
});

export const SiteWatermark = memo(function SiteWatermark() {
  return (
    <div aria-hidden className="overflow-hidden">
      <div className="translate-y-[22.5%] mask-[linear-gradient(to_bottom,black_0%,white_50%,transparent_100%)] select-none whitespace-nowrap text-balance text-center text-[15.5vw] font-semibold leading-none tracking-tighter">
        TAMILSELVAN
      </div>
    </div>
  );
});
