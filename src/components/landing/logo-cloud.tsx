import { memo } from "react";
import { COLLEGES } from "@/data/colleges";

const LOGOS: Record<string, string> = {
  rec: "/logos/rec-light.png",
};

export const LogoCloud = memo(function LogoCloud() {
  return (
    <section className="border-b-0 py-16 md:py-20 sm:border-b">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
            Colleges supported
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">REC is live now. More coming soon.</p>
        </div>

        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {COLLEGES.flatMap((college) => {
            const logo = LOGOS[college.id];
            return logo
              ? [
                  <span key={college.id} className="flex items-center justify-center">
                    <img
                      src={logo}
                      alt={college.name}
                      width={1600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="h-20 w-auto max-w-full object-contain"
                    />
                  </span>,
                ]
              : [];
          })}
        </div>
      </div>
    </section>
  );
});
