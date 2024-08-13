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
        <>
            {expenses.map((expense, index) => (
                <ul key={index}>
                    <li>Valor: R${expense.valor_despesa}</li>
                    <li>Despesa: {expense.despesa}</li>
                    <li>Status de Pagamento: {expense.status_despesa != false ? "Pago" : "Pendente"}</li>
                    <li>Data de Criação: {formattedDate(expense.dt_despesa)}</li>
                </ul>
            ))}
        </>
    )
}

export default Expenses;