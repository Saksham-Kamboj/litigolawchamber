export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#courts", label: "Courts" },
  { href: "#team", label: "Team" },
  { href: "#values", label: "Values" },
  { href: "#contact", label: "Contact" },
];

export const STATS = [
  { num: "4+", label: "High Courts" },
  { num: "10+", label: "Tribunals & Forums" },
  { num: "7+", label: "Practice Areas" },
  { num: "∞", label: "Client Trust" },
];

export const SERVICES = [
  {
    title: "Civil Matters",
    desc: "Recovery suits, stay & injunction, contractual disputes, property matters, arbitration, motor accidents, consumer cases, and drafting of all types of contracts.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    title: "Writs",
    desc: "Filing writs under Articles 32, 226 & 227 of the Constitution — Fundamental Rights, civil liberties, and challenging governmental actions before High Courts and Supreme Court.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Corporate Litigation",
    desc: "Petitions before Debt Recovery Tribunals, Appellate Tribunals, High Courts and Supreme Court on behalf of banks, financial institutions, and public organizations.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Intellectual Property",
    desc: "IPR infringement cases, trademark registration, injunction suits, and comprehensive protection of intellectual property assets across various forums.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Criminal Matters",
    desc: "Criminal appeals, writs, FIR quashing, bail matters, crimes against women, cheque dishonour, private complaints for cheating, fraud & breach of trust.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  },
  {
    title: "Alternate Dispute Resolution",
    desc: "Arbitration, conciliation and mediation services — providing a refreshing break from prolonged litigation with unparalleled resolution abilities.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

export const COURTS = [
  { name: "Supreme Court of India", highlighted: true },
  { name: "High Court of Uttarakhand at Nainital", highlighted: false },
  { name: "High Court of Delhi at Delhi", highlighted: false },
  { name: "High Court of Sikkim at Gangtok", highlighted: false },
  { name: "High Court of Uttar Pradesh at Allahabad", highlighted: false },
  {
    name: "National Consumer Disputes Redressal Commission, New Delhi",
    highlighted: false,
  },
  { name: "Central Administrative Tribunal at Nainital", highlighted: false },
  { name: "Debt Recovery Tribunal, Dehradun", highlighted: false },
  { name: "District Court & Labour Courts, Dehradun", highlighted: false },
  {
    name: "Real Estate Regulatory Authority & Appellate Tribunal, Dehradun",
    highlighted: false,
  },
  {
    name: "District & State Consumer Disputes Redressal Forums",
    highlighted: false,
  },
];

export const TEAM_FOUNDER = {
  name: "Naman Kamboj",
  role: "Founder & Director",
  badge: "Founder & Managing Partner",
  bio: "Mr. Naman Kamboj is the founder of the firm and oversees key management and operational procedures. With an impressive background including Research Assistant cum Law Clerkship to Hon'ble Chief Justice Dipak Misra of the Supreme Court of India, he effectively handles complex litigations across High Courts and the Supreme Court.",
  expertise: [
    "Civil Litigation",
    "Criminal Matters",
    "High Courts",
    "Supreme Court",
    "SC Law Clerk",
  ],
};

export const TEAM_MEMBERS = [
  {
    role: "Senior Associate",
    name: "Narendra Singh",
    specialty: "Trial including Original Civil Suits",
  },
  {
    role: "Associate",
    name: "Prasanna Karnatak",
    specialty: "Appellate Jurisdiction",
  },
  {
    role: "Associate",
    name: "Divyansh Rohilla",
    specialty: "Original Civil Suits & Other Forums",
  },
  {
    role: "Associate",
    name: "Siddharth Gupta",
    specialty: "Trial including Legal Research",
  },
  { role: "Associate", name: "Ms. Namrata", specialty: "Legal Compliances" },
  {
    role: "Clerk",
    name: "Karan Kumar",
    specialty: "High Court Work at Nainital",
  },
  {
    role: "Clerk",
    name: "Vijay Singh",
    specialty: "District Courts & Forums at Dehradun",
  },
];

export const VALUES = [
  {
    letter: "I",
    title: "Integrity",
    desc: "Every act is taken in a manner that is fair, honest, and in the best interest of the client and society. The cornerstone of all our dealings.",
  },
  {
    letter: "P",
    title: "Passion",
    desc: "A tremendous zeal for law and justice. Emotional attachment with work inspires every member to give their best with enthusiasm.",
  },
  {
    letter: "R",
    title: "Responsibility",
    desc: "We realize every case can have profound ramifications on the lives of people and the functioning of organizations. We never take that lightly.",
  },
  {
    letter: "T",
    title: "Trust",
    desc: "Members are trusted with their work while appropriate checks ensure quality is never compromised. Openness and free flow of ideas define our culture.",
  },
];

export const STRENGTHS = [
  "Pool of experienced advocates in diverse fields",
  "Unparalleled mediation and conciliation abilities",
  "Strong hold over constitutional provisions",
  "Commitment to client's solace & satisfaction",
];
