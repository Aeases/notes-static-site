import { FilePath, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"


//import excalidraw from '@excalidraw/excalidraw';
const DRAWING_REG = /\n# Drawing\n[^`]*(```json\n)([\s\S]*?)```\n/gm; //https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/182
import { compressToBase64, decompressFromBase64 } from "lz-string";
import { readFileSync } from 'fs';
import { Data } from "vfile";
import { Path } from "to-vfile/lib";
// @ts-ignore
import script from "./scripts/PDFComponent.inline"
import styles from "./styles/PDFComponent.scss"
import { Document } from 'react-pdf'
import * as fs from 'fs';
import { Fragment } from "preact/jsx-runtime";
import pkg from "@excalidraw/excalidraw";
import { createRef, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import Backlinks from "./Backlinks";
import { render } from "preact-render-to-string";

function PDFComponent({ tree, fileData }: QuartzComponentProps) {
            let slug = fileData.slug?.split(".")
            if (!slug) return(<div>No PDF Found</div>)
            let seperated = slug[0] + "_asset"
            let newSlug = [seperated, slug[1]].join(".")
            console.log(` New Slug: ${newSlug}`)
            if (true <= false) {
            return(<article>
                <p id="fileData" style="display: none">{newSlug}</p>
                <p id="styles" style="display: none">{styles}</p>
                <div class="top-bar">
                      <button class="btn" id="prev-page">
                        <i class="fas fa-arrow-circle-left"></i> Prev Page
                      </button>
                      <button class="btn" id="next-page">
                        Next Page <i class="fas fa-arrow-circle-right"></i>
                      </button>
                      <span class="page-info">
                        Page <span id="page-num"></span> of <span id="page-count"></span>
                      </span>
                </div>
                <canvas id="pdf-render"></canvas>
                <iframe id="pdfView hidden" class="pdfPage" src={`${newSlug}`}></iframe>
            </article>
            )} else {
                return(h('div', {}, render(<Document file="http://localhost:8080/English/Concepts/Values-and-Attitudes_asset.pdf" />)))
            }
        }
PDFComponent.css = styles
PDFComponent.afterDOMLoaded = script
export default (() => PDFComponent) satisfies QuartzComponentConstructor


/* export function GetMDExcalidrawJSON(file: FilePath): JSON | null {
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

	return(FinalJSON) */