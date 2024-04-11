import { Link } from "@remix-run/react";

import type { PostMeta } from "~/.server/posts";

export const Post = ({ slug, frontmatter }: PostMeta) => {
  return (
    <article className="space-y-2">
      <Link
        className="no-underline hover:text-gray-600/80 transition-all hover:underline hover:decoration-dotted hover:decoration-amber-400/90"
        to={`/blog/${slug}`}
      >
        <h3 className="text-2xl mt-0 font-medium text-neutral-600">
          {frontmatter.title}
        </h3>
      </Link>
      <p className="text-neutral-500">{frontmatter.description}</p>
      <time
        className="block text-sm text-neutral-700"
        dateTime={frontmatter.published}
      >
        {frontmatter.published.replace(/-/g, "/")}
      </time>
    </article>
  );
};
