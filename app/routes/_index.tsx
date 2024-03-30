import { BoltIcon } from "@heroicons/react/16/solid";
import type { MetaFunction } from "@remix-run/node";
import { Globe2Icon, InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/tooltip";
import { contacts, experience, projects, skills } from "~/utils/content";

export const meta: MetaFunction = () => {
  return [
    { title: "Rodolpho Bravo - CV" },
    {
      name: "description",
      content:
        "🇧🇷 • Building beautiful things for the web and sharing my learnings along the way",
    },
  ];
};

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
            experience in the software industry.{" "}
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
            {skills.map((skill) => (
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
                    )
                  )}
                </div>
              </div>
            )
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
                  {tags.map((tag) => (
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
  );
}

function tagComponent({ name }: { name: string }) {
  return (
    <div className="w-fit rounded-full border border-zinc-500 px-2 font-mono text-xs font-medium text-zinc-600">
      {name}
    </div>
  );
}
