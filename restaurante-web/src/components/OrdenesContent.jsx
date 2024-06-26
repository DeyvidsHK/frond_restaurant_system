import Header from "./Header";
import Main from "./Main";
import DataTableOrdenes from "../view/DataTables/DataTableOrdenes";

export default function OrdenesContent() {
    return(
        <>
            <Header text2="Pages / " text="Ordenes" icon>
            </Header>
            <Main>
                <DataTableOrdenes></DataTableOrdenes>
            </Main>
        </>
    )
}