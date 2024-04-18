import { Link } from "@remix-run/react";
import { ChevronLeftIcon } from "lucide-react";

export default function Lab() {
  return (
    <div className="min-h-screen relative flex flex-col sm:justify-center items-center font-mono max-w-7xl mx-auto px-6 pt-16 pb-12">
      <Link
        to={"/"}
        className="absolute left-0 top-6 flex text-neutral-400 items-center gap-x-2 hover:bg-neutral-50 no-underline rounded-xl px-2"
      >
        <ChevronLeftIcon className="h-4 w-4 text-neutral-400" />
        <span className="">Back</span>
      </Link>

      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-8 sm:gap-y-0 sm:flex-row bg-white items-center w-full justify-between gap-x-12">
          <div className="w-full sm:w-1/3 flex flex-col gap-y-4">
            <h3 className="text-neutral-700">New Til Home Page</h3>
            <p className="text-sm text-neutral-600">
              The Hero section cards animations were done using Framer Motion.
            </p>
            <p className="text-xs text-neutral-500">Date: April 2024</p>
          </div>
          <div className="w-full sm:w-2/3">
            <div className="rounded-md overflow-hidden">
              <video
                src="https://zenvios.io/Til-hero-section.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-neutral-200"></div>
        <div className="flex flex-col gap-y-8 sm:gap-y-0 sm:flex-row bg-white items-center w-full justify-between gap-x-12">
          <div className="w-full sm:w-1/3 flex flex-col gap-y-4">
            <h3 className="text-neutral-700">
              Image generation for RN App using Vercel OG
            </h3>
            <p className="text-sm text-neutral-600">
              This feature utilizes the Vercel @vercel/og library to generate
              Open Graph images using edge computing. Within the Til app, we
              feature "Drops" (which are giveaways). When users click "Share",
              we dynamically create customized images for sharing on Instagram
              Stories.
            </p>
            <p className="text-xs text-neutral-500">Date: May 2023</p>
          </div>
          <div className="w-full sm:w-2/3 flex justify-center">
            <div className="rounded-md overflow-hidden">
              <video
                src="https://zenvios.io/til-vercel-og.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={true}
                className="h-[350px] sm:h-[500px]"
              />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-neutral-200"></div>
        <div className="flex flex-col gap-y-8 sm:gap-y-0 sm:flex-row bg-white items-center w-full justify-between gap-x-12">
          <div className="w-full sm:w-1/3 flex flex-col gap-y-4">
            <h3 className="text-neutral-700">
              Loops - Drag and Drop Organizer
            </h3>
            <p className="text-sm text-neutral-600">
              This feature allows users to organize their "Loops” in different
              groups, editing and moving them with drag and drop.
            </p>
            <p className="text-xs text-neutral-500">Date: May 2022</p>
          </div>
          <div className="w-full sm:w-2/3">
            <div className="rounded-md overflow-hidden">
              <video
                src="https://zenvios.io/loops-demo-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
