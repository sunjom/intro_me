
import {motion} from "framer-motion"
import comments from '../data/comment'
import {TypeAnimation} from 'react-type-animation'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import HeaderBg from '../img/greeting.gif'
import  './Header.css'
export default function Header(){
    const num = useRef(0);
    //useRef를 2개 이상 사용할 예정이라, 배열로 생성
    const content = useRef([]);
    //useEffect를 통해 값을 받을 예정
    let start = null;
    const randomCmt = comments[Math.round(Math.random() * (comments.length -1))];
    
    const autoword =() => {
        //띄어쓰기를 받기위해 innerHTML 사용, 값을 사용할 떈 current앞에 배열 추가.
        content.current[1].innerHTML+=randomCmt[num.current];
        num.current += 1
        if(num.current >= randomCmt.length){
            clearInterval(start);
        }
    }
    useEffect(()=>{
        if(num.current < randomCmt.length){
            start = setInterval(autoword , 150);
            console.log("AA");
        }
        console.log(num.current);
        console.log(randomCmt.length);
    },[])

    return(
            <div className="flex justify-center items-center w-screen h-screen Bg" ref={el => (content.current[0] = el)}>
                <div className='w-[50vw] h-4/5 border-2 flex flex-col justify-center items-center'>
                    <img className="rounded-full" src={HeaderBg} alt="err"/>
                    <motion.div
                    initial={{
                        opacity:0,
                        y:150,
                    }}
                    transition={{
                        duration:1

                    }}
                    whileInView={{
                        opacity:1,
                        y:0,
                    }}
                    >
                        <p className='text-3xl font-bold text-blue-600 mt-[50px]' ref={el => (content.current[1] = el)}></p>
                    </motion.div>
                </div>

            </div>
    )
}