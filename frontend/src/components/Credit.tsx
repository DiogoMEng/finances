import { useEffect, useState } from "react";
import { ExpensesCreditProtocol } from "../interfaces/Account.protocol";
import axios from "axios";
import { formattedDate } from "../utils/formattedDate";
import isCurrentMonth from "../utils/isCurrentMonth";

function Credit(): JSX.Element {
    const [credits, setCredit] = useState<ExpensesCreditProtocol[] | null>(null);

    useEffect(() => {
        axios.get("http://localhost:3000/account/expenses/credit").then((res) => {
            setCredit(res.data);
        });
    }, []);

    if(!credits) return null!;

    return (
        <table className="max-h-72 overflow-y-auto m-auto border-collapse">
            <tr className="border-b-2">
                <th className="w-40">Valor</th>
                <th className="w-40">Despesa</th>
                <th className="w-40">Descrição de Gasto</th>
                <th className="w-40">Data de Gasto</th>
            </tr>
            {credits.map((credit, index) => (
                <tr className="border-b-[1px] text-center even:bg-[#373739]" key={index}>
                    <td>R${credit.valor_credito}</td>
                    <td>{credit.despesa_credito}</td>
                    <td>{credit.descricao}</td>
                    <td>{formattedDate(credit.dt_despesa_credito)}</td>
                </tr>
            ))}
        </table>
    )
}

export default Credit;