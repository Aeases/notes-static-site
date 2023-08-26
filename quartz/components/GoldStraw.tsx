import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/GoldStraw.inline"

//import { saveAs } from "file-saver";

function GoldStraw({ fileData }: QuartzComponentProps) {
    const goldstraw = fileData.frontmatter?.goldstraw
    const data = fileData.text
    return <div class="goldstraw-div">
    <button class="goldstraw-main" id="goldstraw-docx">

    </button>
    </div>
    
    


/*     async function createDocX(data: string) {
        let doc = await processor.process(data);
        let blob = await doc.result;
        saveAs(blob as Blob, `j`)
    } */



    

    if(true) {
        return <div class="goldstraw-div">
            <button class="goldstraw-main" id="goldstraw-docx">

            </button>
            </div>
    } else return null

}



GoldStraw.afterDOMLoaded = script
export default (() => GoldStraw) satisfies QuartzComponentConstructor