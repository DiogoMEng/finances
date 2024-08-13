import { useEffect, useState } from "react";
import { AccountProtocol } from "../interfaces/Account.protocol";
import axios from "axios";
import { formattedDate } from "../utils/formattedDate";
import isCurrentMonth from "../utils/isCurrentMonth";

function Account (): JSX.Element {
    const [account, setAccount] = useState<AccountProtocol | null>(null);

    useEffect(() => {
        axios.get("http://localhost:3000/account/").then((res) => {
            setAccount(res.data[0]);
        });
    }, []);

    if(!account) return null!;

    if(isCurrentMonth(account.dt_recebimento)) return null!;

    return (
        <>
            <p>Valor da Conta: {account.valor_conta}</p>
            <p>Status de Pagamento: {account.status_recebimento != false ? "Pago" : "Pendente"}</p>
            <p>Data de Recebimento: {formattedDate(account.dt_recebimento)}</p>
        </>
    )
}

export default Account;