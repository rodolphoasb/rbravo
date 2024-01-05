import mdx from '@mdx-js/rollup'
import { unstable_vitePlugin as remix } from '@remix-run/dev'
import morgan from 'morgan'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { remixDevTools } from 'remix-development-tools/vite'
import { defineConfig, type ViteDevServer } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import remixConfig from './remix.config'

export default defineConfig({
  plugins: [
    morganPlugin(),
    remix(remixConfig),
    remixDevTools(),
    tsconfigPaths(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
  ],
})

function morganPlugin() {
  return {
    name: 'morgan-plugin',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use(morgan('tiny'))
      }
    },
  }
}
