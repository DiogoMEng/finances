export default function FinancialRecord(): JSX.Element {
    return (
        <section className="bg-[#19191a] text-white p-3">
            <h1 className="bg-[#020202] w-60 m-auto mb-2 p-1 text-center text-2xl font-bold border-b-4 border-r-4 border-[#c9b977] rounded-md">Novos Registros</h1>
            <form className="bg-[#020202] mx-auto w-1/2 p-3 rounded-md" action="">
                <div className="">
                    <span className="border-b-2 border-[#c9b977]">Inserir Novo Saldo</span>
                    <div className="flex mt-5 items-center">
                        <label className="mr-4" htmlFor="balance">Novo Saldo:</label>
                        <input id="balance" className="text-black p-1 mr-2 rounded-md" type="number" placeholder="R$1200"/>
                        <input className="" type="checkbox"/> 
                    </div>
                </div>
            </form>
        </section>
    )
}