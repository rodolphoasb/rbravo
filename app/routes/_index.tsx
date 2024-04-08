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
    <div className="mx-auto mt-16 flex max-w-2xl px-6 sm:px-0">
      <div className="flex flex-col">
        <div className="flex gap-x-4">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">
              Rodolpho Bravo
            </h1>
            <p className="mt-2 font-mono text-sm text-neutral-500">
              Product Engineer with an eye for design, used to work on Full
              Stack roles using Typescript.
            </p>
            <div className="mt-2 flex items-center gap-x-2">
              <Globe2Icon className="h-3 w-3 text-neutral-400" />
              <a
                href="https://www.google.com/maps/@-16.693818,-49.260109,15z"
                target="_blank"
                className="font-mono text-xs text-neutral-600 hover:text-neutral-500 hover:underline hover:decoration-dotted"
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
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 font-mono text-xs text-neutral-600 hover:border-neutral-400 hover:text-neutral-500"
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
          <p className="font-mono text-sm text-neutral-500">
            I'm a full stack software engineer based in Brazil with 4 years of
            experience in the software industry.{" "}
          </p>
          <br />
          <p className="font-mono text-sm text-neutral-500">
            I am very experienced in working with Typescript, React(Next.js and
            Remix), React Native, Node.js, Tailwind CSS, and serverless
            architecture in general.
          </p>
          <br />
          <p className="font-mono text-sm text-neutral-500">
            I especially enjoy working on difficult problems.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div className="inline-block" key={skill}>
                {tagComponent({ name: skill })}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold">Lab</h3>
          <div className="bg-gray-50 border border-gray-200/50 rounded-lg h-60 p-8">
            <div className="h-full items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="absolute w-full h-full z-10 m-auto will-change-transform opacity-0 transition-opacity group-hover:opacity-100"
                viewBox="0 0 390 430"
              >
                <g
                  stroke="hsl(var(--foreground-lighter))"
                  filter="url(#filter5_bd_467_4905)"
                >
                  <path d="M192.144 125.816h-53.465a20.841 20.841 0 00-19.334 13.061l-20.34 50.553a20.71 20.71 0 004.377 22.181l10.232 10.506a26.346 26.346 0 017.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241a69.855 69.855 0 0120.668-49.602 7 7 0 119.858 9.941 55.853 55.853 0 00-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38a34.711 34.711 0 01-7.337-37.176l20.341-50.553a34.84 34.84 0 0132.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842a7 7 0 11-14 0V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084z"></path>
                  <path d="M210.03 283.94a7 7 0 10-14 0v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614a7 7 0 100-14h-26.841a117.176 117.176 0 01-82.173-33.643 7 7 0 10-9.818 9.981 131.184 131.184 0 0080.228 37.134c-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113zm28-81.795a8.677 8.677 0 1017.354 0 8.677 8.677 0 00-17.354 0z"></path>
                </g>
                <path
                  stroke="url(#a)"
                  d="M192.144 125.816h-53.465a20.841 20.841 0 00-19.334 13.061l-20.34 50.553a20.71 20.71 0 004.377 22.181l10.232 10.506a26.346 26.346 0 017.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241a69.855 69.855 0 0120.668-49.602 7 7 0 119.858 9.941 55.853 55.853 0 00-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38a34.711 34.711 0 01-7.337-37.176l20.341-50.553a34.84 34.84 0 0132.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842a7 7 0 11-14 0V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084z"
                ></path>
                <path
                  stroke="url(#b)"
                  d="M210.03 283.94a7 7 0 10-14 0v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614a7 7 0 100-14h-26.841a117.176 117.176 0 01-82.173-33.643 7 7 0 10-9.818 9.981 131.184 131.184 0 0080.228 37.134c-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113z"
                ></path>
                <path
                  stroke="url(#c)"
                  d="M238.03 202.145a8.677 8.677 0 1017.354 0 8.677 8.677 0 00-17.354 0z"
                ></path>
                <defs>
                  <radialGradient
                    id="a"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(45 -370.983 369.334) scale(166 180)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="hsl(var(--brand-default))"></stop>
                    <stop
                      offset="1"
                      stopColor="hsl(var(--foreground-lighter))"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="b"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(45 -370.983 369.334) scale(166 180)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="hsl(var(--brand-default))"></stop>
                    <stop
                      offset="1"
                      stopColor="hsl(var(--foreground-lighter))"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="c"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(45 -370.983 369.334) scale(166 180)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="hsl(var(--brand-default))"></stop>
                    <stop
                      offset="1"
                      stopColor="hsl(var(--foreground-lighter))"
                    ></stop>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <h3 className="text-xl font-bold">Experience</h3>
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
                        <BoltIcon className="h-4 w-4 text-amber-400" />
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
                            <p className="font-mono text-sm font-medium text-neutral-600">
                              {role}
                            </p>

                            {shouldShowDescriptions ? null : (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <InfoIcon className="h-3 w-3 text-neutral-400" />
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-sm bg-white">
                                    {description}
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </div>
                          <p className="font-mono text-xs text-neutral-400">
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
            <p className="font-mono text-xs text-neutral-400">2013 - 2018</p>
          </div>

          <p className="mt-1 font-mono text-sm font-medium text-neutral-500">
            Bachelor's Degree in Industrial Engineering
          </p>
        </div>
        <div className="mb-16 mt-8">
          <h3 className="mb-2 text-xl font-bold">Projects</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map(
              ({ name, description, tags, link, sideProject, yc }) => (
                <div key={name} className="flex flex-col rounded-lg border">
                  <div className="flex items-center justify-between p-3">
                    <div>
                      <div className="flex items-center gap-x-2">
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="font-semibold hover:underline decoration-amber-400 hover:decoration-dotted hover:decoration-amber-400/90"
                        >
                          {name}
                        </a>
                        {yc ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                          >
                            <g clipPath="url(#clip0_122_11)">
                              <path fill="#FB651E" d="M16 0H0v16h16V0z"></path>
                              <path
                                fill="#fff"
                                d="M7.46 9.047L4.716 3.902H5.97l1.615 3.256c.025.058.054.118.087.18.033.062.062.126.087.193a.381.381 0 01.037.068l.025.056a4.108 4.108 0 01.199.46c.066-.141.139-.292.218-.454l.242-.503 1.64-3.256h1.168l-2.77 5.207v3.318H7.46v-3.38z"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_122_11">
                                <path fill="#fff" d="M0 0H16V16H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                        ) : null}
                      </div>
                      <p className="mt-1 font-mono text-xs font-medium text-neutral-500">
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-x-2 gap-y-2 p-3">
                    {tags.map((tag) => (
                      <div className="inline-block" key={tag}>
                        {tagComponent({ name: tag })}
                      </div>
                    ))}
                  </div>
                  {sideProject ? (
                    <div className="mt-2 bg-gradient-to-r from-neutral-200/60 to-neutral-50 rounded-b-lg flex justify-center py-1">
                      <p className="font-mono text-xs text-neutral-900">
                        Side project
                      </p>
                    </div>
                  ) : null}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function tagComponent({ name }: { name: string }) {
  return (
    <div className="w-fit rounded-full border border-neutral-500 px-2 font-mono text-xs font-medium text-neutral-600">
      {name}
    </div>
  );
}
