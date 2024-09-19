export default function FinancialRecord(): JSX.Element {
    return (
        <section className="bg-[#19191a] min-h-screen relative text-white p-4">
            <h1 className="bg-[#020202] w-60 m-auto mb-2 p-1 text-center text-2xl font-bold border-b-4 border-r-4 border-[#c9b977] rounded-md">Novos Registros</h1>
            <form className="bg-[#020202] mx-auto w-2/6 p-3 rounded-md" action="">
                <div className="mt-2">
                    <span className="border-b-2 border-[#c9b977]">Inserir Novo Saldo</span>
                    <div className="mt-5 items-center">
                        <input id="balance" className="text-black p-1 mr-5 rounded-md placeholder:text-gray-400" type="text" placeholder="Novo Saldo (Ex: R$1200)" autoFocus/>
                        <label htmlFor="paycheck">O pagamento já relizado?</label>
                        <input id="paycheck" className="w-4 h-4 ml-3" type="checkbox" defaultChecked/> 
                    </div>
                </div>
                <div className="mt-10">
                    <span className="border-b-2 border-[#c9b977]">Despesas em Débito/Dinheiro</span>
                    <div className="mt-5 items-center">
                        <input id="balance" className="text-black p-1 mr-5 rounded-md w-4/6 placeholder:text-gray-400" type="text" placeholder="Qual foi a despesa? (Ex: Amazon Store)"/>
                    </div>
                    <div className="mt-5 items-center">
                        <input id="balance" className="text-black p-1 mr-5 rounded-md placeholder:text-gray-400" type="text" placeholder="Novo Saldo (Ex: R$100)"/>
                        <label htmlFor="paycheck">O pagamento já relizado?</label>
                        <input id="paycheck" className="w-4 h-4 ml-3" type="checkbox" defaultChecked/> 
                    </div>
                </div>
                <div className="mt-10">
                    <span className="border-b-2 border-[#c9b977]">Despesas em Crédito</span>
                    <div className="mt-5 items-center">
                        <input id="balance" className="text-black p-1 mr-5 rounded-md w-4/6 placeholder:text-gray-400" type="text" placeholder="Qual foi a despesa no crédito? (Ex: Lider)"/>
                    </div>
                    <div className="mt-5 items-center">
                        <input id="balance" className="text-black p-1 mr-5 rounded-md placeholder:text-gray-400" type="text" placeholder="Novo Saldo (Ex: R$300)"/>
                        <label htmlFor="paycheck">O pagamento já relizado?</label>
                        <input id="paycheck" className="w-4 h-4 ml-3" type="checkbox" defaultChecked/> 
                    </div>
                </div>
                <div className="mt-10 flex justify-center gap-10">
                    <input className="bg-[#19191a] py-2 px-5 rounded-md duration-300 hover:bg-[#c9b977] hover:text-black hover:font-bold" type="button" value="Enviar"/>
                    <input className="bg-[#19191a] py-2 px-5 rounded-md duration-300 hover:bg-[#c9b977] hover:text-black hover:font-bold" type="reset" value="Limpar"/>
                </div>
            </form>
        </section>
    )
}