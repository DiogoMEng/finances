import Expenses from "../components/Expenses";
import Credit from "../components/Credit";
import Account from "../components/Account";

export function Home(){
    return (
        <section>
            <div>
                <h1>Conta</h1>
                <Account />
            </div>
            <div>
                <h2>Despesas</h2>
                <Expenses />
            </div>
            <div>
                <h2>Despesas no Crédito</h2>
                <Credit />
            </div>
        </section>
    )
}