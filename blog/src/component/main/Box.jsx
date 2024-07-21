
export default function Box({title}){
    return(
        <div className="h-20 border-2 flex items-center pl-16 pt-1 rounded-lg bg-[var(--main-bg-color)] border-[var(--main-bg-color)] text-white">
            <p>{title}</p>
        </div>
    )
}