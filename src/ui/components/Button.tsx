export default function Button({onClick, title, icon, className}: {onClick: React.ReactEventHandler, title: string, icon?: React.ReactNode,className?:string}) {
    return(
        <button onClick={onClick} className={`flex items-center gap-2 bg-blue-50 text-blue-800 font-medium px-4 py-1.5 rounded-md hover:bg-blue-100 transition ${className}`}>
            {icon}
            {title}
        </button>
    )
}