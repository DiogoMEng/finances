import Credit from "../components/Credit";
import Expenses from "../components/Expenses";

function Overheads(): JSX.Element {
    return (
        <>
            <h1>Despesas</h1>
            <h2>No débito</h2>
            <Expenses />
            <h1>No crédito</h1>
            <Credit />
        </>
    )
}

export default Overheads;