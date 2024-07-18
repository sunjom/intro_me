import HeaderBg from '../img/HeaderBg.jpg'
import {motion} from "framer-motion"
import comments from '../data/comment'
import {TypeAnimation} from 'react-type-animation'
export default function Header(){
    const randomIdx = Math.round(
        Math.random()* (comments.length-1))
      const randomCmt = comments[randomIdx];
    return(
        <div className="flex items-center w-screen h-screen bg-[url('./img/HeaderBg.jpg')] bg-cover">
            <TypeAnimation
             sequence={[randomCmt,10000,"NICE"]}
             className="text-3xl"
             cursor={false}
            />
        </div>
    )
}