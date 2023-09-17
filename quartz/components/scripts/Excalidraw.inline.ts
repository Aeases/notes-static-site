import { Excalidraw } from "@excalidraw/excalidraw"
import("@excalidraw/excalidraw").then((e) => {
    document.querySelector(".excali")?.appendChild(e.Excalidraw)

})
let excaliDiv = document.querySelector(".excali")
let excalidraw = preact.createElement(Excalidraw, {})
preact.render(preact.createElement(excalidraw), excaliDiv)

