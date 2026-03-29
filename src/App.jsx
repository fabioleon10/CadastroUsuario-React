import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";

// Componente do React - Função que retorna um JSX
// Em códigos muuuuito antigos pode ser uma classe, mas hoje em dia é mais comum usar funções.
// Tem um return
// Fora do return é javascript, dentro do return é JSX (uma sintaxe que mistura HTML e JavaScript).

//useState(Estado do React)
//Estado - Super Variável que pode ser alterada e que, quando alterada, faz com que apenas o componente seja re-renderizado (atualizado na tela). Isso evita que a tela toda seja recarregada.

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [users, setUsers] = useState([]);

  // O useState retorna um array com 2 posições, a primeira é o valor do estado e a segunda é uma função para atualizar o estado. O valor do estado é o que está entre os parênteses do useState, nesse caso é uma string vazia.

  function handleSubmit(event) {
    event.preventDefault(); // Evita que a página seja recarregada quando o formulário for enviado.  }

    const newUser = {
      id: Date.now(),
      name,
      email,
      age,
    };

    setUsers([...users, newUser]); // O setUsers é a função para atualizar o estado, ele recebe o novo valor do estado. Nesse caso, estamos criando um novo array com o newUsers e os usuários anteriores (usando o spread operator ...users).
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuários</h1>

      {/* /* // O onSubmit é um evento do formulário, ele é acionado quando o formulário é enviado (quando o botão de submit é clicado). */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
export default App;
