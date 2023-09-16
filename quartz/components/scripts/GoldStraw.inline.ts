import markdown from "remark-parse";
import docx from "remark-docx";
import { unified } from "unified";
import saveAs from "file-saver";
import { FullSlug, getFullSlug, simplifySlug } from "../../util/path"


const button = document.querySelector("#goldstraw-docx")
//const processor = unified().use(markdown).use(docx, { output: "blob" });

/* async function createDocX(data: string) {
    let doc = await processor.process(data);
    let blob = await doc.result;
    saveAs(blob as Blob, `j`)
} */

document.addEventListener("nav", (e) => {
    console.log(e)
    console.log(e.detail.url)
  })


async function logData(e: Event) {
    const slug = getFullSlug(window)
    let data = fetchData
    console.log(data)
}

button?.addEventListener("click", (e) => logData(e))
