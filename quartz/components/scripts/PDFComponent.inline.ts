import { url } from "inspector"
import isAbsoluteUrl from "is-absolute-url"
import { isUrl } from "vfile/lib/minurl.shared"
import styles from "../styles/PDFComponent.scss"

document.addEventListener("nav", () => {
    const PDFView = document.getElementById("pdfView")
    const fileSlug = document.getElementById("fileData")?.innerText
    //console.log(PDFView)
    let URL = window.location
    //console.log(URL.origin)
    if (PDFView instanceof HTMLIFrameElement) {
        console.log(`Origin: ${URL.origin} \nPDFView: ${PDFView.src}`)
        //PDFView.src = URL.origin + "/" + PDFView.src
        //let DesiredURL = "http://localhost:8080/English/Concepts/Values-and-Attitudes_asset.pdf"
        PDFView.src = URL.origin + "/" + fileSlug
        
        let stylesheet = PDFView.contentDocument?.createElement("style")
        setTimeout(() => {
            PDFView.style.opacity = "1"
        }, 300)
        console.log(stylesheet)
        let styles = document.getElementById("styles")?.innerText
        console.log(styles)
        PDFView.contentWindow?.onload(() => {
            let cssvar = PDFView.contentDocument?.createElement("link")
            cssvar.href = "index.css"
        })
        if (stylesheet != undefined && styles != undefined) {
            stylesheet.innerText = styles
            console.log(stylesheet.innerText)
        }
    }
    
    //let f = URL.split("/")[0]
    //console.log(f)
})


/* document.addEventListener("nav", () => {
    const a = document.querySelector(".graph")
    if (a?.innerHTML) {
        a.innerHTML = ""
    }
}) */
