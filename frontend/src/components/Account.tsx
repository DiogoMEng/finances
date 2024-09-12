import { useEffect, useState } from "react";
import { AccountProtocol } from "../interfaces/Account.protocol";
import axios from "axios";
import { formattedDate } from "../utils/formattedDate";

function Account (): JSX.Element {
    const [accounts, setAccounts] = useState<AccountProtocol[] | null>(null);

    
    useEffect(() => {
        axios.get("http://localhost:3000/account/").then((res) => {
            setAccounts(res.data);
        });
    }, []);

    if(!accounts) return null!;

    console.log(accounts);

    return (
        <table className="max-h-72 overflow-y-auto m-auto border-collapse">
            <tr className="border-b-2">
                <th className="w-40">Valor</th>
                <th className="w-40">Status</th>
                <th className="w-40">Data de Pagamento</th>
            </tr>
            {accounts.map((account, index) => (
                <tr className="border-b-[1px] text-center even:bg-[#373739]" key={index}>
                    <td>R${account.valor_conta}</td>
                    <td>{account.status_recebimento != false ? "Pago" : "Pendente"}</td>
                    <td>{formattedDate(account.dt_recebimento)}</td>
                </tr>
            ))}
        </table>
    )
}

export default Account;