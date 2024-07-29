import SideFooter from "./Side/Footer/SideFooter";
import FooterMain from "./main/Footer/FooterMain";

export default function Footer(){
    return(
        <div className="w-screen h-screen flex">
            <SideFooter/>
            <FooterMain/>
        </div>
    )
}