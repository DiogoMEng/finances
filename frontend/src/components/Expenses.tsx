import { useEffect, useState } from "react";
import { ExpensesProtocol } from "../interfaces/Balance.protocol";
import axios from "axios";
import { formattedDate } from "../utils/formattedDate";

function Expenses(): JSX.Element {
    const [expenses, setExpenses] = useState<ExpensesProtocol[] | null>(null);

    useEffect(() => {
        axios.get("http://localhost:3000/account/expenses").then((res) => {
            setExpenses(res.data);
        });
    }, []);

    if(!expenses) return null!;

    return (
        <div className="max-h-72 overflow-y-auto">
            <table className="w-10/12 m-auto border-collapse">
                <tr className="border-b-2">
                    <th className="w-40">Valor</th>
                    <th className="w-40">Despesa</th>
                    <th className="w-40">Status</th>
                    <th className="w-40">Data de Compra</th>
                </tr>
                {expenses.map((expense, index) => (
                    <tr className="border-b-[1px] text-center even:bg-[#373739]" key={index}>
                        <td className="duration-300 hover:py-2">R${expense.valor_despesa}</td>
                        <td className="duration-300 hover:py-2">{expense.despesa}</td>
                        <td className="duration-300 hover:py-2">{expense.status_despesa != false ? "Pago" : "Pendente"}</td>
                        <td className="duration-300 hover:py-2">{formattedDate(expense.dt_despesa)}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Expenses;