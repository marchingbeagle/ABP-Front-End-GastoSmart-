import BotaoApagar from "./BotaoApagar";

function TransacaoCard({ nome, valor, data }) {
  return (
    <section className="flex">
      <h2 className="border-black border-2 p-4">{nome}</h2>
      <p className="border-black border-2 p-4">{valor}</p>
      <p className="border-black border-2 p-4">{data}</p>
      <BotaoApagar />
    </section>
  );
}

export default TransacaoCard;