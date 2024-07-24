export default function CircleImg({Img,alt, children}){
    return(
        <div className="flex items-center justify-center flex-col whitespace-pre-line">
            <div className="flex items-center justify-center w-32 h-32 bg-[#B3B3B3] rounded-full" >
                <img src={Img} alt={alt}/>
            </div>
            <p className="text-center mt-6">{children}</p>
        </div>
    )
}