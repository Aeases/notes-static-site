import { StaticResources } from "../util/resources"
import { FilePath, FullSlug } from "../util/path"
import { BuildCtx } from "../util/ctx"

export function getStaticResourcesFromPlugins(ctx: BuildCtx) {
  const staticResources: StaticResources = {
    css: [],
    js: [],
/*     {
      src: 'https://unpkg.com/@excalidraw/excalidraw/dist/excalidraw.development.js',
      contentType: "external",
      loadTime: "beforeDOMReady",
      moduleType: "module",
      spaPreserve: true
    },
    {
      src: "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.10.111/build/pdf.min.js",
      contentType: "external",
      loadTime: "afterDOMReady",
      moduleType: "module",
    } */
/*     {
      src: 'https://unpkg.com/react@18.2.0/umd/react.development.js',
      contentType: "external",
      loadTime: "afterDOMReady",
      moduleType: "module",
      spaPreserve: true
    },
    {
      src: 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js',
      contentType: "external",
      loadTime: "afterDOMReady",
      moduleType: "module",
      spaPreserve: true
    }, */

  }

  for (const transformer of ctx.cfg.plugins.transformers) {
    const res = transformer.externalResources ? transformer.externalResources(ctx) : {}
    if (res?.js) {
      staticResources.js.push(...res.js)
    }
    if (res?.css) {
      staticResources.css.push(...res.css)
    }
  }

  return staticResources
}

export * from "./transformers"
export * from "./filters"
export * from "./emitters"

declare module "vfile" {
  // inserted in processors.ts
  interface DataMap {
    slug: FullSlug
    filePath: FilePath
  }
}
