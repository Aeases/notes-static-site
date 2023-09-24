import { h, hydrate, render } from 'preact';
import { render as f } from 'preact-render-to-string';
import { FilePath, getFullSlug } from '../../util/path';
import { resolveRelative } from "../../util/path"
import { pathToRoot } from "../../util/path"
const DRAWING_REG = /\n# Drawing\n[^`]*(```json\n)([\s\S]*?)```\n/gm; //https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/182
import { compressToBase64, decompressFromBase64 } from "lz-string";
import { Data } from "vfile";
import { Path } from "to-vfile/lib";
import { Fragment } from "preact/jsx-runtime";
import pkg, { Excalidraw } from "@excalidraw/excalidraw";
import { createRef } from "preact";
import compat from "preact/compat"
import { useEffect, useState } from "preact/hooks";

const slug = getFullSlug(window)
let data = fetchData
console.log(data)

console.log(slug)
