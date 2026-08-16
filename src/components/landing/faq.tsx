import { memo } from "react";
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

const FAQS: FaqItem[] = [
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
      "It depends on your regulation. Older batches use (CGPA \u2212 0.75) \u00D7 10 and newer batches use CGPA \u00D7 10. The exact formula used is shown next to your percentage, so you always know how it was derived.",
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
      "Grades like U (arrear), SA (shortage of attendance) and WD (withdrawal) carry no credit points, so they are left out. Mandatory non-credit courses are excluded as well, exactly like the official grading scheme.",
  },
  {
    id: "faq-college-list",
    question: "Which colleges does it support?",
    answer:
      "REC, SSN, RIT, MIT, CEG and SKCET. Rajalakshmi Engineering College (REC) is live now and the rest are on the way.",
  },
  {
    id: "faq-college",
    question: "My college is not in the list. When will it be added?",
    answer:
      "New colleges are added regularly. If yours follows Anna University regulations, which most engineering programmes in Tamil Nadu do, you can pick REC today and get accurate results.",
  },
  {
    id: "faq-privacy",
    question: "Is my data safe?",
    answer:
      "Yes. Everything stays in your browser\u2019s local storage. There are no accounts, no servers and no analytics, and clearing your browser data removes everything.",
  },
];

export const FaqSection = memo(function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-14 border-b-0 py-16 sm:border-b md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-6">
          <h2 className="max-w-sm font-display text-4xl font-semibold tracking-tight text-balance text-foreground">
            Frequently asked questions
          </h2>

          <div>
            <Accordion className="w-full">
              {FAQS.map((item) => (
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
