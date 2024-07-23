import Box from "../Box";
import Cnt from "./Cnt";
import Title from "./Title";

export default function HeaderCnt(){
    return(
        <div className="w-2/3 h-screen flex flex-col items-center justify-between">
            <Title />
            <Cnt/>
        </div>
    )
}