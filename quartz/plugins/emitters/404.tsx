import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { FilePath, FullSlug } from "../../util/path"
import { sharedPageComponents } from "../../../quartz.layout"
import { Explorer, NotFound } from "../../components"
import { defaultProcessedContent } from "../vfile"

export const NotFoundPage: QuartzEmitterPlugin = () => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    pageBody: NotFound(),
    beforeBody: [],
    left: [Explorer()],
    right: [],
  }

  const { head: Head, pageBody } = opts
  const Body = BodyConstructor()

  return {
    name: "404Page",
    getQuartzComponents() {
      return [Head, Body, pageBody]
    },
    async emit(ctx, _content, resources, emit): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration
      const slug = "404" as FullSlug

      const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
      const path = url.pathname as FullSlug
      const externalResources = pageResources(path, resources)
      const [tree, vfile] = defaultProcessedContent({
        slug,
        text: "Not Found",
        description: "Not Found",
        frontmatter: { title: "Not Found", tags: [] },
      })
      const componentData: QuartzComponentProps = {
        fileData: vfile.data,
        externalResources,
        cfg,
        children: [],
        tree,
        allFiles: [],
      }

      return [
        await emit({
          content: renderPage(slug, componentData, opts, externalResources),
          slug,
          ext: ".html",
        }),
      ]
    },
  }
}
