import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/avatar.scss"



function FlipdownTimer() {
   
        

    return <div>
        <div id="flipdown" class="flipdown"></div>
    </div>

}

FlipdownTimer.css = styles
export default (() => FlipdownTimer) satisfies QuartzComponentConstructor