import HeaderCnt from "./main/Header/HeaderCnt";
import SideHeader from "./Side/Header/SideHeader";
export default function Header(){
    return(
        <div className="w-screen h-screen flex">
            <SideHeader/>
            <HeaderCnt/>
        </div>
    )
}