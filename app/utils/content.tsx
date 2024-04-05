import { GithubIcon, Linkedin, Mail } from "lucide-react";

export const contacts = [
  {
    name: "Github",
    link: "https://github.com/rodolphoasb",
    icon: <GithubIcon className="h-4 w-4 text-zinc-400" />,
  },
  {
    name: "Email",
    link: "mailto:bravorodolpho@gmail.com",
    icon: <Mail className="h-4 w-4 text-zinc-400" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rodolpho-bravo-43a4b0239/",
    icon: <Linkedin className="h-4 w-4 text-zinc-400" />,
  },
  {
    name: "X",
    link: "https://twitter.com/rodolphobravo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 24 24"
      >
        <path
          fill="#a1a1aa"
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z"
        ></path>
      </svg>
    ),
  },
];

export const skills = [
  "Typescript",
  "React",
  "React Native",
  "Node.js",
  "Tailwind CSS",
  "Serverless",
  "AWS",
];

export const experience = [
  {
    company: "Til",
    shouldShowDescriptions: true,
    externalLink: "https://til.co?utm_source=https://www.rbravo.dev",
    hasHighlights: true,
    positions: [
      {
        role: "Full Stack Engineer (Full Time)",
        startDate: "Jun/22",
        endDate: "Current",
        description: (
          <div>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              As the second engineer at the company, I was responsible for
              helping to ship the first version of the web and mobile app to
              production.
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              Technologies used: React/NextJS, Prisma, TailwindCSS, Typescript,
              tRPC, React Native.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    company: "Loops",
    hasHighlights: true,
    externalLink: "https://loops.so?utm_source=https://www.rbravo.dev",
    shouldShowDescriptions: true,
    positions: [
      {
        role: "Full Stack Engineer (Freelancer)",
        startDate: "Jan/22",
        endDate: "Jun/22",
        description: (
          <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
            As the third engineer at the company, I helped develop the initial
            version of an innovative email-sending platform tailored for SaaS
            companies, using technologies such as React/NextJS, Prisma,
            TailwindCSS, and TypeScript.
          </p>
        ),
      },
    ],
  },
  {
    company: "Ticketteer",
    shouldShowDescriptions: true,
    externalLink: "https://ticketteer.com?utm_source=https://www.rbravo.dev",
    positions: [
      {
        role: "Frontend Developer (Freelancer)",
        startDate: "Jan/22",
        endDate: "Mar/22",
        description: (
          <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
            Development of Admin panel and the initial part of the store web
            application. Technologies used:, React/Next.js, Cypress (E2E Tests),
            GraphQL (Apollo Client) and Tailwind CSS.
          </p>
        ),
      },
    ],
  },
  {
    company: "Livance",
    shouldShowDescriptions: true,
    externalLink:
      "https://www.livance.com.br?utm_source=https://www.rbravo.dev",
    positions: [
      {
        role: "Frontend Developer (Freelancer)",
        startDate: "Jan/21",
        endDate: "Jan/22",
        description: (
          <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
            Website development and maintenance using Webflow, JQuery, and
            Zapier integrations. The website was made for a Brazilian Startup
            that enables doctors and psychologists to have an office room in a
            much easier way (WeWork for doctors). To date (Jan/24), the company
            has raised more than 25 million dollars.
          </p>
        ),
      },
    ],
  },
  {
    company: "Orda",
    externalLink: "https://www.getorda.com?utm_source=https://www.rbravo.dev",
    positions: [
      {
        role: "Frontend Developer (Freelancer)",
        startDate: "Nov/21",
        endDate: "Dec/21",
        description: (
          <div>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              I've worked with them developing the frontend part of the
              marketing website. I've created: Reusable components,
              documentation on how to modify the style and content of the
              components, a structure where their marketing team could upload
              posts using an almost "no-code" solution using just markdown
              files.
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              Technologies used:
            </p>
            <ul className="ml-6 mt-1 list-disc font-mono text-xs font-medium text-zinc-500">
              <li>React/Next.js</li>
              <li>Tailwind CSS</li>
              <li>Typescript</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    company: "Collegia",
    externalLink:
      "https://www.collegia.co.uk?utm_source=https://www.rbravo.dev",
    positions: [
      {
        role: "Frontend Developer (Freelancer)",
        startDate: "Apr/21",
        endDate: "Dec/21",
        description: (
          <div>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              Development of their marketing website and some landing pages.
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              Technologies used:
            </p>
            <ul className="ml-6 mt-1 list-disc font-mono text-xs font-medium text-zinc-500">
              <li>Webflow</li>
              <li>Custom Javascript for animations and form validations</li>
              <li>Zapier integrations</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    company: "Grupo Santander",
    positions: [
      {
        role: "Commercial Manager (Full Time)",
        startDate: "May/19",
        endDate: "Oct/20",
        description: (
          <div>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              In this role, I was responsible to bring in new clients and make
              sure that we were maximizing our business transactions with them
              while also keeping a high NPS.
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              During my period in this role, I was responsible to bring in
              almost 8 new clients (all of them with revenue per years &gt; BRL
              20 million). And I've increased the asset wallet for which I was
              responsible by almost 12 million.
            </p>
          </div>
        ),
      },
      {
        role: "Commercial Assistant (Full Time)",
        startDate: "May/17",
        endDate: "May/19",
        description: (
          <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
            Management support and customer success in the E3 segment
            (Businesses), within a unit with an asset portfolio of over 200 MM
            BRL.
          </p>
        ),
      },
    ],
  },
];

export const projects = [
  {
    name: "Til",
    description: "Learn guitar with the pros.",
    tags: ["React", "Typescript", "Next.js", "Tailwind CSS", "Node.js", "AWS"],
    link: "https://til.co?utm_source=https://www.rbravo.dev",
  },
  {
    name: "Loops",
    description: "A better way to send marketing + transactional email.",
    tags: ["React", "Typescript", "Next.js", "Tailwind CSS", "AWS"],
    link: "https://loops.so?utm_source=https://www.rbravo.dev",
    yc: true,
  },
  {
    name: "Zencart",
    description:
      "Get orders fast on WhatsApp: Show your catalog, and connect with customers.",
    tags: ["Typescript", "Remix", "Tailwind CSS", "Cloudflare", "OSS"],
    link: "https://zencart.io?utm_source=https://www.rbravo.dev",
    sideProject: true,
  },
  {
    name: "Mercado Rural",
    description: "A marketplace for rural products.",
    tags: ["React", "Typescript", "Next.js", "Tailwind CSS", "Node.js", "AWS"],
    link: "https://mercadorural.org?utm_source=https://www.rbravo.dev",
    sideProject: true,
  },
  {
    name: "Livance",
    description:
      "A platform that allows doctors and psychologists to have an office room in a much easier way (WeWork for doctors).",
    tags: ["Webflow", "JQuery", "Zapier"],
    link: "https://www.livance.com.br?utm_source=https://www.rbravo.dev",
  },
];
