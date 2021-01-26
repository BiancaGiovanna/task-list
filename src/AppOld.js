import "./App.css";
import { useState } from "react";

function Header(props) {
  return (
    <header>
      <p>
        Hello {props.name}
      </p>
      <button onClick={props.click}>Trocar usuário</button>
      {props.children}
      <hr />
    </header>
  )
}
function Form() {
  const [nome, setNome] = useState("");
  
  const handleNome = (e) => { 
    setNome(e.target.value)
  }

  return (
    <>
      <p>{nome}</p>
      <input type="text" placeholder="Digite seu nome"  value= {nome}
      onChange={handleNome}/>
     
    </>
  )
}
function App() {
  //useState é uma variavel de estado
  const [user, setUser] = useState("Fulano");

  const handleClick = () => {
    if (user === "Fulano")
      setUser("Bianca")
    else setUser("Fulano")
  }
  return (
    <div className="App">
      <Header name="Bianca" click={handleClick}>
        <p>Filho 1</p>
        <p>Filho 2</p>
      </Header>
      <p>
        My React App
      </p>
      <p>
        Nome do usuário: {user}
      </p>
      <hr />
      <Form />
    </div>
  );
}

export default App;
