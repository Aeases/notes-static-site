export declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void
    startViewTransition: any
  }
  interface Window {
    spaNavigate(url: URL, isBack: boolean = false)
  }
}
