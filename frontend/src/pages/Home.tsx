import Account from "../components/Account";

export function Home(){
    return (
        <article className="bg-[#19191a] w-1/2 m-auto my-5 p-3 text-white rounded-md">
            <h1 className="bg-[#020202] w-60 m-auto mb-2 p-1 text-center text-2xl font-bold border-[1px] border-[#c9b977] rounded-md">Saldos da Conta</h1>
            <Account />
        </article>
    )
}