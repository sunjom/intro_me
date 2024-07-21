import Info from '../../img/info.png'
import SideContent from './SideContent';
export default function SideHeader(){

    return(
        <div className="w-[35%] h-screen flex flex-col items-center justify-around bg-[var(--main-bg-color)] text-white font-[naverCoding]">
            <img src={Info} alt="info_img" className="w-2/3 h-1/2 rounded-full border-[var(--main-bg-color)]"/>
            <SideContent/>
            <hr className='w-4/5 border-t-[6px] border-dotted border-white'/>
        </div>
    )
}