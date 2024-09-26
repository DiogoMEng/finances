import axios from "axios"
import { FormEvent } from "react";

export default function FinancialRecord(): JSX.Element {
    const sendForm = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data: { [key: string]: string } = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        console.log(data);

        axios.post('http://localhost:3000/balance/credit', data)
    }

    return (
        <section className="bg-[#19191a] min-h-screen relative text-white p-4">
            <h1 className="bg-[#020202] w-60 m-auto mb-2 p-1 text-center text-2xl font-bold border-b-4 border-r-4 border-[#c9b977] rounded-md">Novos Registros</h1>
            <form onSubmit={sendForm} className="bg-[#020202] mx-auto w-2/6 p-3 rounded-md" action="">

                {/* BALANCE */}
                <div className="mt-2">
                    <span className="border-b-2 border-[#c9b977]">Novo Saldo da Conta</span>
                    <div className="flex mt-8 items-center">
                        <div className="group">
                            <label htmlFor="balance" className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Inserir Saldo (Ex: 1200)</label>
                            <input id="balance" className="text-black p-1 mr-5 rounded-md" name="accountValue" type="text" required/>
                        </div>
                        <label htmlFor="paycheck">O pagamento já relizado?</label>
                        <input id="paycheck" className="w-4 h-4 ml-3" name="receiptStatus" type="checkbox" defaultChecked/>
                    </div>
                </div>

                {/* EXPENSES */}
                <div className="mt-10">
                    <span className="border-b-2 border-[#c9b977]">Despesas em Débito/Dinheiro</span>
                    <div className="mt-8 items-center group">
                        <label htmlFor="expense" className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Qual foi a despesa? (Ex: Amazon Store)</label>
                        <input id="expense" className="text-black p-1 mr-5 rounded-md w-4/6 placeholder:text-gray-400" name="expense" type="text" required/>
                    </div>
                    <div className="flex mt-7 items-center">
                        <div className="group">
                            <label htmlFor="expenseAmount" className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Novo Saldo (Ex: R$100)</label>
                            <input id="expenseAmount" className="text-black p-1 mr-5 rounded-md placeholder:text-gray-400" name="expenseAmount" type="text" required/>
                        </div>
                        <label htmlFor="expenseStatus">O pagamento já relizado?</label>
                        <input id="expenseStatus" className="w-4 h-4 ml-3" name="expenseStatus" type="checkbox" defaultChecked/>
                    </div>
                </div>

                {/* CREDIT */}
                <div className="mt-10">
                    <span className="border-b-2 border-[#c9b977]">Despesas em Crédito</span>
                    <div className="mt-8 items-center group">
                        <label htmlFor="creditExpense" className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Qual foi a despesa no crédito? (Ex: Lider)</label>
                        <input id="creditExpense" className="text-black p-1 mr-5 rounded-md w-4/6 placeholder:text-gray-400" name="creditExpense" type="text" required/>
                    </div>
                    <div className="mt-7 items-center">
                        <div className="group">
                            <label htmlFor="creditExpenseAmount" className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Novo Saldo (Ex: R$300)</label>
                            <input id="creditExpenseAmount" className="text-black p-1 mr-5 rounded-md placeholder:text-gray-400" name="creditExpenseAmount" type="text" required/>
                        </div>
                        <div className="mt-7 group">
                            <label htmlFor="creditExpenseAmount" className="absolute px-1 py-1 text-black pointer-events-none duration-300  group-has-[:focus]:text-white group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-white group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]">Descrição do Gasto (Ex: Relógio de presente)</label>
                            <textarea id="description" className="w-3/4 max-h-14 text-black p-1 mr-5 rounded-md" name="description" required></textarea>
                        </div>
                    </div>
                </div>

                {/* BUTTON */}
                <div className="mt-10 flex justify-center gap-10">
                    <input className="bg-[#19191a] py-2 px-5 rounded-md duration-300 hover:bg-[#c9b977] hover:text-black hover:font-bold" type="submit" value="Enviar"/>
                    <input className="bg-[#19191a] py-2 px-5 rounded-md duration-300 hover:bg-[#c9b977] hover:text-black hover:font-bold" type="reset" value="Limpar"/>
                </div>
            </form>
        </section>
    )
}