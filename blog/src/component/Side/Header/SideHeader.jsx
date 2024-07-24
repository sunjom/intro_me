import Info from '../../../img/info.png'
import SideContent from './SideContent';
import '../SideCss.css'
export default function SideHeader(){
    return(
        <div className="SideCommon">
            <img src={Info} alt="info_img" className="w-2/3 h-1/2 rounded-full border-[var(--main-bg-color)]"/>
            <SideContent/>
            <hr className='w-4/5 border-t-[6px] border-dotted border-white'/>
        </div>
    )
}