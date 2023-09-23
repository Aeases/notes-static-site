import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { ProcessedContent, defaultProcessedContent } from "../vfile"
import { FullPageLayout } from "../../cfg"
import {
  FilePath,
  FullSlug,
  getAllSegmentPrefixes,
  joinSegments,
  pathToRoot,
} from "../../util/path"
import { defaultListPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { ExcalidrawComponent, PageTitle, TagContent } from "../../components"

export const ExcalidrawPage: QuartzEmitterPlugin<FullPageLayout> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    beforeBody: [PageTitle()],
    pageBody: ExcalidrawComponent(),
    right: [],
    left: userOpts ? userOpts.left : []
  }

  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "ExcalidrawPage",
    getQuartzComponents() {
      return [Head, Header, Body, ...header, ...beforeBody, pageBody, ...left, ...right, Footer]
    },
    async emit(ctx, content, resources, emit): Promise<FilePath[]> {
      const fps: FilePath[] = []
      const allFiles = content.map((c) => c[1].data)
      const cfg = ctx.cfg.configuration

      for (const [tree, file] of content) {
        const slug = file.data.slug!
        console.log(slug)
        if (slug.endsWith(".excalidraw") || slug.endsWith(".excalidraw.md")) {
          //const tag = slug.slice("tags/".length)
          const externalResources = pageResources(pathToRoot(slug), resources)
          const componentData: QuartzComponentProps = {
            fileData: file.data,
            externalResources,
            cfg,
            children: [],
            tree,
            allFiles,
          }
          const content = renderPage(slug, componentData, opts, externalResources)
          const fp = await emit({
            content,
            slug: file.data.slug!,
            ext: ".html",
          })
          fps.push(fp)
        }


      }
      return fps
    },
  }
}
