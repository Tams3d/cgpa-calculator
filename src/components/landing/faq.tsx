import { memo } from "react";
import type { College } from "@/types/curriculum";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const REPO_URL = "https://github.com/Tams3d/cgpa-calculator";

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
      ? "If your college is non-autonomous and follows Anna University regulations, pick CEG or MIT - they share the same curriculum, so your results will be accurate."
      : "Autonomous colleges set their own curriculum, so they need their own course data before they can be listed.";

  const contributeLine =
    "This project is open source under the MIT license. To add your college, open an issue or a pull request at " +
    REPO_URL;

  return [
    {
      id: "faq-sgpa-cgpa",
      question: "What is the difference between SGPA and CGPA?",
      answer:
        "SGPA is the credit-weighted average of grade points for one semester. CGPA is the same average rolled up across every semester so far. This tool shows both and updates them as you pick grades.",
    },
    {
      id: "faq-percentage",
      question: "How is my percentage calculated?",
      answer:
        "It depends on your regulation. Older batches use (CGPA - 0.75) x 10 and newer batches use CGPA x 10. The exact formula used is shown next to your percentage, so you always know how it was derived.",
    },
    {
      id: "faq-past-semesters",
      question: "How do I fill in my past semesters?",
      answer:
        "Enter the overall SGPA for each past semester and your CGPA updates instantly. You do not need to re-enter every course from earlier years.",
    },
    {
      id: "faq-exempt-grades",
      question: "Why do some grades not count towards CGPA?",
      answer:
        "WD (withdrawal) carries no credit points, so it is left out. U (arrear) and SA (shortage of attendance) are carried forward instead: they show up in every later semester until you clear them with a passing grade, exactly like the official grading scheme.",
    },
    {
      id: "faq-college-list",
      question: "Which colleges does it support?",
      answer: `Live now: ${liveList}. ${comingSoonList ? `${comingSoonList} are on the way.` : ""}`,
    },
    {
      id: "faq-college",
      question: "My college is not in the list. What can I do?",
      answer: `${collegeStatusLine} ${contributeLine}`,
    },
    {
      id: "faq-contribute",
      question: "How can I contribute a new college?",
      answer: `${contributeLine} Curriculum data lives in plain TypeScript files, so adding a college is mostly data entry. Any fix or improvement is welcome.`,
    },
    {
      id: "faq-privacy",
      question: "Is my data safe?",
      answer:
        "Yes. Your grades stay only in your browser's local storage; there are no accounts and no servers. Clearing your browser data removes everything.",
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
