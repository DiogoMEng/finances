export default function FinancialRecord(): JSX.Element {
    return (
        <section className="bg-[#19191a] min-h-screen relative text-white p-4">
            <h1 className="bg-[#020202] w-60 m-auto mb-2 p-1 text-center text-2xl font-bold border-b-4 border-r-4 border-[#c9b977] rounded-md">Novos Registros</h1>
            <form className="bg-[#020202] mx-auto w-2/6 p-3 rounded-md" action="">
                <div className="mt-2">
                    <span className="border-b-2 border-[#c9b977]">Novo Saldo da Conta</span>
                    <div className="flex mt-8 items-center">
                        <div className="group">
                            <label className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Inserir Saldo (Ex: 1200)</label>
                            <input id="balance" className="text-black p-1 mr-5 rounded-md" type="text" required/>
                        </div>
                        <label htmlFor="paycheck">O pagamento já relizado?</label>
                        <input id="paycheck" className="w-4 h-4 ml-3" type="checkbox" defaultChecked/>
                    </div>
                </div>
                <div className="mt-10">
                    <span className="border-b-2 border-[#c9b977]">Despesas em Débito/Dinheiro</span>
                    <div className="mt-8 items-center group">
                        <label className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Qual foi a despesa? (Ex: Amazon Store)</label>
                        <input id="balance" className="text-black p-1 mr-5 rounded-md w-4/6 placeholder:text-gray-400" type="text" required/>
                    </div>
                    <div className="flex mt-7 items-center">
                        <div className="group">
                            <label className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Novo Saldo (Ex: R$100)</label>
                            <input id="balance" className="text-black p-1 mr-5 rounded-md placeholder:text-gray-400" type="text" required/>
                        </div>
                        <label>O pagamento já relizado?</label>
                        <input className="w-4 h-4 ml-3" type="checkbox" defaultChecked/>
                    </div>
                </div>
                <div className="mt-10">
                    <span className="border-b-2 border-[#c9b977]">Despesas em Crédito</span>
                    <div className="mt-8 items-center group">
                        <label className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Qual foi a despesa no crédito? (Ex: Lider)</label>
                        <input id="balance" className="text-black p-1 mr-5 rounded-md w-4/6 placeholder:text-gray-400" type="text" required/>
                    </div>
                    <div className="flex mt-7 items-center">
                        <div className="group">
                            <label className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Novo Saldo (Ex: R$300)</label>
                            <input id="balance" className="text-black p-1 mr-5 rounded-md placeholder:text-gray-400" type="text" required/>
                        </div>
                        <label>O pagamento já relizado?</label>
                        <input className="w-4 h-4 ml-3" type="checkbox" defaultChecked/> 
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