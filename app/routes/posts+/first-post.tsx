import { type MetaFunction } from '@remix-run/react'
import Component, { frontmatter } from '../../../posts/first-post.mdx'

export const meta: MetaFunction = () => {
  return [
    { title: frontmatter.title },
    {
      property: 'og:title',
      content: 'Very cool app',
    },
    {
      name: 'description',
      content: 'This app is the best',
    },
  ]
}

export default function PostsPages() {
  return (
    <div>
      <Component />
    </div>
  )
}
