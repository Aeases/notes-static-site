import micromorph from "micromorph"
import { FullSlug, RelativeURL, getFullSlug } from "../../util/path"

// adapted from `micromorph`
// https://github.com/natemoo-re/micromorph

const NODE_TYPE_ELEMENT = 1
let announcer = document.createElement("route-announcer")
const isElement = (target: EventTarget | null): target is Element =>
  (target as Node)?.nodeType === NODE_TYPE_ELEMENT
const isLocalUrl = (href: string) => {
  try {
    const url = new URL(href)
    if (window.location.origin === url.origin) {
      return true
    }
  } catch (e) {}
  return false
}

const getOpts = ({ target }: Event): { url: URL; scroll?: boolean } | undefined => {
  if (!isElement(target)) return
  const a = target.closest("a")
  if (!a) return
  if ("routerIgnore" in a.dataset) return
  const { href } = a
  if (!isLocalUrl(href)) return
  return { url: new URL(href), scroll: "routerNoscroll" in a.dataset ? false : undefined }
}

function notifyNav(url: FullSlug) {
  const event: CustomEventMap["nav"] = new CustomEvent("nav", { detail: { url } })
  document.dispatchEvent(event)
}

function navigateClick(url: URL, isBack: boolean, event: Event) {
  let target = event.target
  if (!isElement(target)) return
  const a = target.closest("a")
  console.log(a)
  if (a && a.classList.contains("internal")) {
    let child = a.querySelector(".popover")
    if (child != null) {
      a.removeChild(child)
    }
    console.log(a.style.color)
    a.style.transitionDuration = '0s'
    a.style.color = 'white'
    // @ts-ignore
    a.style.viewTransitionName = 'transition_title'
  }
  
  let title = document.querySelector(".article-title")
  if (title) {
    // @ts-ignore
    title.style.viewTransitionName = ''
  }

  document.startViewTransition(() => navigate(url, isBack, true))

  
}

function handleViewTransition(to: Document, from: Document) {
  let to_title = to.querySelector(".article-title")
  let from_title = from.querySelector("title")
  
  if (to_title?.textContent) {
    // @ts-ignore
    to_title.style.viewTransitionName = "transition_title"
  }
}

let p: DOMParser
async function navigate(url: URL, isBack: boolean = false, isTransition: boolean) {

  p = p || new DOMParser()
  const contents = await fetch(`${url}`)
    .then((res) => res.text())
    .catch(() => {
      window.location.assign(url)
    })

  if (!contents) return
  


  const html = p.parseFromString(contents, "text/html")
  if (isTransition) {
    handleViewTransition(html, document)
  }
  let title = html.querySelector("title")?.textContent
  if (title) {
    document.title = title
  } else {
    const h1 = document.querySelector("h1")
    title = h1?.innerText ?? h1?.textContent ?? url.pathname
  }
  if (announcer.textContent !== title) {
    announcer.textContent = title
  }
  announcer.dataset.persist = ""
  html.body.appendChild(announcer)

  // morph body
  micromorph(document.body, html.body)

  // scroll into place and add history
  if (!isBack) {
    if (url.hash) {
      const el = document.getElementById(decodeURIComponent(url.hash.substring(1)))
      el?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0 })
    }
  }

  // now, patch head
  const elementsToRemove = document.head.querySelectorAll(":not([spa-preserve])")
  elementsToRemove.forEach((el) => el.remove())
  const elementsToAdd = html.head.querySelectorAll(":not([spa-preserve])")
  elementsToAdd.forEach((el) => document.head.appendChild(el))

  // delay setting the url until now
  // at this point everything is loaded so changing the url should resolve to the correct addresses
  if (!isBack) {
    history.pushState({}, "", url)
  }
  notifyNav(getFullSlug(window))
  delete announcer.dataset.persist
}

window.spaNavigate = navigate

function createRouter() {
  if (typeof window !== "undefined") {
    window.addEventListener("click", async (event) => {
      const { url } = getOpts(event) ?? {}
      if (!url) return
      event.preventDefault()
      if (!document.startViewTransition) {
        try {
          navigate(url, false, false)
        } catch (e) {
          window.location.assign(url)
        }
      }
      try {
        navigateClick(url, false, event)
      } catch (e) {
        window.location.assign(url)
      }

    })

    window.addEventListener("popstate", (event) => {
      const { url } = getOpts(event) ?? {}
      if (window.location.hash && window.location.pathname === url?.pathname) return
      try {
        console.debug("Triggering Navigate Popstate")
        if (!document.startViewTransition()) navigate(new URL(window.location.toString()), true, false)
        navigate(new URL(window.location.toString()), true, true)
      } catch (e) {
        window.location.reload()
      }
      return
    })
  }

  return new (class Router {
    go(pathname: RelativeURL) {
      const url = new URL(pathname, window.location.toString())
      console.debug("Triggered Go Navigate Return")
      return navigate(url, false, false)
    }

    back() {
      return window.history.back()
    }

    forward() {
      return window.history.forward()
    }
  })()
}

createRouter()
notifyNav(getFullSlug(window))

if (!customElements.get("route-announcer")) {
  const attrs = {
    "aria-live": "assertive",
    "aria-atomic": "true",
    style:
      "position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px",
  }
  customElements.define(
    "route-announcer",
    class RouteAnnouncer extends HTMLElement {
      constructor() {
        super()
      }
      connectedCallback() {
        for (const [key, value] of Object.entries(attrs)) {
          this.setAttribute(key, value)
        }
      }
    },
  )
}
