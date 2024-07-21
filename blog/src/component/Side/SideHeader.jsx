import Info from '../../img/info.png'
import comments from '../../data/comment'
import { useEffect, useRef, useState } from 'react';
import {motion} from 'framer-motion'
import SideName from './SideName';
export default function SideHeader(){
    const num = useRef(0);
    const content = useRef();
    const [check, setCheck] = useState(false);
    //useEffect를 통해 값을 받을 예정
    let start = null;
    const randomCmt = comments[Math.round(Math.random() * (comments.length -1))];
    
    const autoword =() => {
        //띄어쓰기를 받기위해 innerHTML 사용
        content.current.innerHTML+=randomCmt[num.current];
        num.current += 1
        if(num.current >= randomCmt.length){
            clearInterval(start);
            setCheck(true);
        }
    }
    useEffect(()=>{
        if(num.current < randomCmt.length){
            start = setInterval(autoword , 100);
        }
    },[])

    return(
        <div className="w-[35%] h-screen flex flex-col items-center justify-around bg-[var(--main-bg-color)] text-white">
            <img src={Info} alt="info_img" className="w-2/3 h-1/2 rounded-full border-[var(--main-bg-color)]"/>
            <motion.div
            initial={{
                opacity:0,
                x:-200
            }}
            animate={{
                opacity:1,
                x:0
            }}
            transition={{
                duration:1.5,
            }}
            
            className="h-32 flex-col flex items-center"
            >
                <p className='text-3xl font-bold' ref={content}></p>
                <br/>
                <SideName check={check}/>
            </motion.div>
            <hr className='w-4/5 border-t-[6px] border-dotted border-white'/>
        </div>
    )
}