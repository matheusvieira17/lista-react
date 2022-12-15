import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <div className="container">
      <h1> Lista de presença </h1>
      <input type="text" placeholder="Digite seu nome" />
      <button> Adicionar </button>
      <Card name="Matheus" time="09:05:34" />
      <Card name="João" time="11:15:34" />
      <Card name="Maria" time="11:25:24" />
    </div>
  );
};
