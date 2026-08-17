import { memo } from "react";
import type { ReactNode } from "react";
import type { College } from "@/types/curriculum";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const REPO_URL = "https://github.com/Tams3d/cgpa-calculator";

interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

function buildFaqs(college: College, colleges: College[]): FaqItem[] {
  const liveColleges = colleges.filter((c) => c.available !== false);
  const liveNames = liveColleges.map((c) => c.shortName);
  const liveList = joinNames(liveNames);
  const comingSoonList = joinNames(
    colleges.filter((c) => c.available === false).map((c) => c.shortName),
  );

  const isSelectedLive = college.available !== false;
  const collegeStatusLine = isSelectedLive
    ? `${college.name} is fully supported, so you can start entering grades right away.`
    : college.autonomy === "non-autonomous"
      ? "If your college is non-autonomous and follows Anna University regulations, pick CEG or MIT — they share the same curriculum, so your results will be accurate."
      : "Autonomous colleges set their own curriculum, so they need their own course data before they can be listed.";

  return [
    {
      id: "faq-cgpa",
      question: "How is my CGPA calculated?",
      answer:
        "CGPA is the credit-weighted average of your grade points across every semester so far, while SGPA is the same average for a single semester. This tool shows both and updates them live as you pick grades.",
    },
    {
      id: "faq-percentage",
      question: "How is my percentage calculated?",
      answer:
        "It depends on your regulation. Older batches use (CGPA - 0.75) x 10 and newer batches use CGPA x 10. The exact formula used is shown next to your percentage.",
    },
    {
      id: "faq-college",
      question: "Which colleges are supported?",
      answer: (
        <>
          Live now: {liveList}.{comingSoonList ? ` ${comingSoonList} are on the way.` : ""} Not
          listed? {collegeStatusLine}
        </>
      ),
    },
    {
      id: "faq-privacy",
      question: "Is my data safe?",
      answer:
        "Yes. Your grades stay only in your browser's local storage. There are no accounts and no servers, and clearing your browser data removes everything.",
    },
    {
      id: "faq-contribute",
      question: "How can I contribute?",
      answer: (
        <>
          This project is open source under the MIT license. Curriculum data lives in plain
          TypeScript files, so adding a college is mostly data entry.{" "}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Contribute on GitHub
          </a>
        </>
      ),
    },
  ];
}

export const FaqSection = memo(function FaqSection({
  college,
  colleges,
}: {
  college: College;
  colleges: College[];
}) {
  const faqs = buildFaqs(college, colleges);

  return (
    <section id="faq" className="scroll-mt-14 border-b-0 py-16 sm:border-b md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-6">
          <h2 className="max-w-sm font-display text-4xl font-semibold tracking-tight text-balance text-foreground">
            Frequently asked questions
          </h2>

          <div>
            <Accordion className="w-full">
              {faqs.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-dashed">
                  <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base leading-relaxed text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
});
