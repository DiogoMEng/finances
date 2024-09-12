import { useEffect, useState } from "react";
import { ExpensesProtocol } from "../interfaces/Account.protocol";
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
        <table className="max-h-72 overflow-y-auto m-auto border-collapse">
            <tr className="border-b-2">
                <th className="w-40">Valor</th>
                <th className="w-40">Despesa</th>
                <th className="w-40">Status</th>
                <th className="w-40">Data de Compra</th>
            </tr>
            {expenses.map((expense, index) => (
                <tr className="border-b-[1px] text-center even:bg-[#373739]" key={index}>
                    <td>R${expense.valor_despesa}</td>
                    <td>{expense.despesa}</td>
                    <td>{expense.status_despesa != false ? "Pago" : "Pendente"}</td>
                    <td>{formattedDate(expense.dt_despesa)}</td>
                </tr>
            ))}
        </table>
    )
}

export default Expenses;