import { Link, Outlet, useLocation, useMatches } from "@remix-run/react";
import { ChevronLeftIcon } from "lucide-react";

export default function Component() {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith("/blog/");
  const isBlog = location.pathname === "/blog";

  return (
    <div className="w-full mx-auto flex flex-col items-center max-w-2xl justify-center">
      <div className="flex justify-start w-full px-5 sm:px-10 pt-8 pb-4 sm:pb-0">
        {isBlog ? (
          <Link
            to={"/"}
            className="flex text-neutral-400 items-center gap-x-2 hover:bg-neutral-50 no-underline rounded-xl px-2"
          >
            <ChevronLeftIcon className="h-4 w-4 text-neutral-400" />
            <span className="">Back</span>
          </Link>
        ) : null}
        {isBlogPost && (
          <Link
            to={"/blog"}
            className="flex text-neutral-400 items-center gap-x-2 hover:bg-neutral-50 no-underline rounded-xl px-2"
          >
            <ChevronLeftIcon className="h-4 w-4 text-neutral-400" />
            <span className="">Back</span>
          </Link>
        )}
      </div>
      <div className="sm:p-10 prose w-[85%] sm:w-full">
        <Outlet />
      </div>
    </div>
  );
}
