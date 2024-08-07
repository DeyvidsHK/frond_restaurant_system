
export default function PisosDisponiblesVentas({text, active, onClick}) {
  
    return(
        <>
            <div className="flex flex-col w-52 h-56 items-center justify-center shadow-xl dark:bg-gradient-to-b from-gris-top-dashboard to-gris-bottom-dashboard rounded-xl cursor-pointer" onClick={onClick}>
                <span className="w-24 h-16 bg-orange-400 mt-6 rounded-lg"></span>
                <p className="py-3 text-sm font-semibold text-white">{text}</p>
                <span className={`h-5 mb-9 px-1 text-center text-xs font-bold rounded-lg  ${active ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {active ? "Disponible" : "Ocupado"}
                </span>
                
            </div>
        </>
    )
}