import { url } from "inspector"
import isAbsoluteUrl from "is-absolute-url"
import { isUrl } from "vfile/lib/minurl.shared"
import styles from "../styles/PDFComponent.scss"

document.addEventListener("nav", () => {
    const PDFView = document.getElementById("pdfView")
    const fileSlug = document.getElementById("fileData")?.innerText

    if (PDFView?.classList.contains("hidden")) return

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


document.addEventListener("nav", () => {
    let url = document.getElementById("fileData")?.innerText
    url = "/English/Concepts/Values-and-Attitudes_asset.pdf"
    //pdfjsLib.getDocument(url)
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
      ).toString();



    return
    if (url == undefined) {
        url = ""
    }
    


 let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1.5,
  canvas = document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d');

// Render the page
const renderPage = num => {
  pageIsRendering = true;
  console.log(`${num} brooo`)

  // Get page
  pdfDoc.getPage(num).then(page => {
    // Set scale
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport
    };

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    // Output current page
    document.querySelector('#page-num').textContent = num;
  });
};

// Check for pages rendering
const queueRenderPage = num => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// Show Prev Page
const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

// Show Next Page
const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};

// Get Document
pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

// Button Events
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);

})