import HeaderCnt from "./HeaderCnt";
import SideHeader from "./Side/SideHeader";
export default function Header(){
    return(
        <div className="w-screen h-screen flex">
            <SideHeader/>
            <HeaderCnt/>
        </div>
    )
}