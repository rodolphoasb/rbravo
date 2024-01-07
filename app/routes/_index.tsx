import type { MetaFunction } from '@remix-run/node'
import { Globe2Icon } from 'lucide-react'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

const skills = [
  'Typescript',
  'React',
  'React Native',
  'Node.js',
  'Tailwind CSS',
  'Serverless',
  'AWS',
]

export default function Index() {
  return (
    <div className="mx-auto mt-16 flex max-w-2xl">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-zinc-900">Rodolpho Bravo</h1>
        <p className="mt-2 font-mono text-sm text-zinc-600">
          Product Engineer with an eye for design, used to work on Full Stack
          roles using Typescript.
        </p>
        <div className="mt-2 flex items-center gap-x-2">
          <Globe2Icon className="h-3 w-3 text-zinc-400" />
          <a
            href="https://www.google.com/maps/@-16.693818,-49.260109,15z"
            target="_blank"
            className="text-sm text-zinc-600 hover:text-zinc-500"
            rel="noreferrer noopener"
          >
            Goiânia, Brazil
          </a>
        </div>

        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold">About me</h3>
          <p className="font-mono text-sm text-zinc-600">
            I'm a full stack software engineer based in Brazil with 4 years of
            experience in the software industry.{' '}
          </p>
          <br />
          <p className="font-mono text-sm text-zinc-600">
            I am very experienced in working with Typescript, React(Next.js and
            Remix), React Native, Node.js, Tailwind CSS, and serverless
            architecture in general.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold">Skills</h3>
          <div className="flex gap-x-2">
            {skills.map(skill => (
              <div className="inline-block" key={skill}>
                {tagComponent({ name: skill })}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold">Experience</h3>
        </div>
        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold">Education</h3>
        </div>
        <div className="mt-8">
          <h3 className="mb-2 text-xl font-bold">Projects</h3>
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
