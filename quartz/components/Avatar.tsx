import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/avatar.scss"

function Avatar({ fileData }: QuartzComponentProps) {
    const author = fileData.frontmatter?.author
    let avatarimageurl = "https://cdn.discordapp.com/attachments/1001795675593379860/1143894928997494794/Screenshot_20230823_160559_Instagram.jpg"
    if(author == "minh") {
        avatarimageurl = "https://cdn.discordapp.com/attachments/664701901585121290/1144629405944119346/image.png"
    }
    return <div class="avatar-div"><img class="avatar-image avatar-a1" draggable={false} src={avatarimageurl}/></div>

}

Avatar.css = styles
export default (() => Avatar) satisfies QuartzComponentConstructor