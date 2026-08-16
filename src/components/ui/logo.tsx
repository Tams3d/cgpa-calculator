import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
      <path d="M4 18.5V13.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M9.5 18.5V10.75" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M15 18.5V8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M20.5 18.5V5.25" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M3 19.5h18.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
