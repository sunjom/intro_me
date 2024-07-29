import CircleImg from '../Main/CircleImg'
import '../SideCss.css'
import Git from '../../../img/gitImg.png'
import Notion from '../../../img/notionImg.svg'
export default function SideFooter(){
    return(
        <div className="SideCommon">
            <CircleImg Img={Git} alt={"Git 이미지"}> 
                <a className="text-[#aca0f0]" href="https://github.com/sunjom" target='_blank'>깃허브 주소</a>
            </CircleImg>
            <CircleImg Img={Notion} alt={"Notion 이미지"}>
                <a className="text-[#aca0f0]" href='https://excessive-poppyseed-eaa.notion.site/2d902bab509a439f8f8574f2dc48ae58?pvs=4' target='_blank'>자기소개 프로젝트</a>
            </CircleImg>
        </div>
    )
}