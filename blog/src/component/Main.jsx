import Content from "./main/Main/Content";
import SideMain from "./Side/Main/SideMain";

export default function Main(){
    return(
        <div className="w-screen h-screen flex">
            <SideMain/>
            <Content/>
        </div>
    )
}