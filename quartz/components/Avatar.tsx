import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/avatar.scss"

function Avatar() {
    return <div class="avatar-div"><img class="avatar-image avatar-a1" draggable={false} src="https://cdn.discordapp.com/attachments/1001795675593379860/1143894928997494794/Screenshot_20230823_160559_Instagram.jpg"/></div>

}

Avatar.css = styles
export default (() => Avatar) satisfies QuartzComponentConstructor