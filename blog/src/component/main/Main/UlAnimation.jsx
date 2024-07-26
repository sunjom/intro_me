import {motion} from 'framer-motion'
import { useRef } from 'react';
import { useState } from 'react'
export default function UlAnimation({date,name}){
    const [on, setOn] = useState(true);
    const circle = useRef();
    const Switch = () => setOn(!on);
    const a = () => console.log(circle.current);
    const animation = {
        type:"spring",
        stiffness : 700,
        damping:30
    }
    const DivStyle = 'w-14 h-10 rounded-3xl flex bg-slate-300 items-center cursor-pointer '
    return(
        <div className='flex items-center mt-5'>
            <div className={on ? DivStyle + 'justify-end' : DivStyle + 'justify-start'} onClick={Switch}>
            <motion.div
                className='w-8 h-8 bg-white rounded-2xl'
                layout
                onMouseDown={a}
                transition={animation}
                ref={circle}
            />
            </div>
            {on ? <motion.p
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:1,
                    x:[-100,10,-10,0]
                }}
                transition={{
                    duration:1
                }}
             className='ml-10'>{date}</motion.p> : <></>}
            {on ? <motion.p
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    duration:1
                }}
             className='ml-10'>{name}</motion.p> : <></>}
        </div>
    )
}