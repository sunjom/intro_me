import Location from '../../../img/location.gif'
import Email from '../../../img/email.gif'
import Call from '../../../img/call.gif'
import '../SideCss.css'
import CircleImg from './CircleImg'
export default function SideMain(){
    return(
        <div className="SideCommon">
            <CircleImg Img= {Location} alt={"지역 이미지"}>충북 청주시 복대동<br/> 죽천로 146번길 6 대원칸타빌 아파트</CircleImg>
            <CircleImg Img={Call} alt={"전화번호"}>010-2671-0287</CircleImg>
            <CircleImg Img={Email} alt={"이메일"}>saysaysay223@gmail.com</CircleImg>
        </div>
    )
}