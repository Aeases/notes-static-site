import pkg from '@excalidraw/excalidraw';
import { h, hydrate, render } from 'preact';
import { FilePath, getFullSlug } from '../../util/path';
import { resolveRelative } from "../../util/path"
import { pathToRoot } from "../../util/path"
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
const slug = getFullSlug(window)
let data = fetchData
console.log(data)

console.log(slug)
// @ts-ignore
let f = GetMDExcalidrawJSON(pathToRoot(slug))

// @ts-ignore
pkg.exportToSvg(f)




//console.log("fuck")
//document.body.style.backgroundColor = 'red'
/* import("@excalidraw/excalidraw").then((e) => {
    document.querySelector(".excali")?.appendChild(e.Excalidraw)

}) */
//console.log("fuck")
/* let excaliDiv = document.getElementById("fuck")
console.log(excaliDiv)
const [Excalidraw, setExcalidraw] = useState(null)
useEffect(() => {
    // @ts-ignore
    import("@excalidraw/excalidraw").then((comp) => setExcalidraw(comp.Excalidraw));
}, []); */


// @ts-ignore


/* document.addEventListener("nav", () => {
    console.log("gfdkjgskfdgkdfg")
}) */


//---

function GetMDExcalidrawJSON(file: FilePath): JSON | null {
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