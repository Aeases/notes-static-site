import { FilePath, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

import styles from "./styles/avatar.scss"
//import excalidraw from '@excalidraw/excalidraw';
const DRAWING_REG = /\n# Drawing\n[^`]*(```json\n)([\s\S]*?)```\n/gm; //https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/182
import { compressToBase64, decompressFromBase64 } from "lz-string";
import { readFileSync } from 'fs';
import { Data } from "vfile";
import { Path } from "to-vfile/lib";
// @ts-ignore
import script from "./scripts/Excalidraw.inline"
import * as fs from 'fs';
import { Fragment } from "preact/jsx-runtime";
import pkg from "@excalidraw/excalidraw";
import { createRef } from "preact";
import { useEffect, useState } from "preact/hooks";
import Backlinks from "./Backlinks";

function ExcalidrawComponent({ fileData, externalResources }: QuartzComponentProps) {
    externalResources.js.push({
        src: "https://unpkg.com/@excalidraw/excalidraw/dist/excalidraw.development.js",
        contentType: "external",
        loadTime: "afterDOMReady",
      })
/*     let fileText: string | null = null
    if (fileData.text) {
        fileText = fileData.text
    }
    fileData.filePath */
    if (fileData.filePath != undefined) {
        let ExcaliData = GetMDExcalidrawJSON(fileData.filePath)
        
/*         const [Excalidraw, setExcalidraw] = useState(null)
        useEffect(() => {
            // @ts-ignore
            import("@excalidraw/excalidraw").then((comp) => setExcalidraw(comp.Excalidraw));
        }, []); */



        if (ExcaliData != null) {
                    // @ts-ignore
/*             let f = pkg.exportToSvg(ExcaliData)
            f.then((e) => {
                Ex.querySelector("#fuck")?.appendChild(e)
            }) */
            //return <>{Excalidraw && <Excalidraw />}</>
            return <article class="popover-hint">
            <blockquote class="callout" data-callout="bug" style="max-height: 90px; border: none; border-radius: 10em;">
            <div class="callout-title">
                              <div class="callout-icon" style="display: block"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg></div>
                              <div class="callout-title-inner prevent-select"><p>This is an Excalidraw, they can not be viewed from the website.</p></div>
                            </div>
            </blockquote>
            <div id="fuck">
                
            </div>
            </article>
        }
    }
    return <div></div>
}



export function GetMDExcalidrawJSON(file: FilePath): JSON | null {
    const text = fs.readFileSync(file, 'utf-8')
    let res = text.matchAll(DRAWING_REG)
    let parts = res.next();
    let scene: string = ""
    console.debug("Parts")
    if (parts.value && parts.value.length > 1) {
        let result = parts.value[2];
        console.debug("Made It to the finals")
        scene = result.substr(0, result.lastIndexOf("}") + 1)
    }
    let FinalJSON
    try {
        FinalJSON = JSON.parse(scene)
        console.debug("Tried & Succeeded") 
    } catch (error) {
        console.debug("Failure")
        return(null)
    }
	//let f = getMarkdownDrawingSection(text, false)
    //let t = JSON.parse(f)
    //console.log(res)

	return(FinalJSON)
}

//ExcalidrawComponent.css = styles
ExcalidrawComponent.afterDOMLoaded = script
export default (() => ExcalidrawComponent) satisfies QuartzComponentConstructor