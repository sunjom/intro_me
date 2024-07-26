import Box from "../Box";
import UlAnimation from "./UlAnimation";

export default function Certificate(){
    return(
        <div className="ContextCommon">
            <div>
                <Box title={"자격증"}/>
                <ul className="mt-4 ">
                    <li><UlAnimation date={"2024.06"} name={"정보처리기사"}/></li>
                    <li><UlAnimation date={"2023.12"} name={"SQL개발자(SQLD자격)"}/></li>
                    <li><UlAnimation date={"2021.08"} name={"컴퓨터활용능력2급"}/></li>
                </ul>
            </div>
            <div>
                <Box title={"학력"}/>
            </div>

            <div>
                <Box title={"프로젝트"}/>
            </div>
        </div>
    )
}