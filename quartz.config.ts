import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Zane's Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', tagId: "G-8C73MEB7TZ",
    },
    baseUrl: "notes.zanefitzgerald.me",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fffcf0",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#d64d12",
          tertiary: "#f8c2ab",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#092a35",
          //lightgray: "#5b7681",
          lightgray: "#1a3b47",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#9e78ff",
          tertiary: "#b297ff",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "mathjax" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ExcalidrawPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
