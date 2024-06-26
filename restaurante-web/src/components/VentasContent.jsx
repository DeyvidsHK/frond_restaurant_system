import Header from "./Header";
import Main from "./Main";
import PisosDisponiblesVentas from "./PisosDisponiblesVentas";

export default function VentasContent(props) {  
    return (
        <>
            <Header text2="Pages / " text="Ventas" icon>
            </Header>
            <Main>
                <div className="w-11/12 mt-10">
                    <div className="bg-white w-full pl-10 py-5 text-negro-claro text-3xl font-semibold rounded-2xl">Información de Salas</div>
                    <div className="w-full mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        <PisosDisponiblesVentas handleContentClick={props.handleContentClick} text="PRIMER PISO" active ></PisosDisponiblesVentas>
                        <PisosDisponiblesVentas text="SEGUNDO PISO" active ></PisosDisponiblesVentas>
                        <PisosDisponiblesVentas text="TERCER PISO" active ></PisosDisponiblesVentas>
                        <PisosDisponiblesVentas text="AZOTEA"  ></PisosDisponiblesVentas>
                    </div>
                </div>
            </Main>
        </>
    )
}