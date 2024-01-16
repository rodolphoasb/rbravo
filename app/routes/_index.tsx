import { BoltIcon } from '@heroicons/react/16/solid'
import type { MetaFunction } from '@remix-run/node'
import { GithubIcon, Globe2Icon, InfoIcon, Linkedin, Mail } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/tooltip'

export const meta: MetaFunction = () => {
  return [
    { title: 'Rodolpho Bravo - CV' },
    {
      name: 'description',
      content:
        '🇧🇷 • Building beautiful things for the web and sharing my learnings along the way',
    },
  ]
}

const contacts = [
  {
    name: 'Github',
    link: 'https://github.com/rodolphoasb',
    icon: <GithubIcon className="h-4 w-4 text-zinc-400" />,
  },
  {
    name: 'Email',
    link: 'mailto:bravorodolpho@gmail.com',
    icon: <Mail className="h-4 w-4 text-zinc-400" />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rodolpho-bravo-43a4b0239/',
    icon: <Linkedin className="h-4 w-4 text-zinc-400" />,
  },
  {
    name: 'X',
    link: 'https://twitter.com/rodolphobravo',
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
]

const skills = [
  'Typescript',
  'React',
  'React Native',
  'Node.js',
  'Tailwind CSS',
  'Serverless',
  'AWS',
]

const experience = [
  {
    company: 'Til',
    shouldShowDescriptions: true,
    externalLink: 'https://til.co?utm_source=https://www.rbravo.dev',
    hasHighlights: true,
    positions: [
      {
        role: 'Full Stack Engineer (Full Time)',
        startDate: 'May/23',
        endDate: 'Current',
        description: (
          <div>
            <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
              Second engineer at the company. I was responsible to help shipping
              to production the first version of the web and mobile app.
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
    company: 'Loops',
    hasHighlights: true,
    externalLink: 'https://loops.so?utm_source=https://www.rbravo.dev',
    shouldShowDescriptions: true,
    positions: [
      {
        role: 'Full Stack Engineer (Freelancer)',
        startDate: 'Jan/23',
        endDate: 'May/23',
        description: (
          <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
            Development of the initial version of an email-sending platform
            built for SaaS companies. Technologies used: React/NextJS, Prisma,
            TailwindCSS, Typescript.
          </p>
        ),
      },
    ],
  },
  {
    company: 'Ticketteer',
    shouldShowDescriptions: true,
    externalLink: 'https://ticketteer.com?utm_source=https://www.rbravo.dev',
    positions: [
      {
        role: 'Frontend Developer (Freelancer)',
        startDate: 'Jan/23',
        endDate: 'May/23',
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
    company: 'Livance',
    shouldShowDescriptions: true,
    externalLink:
      'https://www.livance.com.br?utm_source=https://www.rbravo.dev',
    positions: [
      {
        role: 'Frontend Developer (Freelancer)',
        startDate: 'Jan/23',
        endDate: 'May/23',
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
    company: 'Orda',
    externalLink: 'https://www.getorda.com?utm_source=https://www.rbravo.dev',
    positions: [
      {
        role: 'Frontend Developer (Freelancer)',
        startDate: 'Sep/20',
        endDate: 'Dec/22',
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
    company: 'Collegia',
    externalLink:
      'https://www.collegia.co.uk?utm_source=https://www.rbravo.dev',
    positions: [
      {
        role: 'Frontend Developer (Freelancer)',
        startDate: 'Apr/21',
        endDate: 'Dec/21',
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
    company: 'Grupo Santander',
    positions: [
      {
        role: 'Commercial Manager (Full Time)',
        startDate: 'May/19',
        endDate: 'Oct/20',
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
        role: 'Commercial Assistant (Full Time)',
        startDate: 'May/17',
        endDate: 'May/19',
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
]

const projects = [
  {
    name: 'Til',
    description: 'Learn guitar with the pros.',
    tags: ['React', 'Typescript', 'Next.js', 'Tailwind CSS', 'Node.js', 'AWS'],
    link: 'https://til.co?utm_source=https://www.rbravo.dev',
  },
  {
    name: 'Loops',
    description: 'A better way to send marketing + transactional email',
    tags: ['React', 'Typescript', 'Next.js', 'Tailwind CSS', 'AWS'],
    link: 'https://loops.so?utm_source=https://www.rbravo.dev',
  },
  {
    name: 'Mercado Rural',
    description: 'A marketplace for rural products.',
    tags: ['React', 'Typescript', 'Next.js', 'Tailwind CSS', 'Node.js', 'AWS'],
    link: 'https://mercadorural.org?utm_source=https://www.rbravo.dev',
  },
  {
    name: 'Livance',
    description:
      'A platform that allows doctors and psychologists to have an office room in a much easier way (WeWork for doctors).',
    tags: ['Webflow', 'JQuery', 'Zapier'],
    link: 'https://www.livance.com.br?utm_source=https://www.rbravo.dev',
  },
]

export default function Index() {
  return (
    <div className="mx-auto mt-16 flex max-w-2xl px-8 sm:px-0">
      <div className="flex flex-col">
        <div className="flex gap-x-4">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Rodolpho Bravo</h1>
            <p className="mt-2 font-mono text-sm text-zinc-500">
              Product Engineer with an eye for design, used to work on Full
              Stack roles using Typescript.
            </p>
            <div className="mt-2 flex items-center gap-x-2">
              <Globe2Icon className="h-3 w-3 text-zinc-400" />
              <a
                href="https://www.google.com/maps/@-16.693818,-49.260109,15z"
                target="_blank"
                className="font-mono text-xs text-zinc-600 hover:text-zinc-500 hover:underline hover:decoration-dotted"
                rel="noreferrer noopener"
              >
                Goiânia, Brazil
              </a>
            </div>
            <div className="mt-4 flex items-center gap-x-2">
              {contacts.map(({ name, link, icon }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-300 font-mono text-xs text-zinc-600 hover:border-zinc-400 hover:text-zinc-500"
                  rel="noreferrer noopener"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="block h-[100px] w-[100px] shrink-0">
            <img
              className="h-[100px] w-[100px] rounded-full object-cover"
              src="/images/profilePhoto.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold">About me</h3>
          <p className="font-mono text-sm text-zinc-500">
            I'm a full stack software engineer based in Brazil with 4 years of
            experience in the software industry.{' '}
          </p>
          <br />
          <p className="font-mono text-sm text-zinc-500">
            I am very experienced in working with Typescript, React(Next.js and
            Remix), React Native, Node.js, Tailwind CSS, and serverless
            architecture in general.
          </p>
          <br />
          <p className="font-mono text-sm text-zinc-500">
            I especially enjoy working on difficult problems.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <div className="inline-block" key={skill}>
                {tagComponent({ name: skill })}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <h3 className="mb-2 text-xl font-bold">Experience</h3>
          {experience.map(
            ({
              company,
              positions,
              hasHighlights,
              shouldShowDescriptions,
              externalLink,
            }) => (
              <div key={company} className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    {externalLink ? (
                      <a
                        href={externalLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-semibold hover:underline hover:decoration-dotted"
                      >
                        {company}
                      </a>
                    ) : (
                      <h4 className="font-semibold">{company}</h4>
                    )}
                    {hasHighlights ? (
                      <span>
                        <BoltIcon className="h-4 w-4 text-yellow-400" />
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="mt-2">
                  {positions.map(
                    ({ role, startDate, endDate, description }) => (
                      <div className="flex flex-col" key={role}>
                        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                          <div className="flex gap-x-2">
                            <p className="font-mono text-sm font-medium text-zinc-600">
                              {role}
                            </p>

                            {shouldShowDescriptions ? null : (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <InfoIcon className="h-3 w-3 text-zinc-400" />
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-sm bg-white">
                                    {description}
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </div>
                          <p className="font-mono text-xs text-zinc-400">
                            {startDate} - {endDate}
                          </p>
                        </div>
                        {shouldShowDescriptions ? description : null}
                      </div>
                    ),
                  )}
                </div>
              </div>
            ),
          )}
        </div>
        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold">Education</h3>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">UNESP</h4>
            <p className="font-mono text-xs text-zinc-400">2013 - 2018</p>
          </div>

          <p className="mt-1 font-mono text-sm font-medium text-zinc-500">
            Bachelor's Degree in Industrial Engineering
          </p>
        </div>
        <div className="mb-16 mt-8">
          <h3 className="mb-2 text-xl font-bold">Projects</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {projects.map(({ name, description, tags, link }) => (
              <div key={name} className="flex flex-col rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold hover:underline hover:decoration-dotted"
                    >
                      {name}
                    </a>
                    <p className="mt-1 font-mono text-xs font-medium text-zinc-500">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2">
                  {tags.map(tag => (
                    <div className="inline-block" key={tag}>
                      {tagComponent({ name: tag })}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function tagComponent({ name }: { name: string }) {
  return (
    <div className="w-fit rounded-full border border-zinc-500 px-2 font-mono text-xs font-medium text-zinc-600">
      {name}
    </div>
  )
}
