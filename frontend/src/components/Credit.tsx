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

    if(isCurrentMonth(credits[0].dt_despesa_credito)) return null!;

    return (
        <>
            {credits.map((credit, index) => (
                <ul key={index}>
                    <li>Valor: R${credit.valor_credito}</li>
                    <li>Despesa: {credit.despesa_credito}</li>
                    <li>Descrição de gasto: {credit.descricao}</li>
                    <li>Data de Gasto: {formattedDate(credit.dt_despesa_credito)}</li>
                </ul>
            ))}
        </>
    )
}

export default Credit;