export default function CircleImg({Img,alt, children}){
    return(
        <div className="flex items-center justify-center flex-col whitespace-pre-line">
            <div className="flex items-center justify-center w-44 h-44 bg-[#B3B3B3] rounded-full" >
                <img className="w-1/2 h-1/2" src={Img} alt={alt}/>
            </div>
            <p className="text-center mt-6 font-bold">{children}</p>
        </div>
    )
}