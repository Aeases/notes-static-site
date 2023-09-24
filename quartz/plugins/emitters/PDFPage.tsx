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
  slugifyFilePath,
} from "../../util/path"
import { defaultContentPageLayout, defaultListPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { ArticleTitle, Backlinks, Darkmode, DesktopOnly, ExcalidrawComponent, Explorer, Graph, MobileOnly, PDFComponent, PageTitle, TagContent } from "../../components"
import { glob } from "../../util/glob"

export const PDFPage: QuartzEmitterPlugin<FullPageLayout> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    beforeBody: [ArticleTitle()],
    left: [PageTitle(), Darkmode(), DesktopOnly(Explorer())],
    right: [],
    pageBody: PDFComponent(),
    ...userOpts,
    //footer: Backlinks()
  }

  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "PDFPage",
    getQuartzComponents() {
      return [Head, Header, Body, ...header, ...beforeBody, pageBody, ...left, ...right, Footer]
    },
    async emit(ctx, content, resources, emit): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration
      const argv = ctx.argv
      let fps: FilePath[] = []
      const allFiles = content.map((c) => {
        console.log(c)
        return (c[1].data)
      })

      //const cfg = ctx.cfg.configuration
      let NonMarkdownFiles: FilePath[] = await glob("**/*.*", argv.directory, ["**/*.md", ...cfg.ignorePatterns])
      for (let nmPath of NonMarkdownFiles) {
        let [tree, file] = content[1]
        const slug = slugifyFilePath(nmPath!)
        //console.log(`[PDF] ${slug}`)
        if (slug.endsWith(".pdf")) {
          //const tag = slug.slice("tags/".length)
          const externalResources = pageResources(pathToRoot(slug), resources)
          const componentData: QuartzComponentProps = {
            fileData: {
              slug: slug,

            },
            externalResources,
            cfg,
            children: [],
            tree,
            allFiles,
          }

          const content = renderPage(slug, componentData, opts, externalResources)
          const fp = await emit({
            content,
            slug: slug!,
            ext: ".html",
          })
          fps.push(fp)
        }


      }
      return fps
    },
  }
}
