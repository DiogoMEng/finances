import Credit from "../components/Credit";
import Expenses from "../components/Expenses";

function Overheads(): JSX.Element {
    return (
        <article className="bg-[#19191a] w-11/12 m-auto my-5 p-3 text-white rounded-md">
            <h1 className="bg-[#020202] w-60 m-auto mb-2 p-1 text-center text-2xl font-bold border-[1px] border-[#c9b977] rounded-md">Despesas</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#020202] p-2 rounded-md group">
                    <h2 className="w-52 text-xl mb-3 border-b-2 border-white duration-75 group-hover:font-bold group-hover:w-full group-hover:text-center">Realizadas no Débito</h2>
                    <Expenses />
                </div>
                <div className="bg-[#020202] p-2 rounded-md group">
                    <h1 className="w-52 text-xl mb-3 border-b-2 border-white duration-75 group-hover:font-bold group-hover:w-full group-hover:text-center">Realizadas no Crédito</h1>
                    <Credit />
                </div>
            </div>
        </article>
    )
}

export default Overheads;