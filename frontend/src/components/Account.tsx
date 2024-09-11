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
        <>
            {accounts.map((account, index) => (
                <ul key={index}>
                    <li>Valor da Conta: R${account.valor_conta}</li>
                    <li>Status de Pagamento: R${account.status_recebimento != false ? "Pago" : "Pendente"}</li>
                    <li>Data de Recebimento: {formattedDate(account.dt_recebimento)}</li>
                </ul>
            ))}
        </>
    )
}

export default Account;