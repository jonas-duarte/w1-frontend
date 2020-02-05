import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Field from "./components/field";

function App() {
  return (
    <div>
      <Field label="Nome" name="name"></Field>
      <Field label="Cidade" name="name"></Field>
      <Field label="Nome da mãe" name="name"></Field>
      <Field label="Nome do pai" name="name"></Field>
      <Field label="CPF" name="name"></Field>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button onClick={() => console.log("avançar")}>Avançar</Button>
      <Button onClick={() => console.log("voltar")} theme="secondary">
        Voltar
      </Button>
    </div>
  );
}

export default App;
