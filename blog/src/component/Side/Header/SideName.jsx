import {motion} from 'framer-motion'
export default function SideName({check}){
    return(
        <>
            {check ? <motion.div
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:1,
                }}
                transition={{
                    duration:2.5,
                }}
                >
                    <p className='text-2xl font-bold '>My Name is YouSeonJong</p>
                </motion.div> : ''}
        </>
        
    )
}