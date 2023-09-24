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

function PDFComponent({ fileData }: QuartzComponentProps) {
            return <Fragment>
            <blockquote class="callout" data-callout="warning" style="max-height: 90px;">
            <div class="callout-title">
                              <div class="callout-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg></div>
                              <div class="callout-title-inner"><p>This is a PDF, they cannot be viewed from the website.</p></div>
                            </div>
            </blockquote>
            <div id="fuck">
            </div>
            </Fragment>
        }


export function GetMDExcalidrawJSON(file: FilePath): JSON | null {
    const text = fs.readFileSync(file, 'utf-8')
    let res = text.matchAll(DRAWING_REG)
    let parts = res.next();
    let scene: string = ""
    console.log("Parts")
    if (parts.value && parts.value.length > 1) {
        let result = parts.value[2];
        console.log("Made It to the finals")
        scene = result.substr(0, result.lastIndexOf("}") + 1)
    }
    let FinalJSON
    try {
        FinalJSON = JSON.parse(scene)
        console.log("Tried & Succeeded") 
    } catch (error) {
        console.log("Failure")
        return(null)
    }
	//let f = getMarkdownDrawingSection(text, false)
    //let t = JSON.parse(f)
    //console.log(res)

	return(FinalJSON)
}

//ExcalidrawComponent.css = styles
PDFComponent.afterDOMLoaded = script
export default (() => PDFComponent) satisfies QuartzComponentConstructor