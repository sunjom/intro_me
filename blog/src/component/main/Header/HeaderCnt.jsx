import Box from "../Box";
import Cnt from "./Cnt";
import Title from "./Title";
import '../MainCss.css'
export default function HeaderCnt(){
    return(
        <div className="MainCommon">
            <Title />
            <Cnt/>
        </div>
    )
}