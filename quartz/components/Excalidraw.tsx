import { FilePath, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/avatar.scss"
import pkg, { Excalidraw } from '@excalidraw/excalidraw';
const DRAWING_REG = /\n# Drawing\n[^`]*(```json\n)([\s\S]*?)```\n/gm; //https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/182
import { compressToBase64, decompressFromBase64 } from "lz-string";
import { readFileSync } from 'fs';
import { Data } from "vfile";
import { Path } from "to-vfile/lib";
// @ts-ignore
import script from "./scripts/Excalidraw.inline"
import * as fs from 'fs';
ExcalidrawComponent.afterDOM = script

function ExcalidrawComponent({ fileData }: QuartzComponentProps) {
    
/*     let fileText: string | null = null
    if (fileData.text) {
        fileText = fileData.text
    }
    fileData.filePath */
    if (fileData.filePath != undefined) {
        let ExcaliData = GetMDExcalidrawJSON(fileData.filePath)
        if (ExcaliData != null) {
            //return <>{Excalidraw && <Excalidraw />}</>
            return <><blockquote class="callout is-collapsible is-collapsed" data-callout="warning" data-callout-fold="" style="max-height: 90px;">
            <div class="callout-title">
                              <div class="callout-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                              <div class="callout-title-inner"><p>This is an Excalidraw, they can not be viewed from the website.</p></div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fold">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            </div>
            <p>The JSON content could technically be copied into a .excalidraw file and that could be loaded with obsidian excalidraw plugin maybe??</p>
            </blockquote></>
        }
    }
    return <div></div>
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
export default (() => ExcalidrawComponent) satisfies QuartzComponentConstructor