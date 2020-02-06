import React from "react";
import "./App.css";
import Button from "./components/button";
import Field from "./components/field";
import Container from "./components/container";
import Navbar from "./components/navbar";
import img from "./logo.svg";

const menu = [
  { label: "Empresas", link: "empresas" },
  { label: "Portifólio", link: "portifolio" },
  { label: "Operações", link: "operações" }
];

function App() {
  return (
    <div>
      <Navbar img={img} menu={menu}></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Field required label="Nome" name="name"></Field>
        <Field label="Cidade" name="name"></Field>
        <Field label="Nome da mãe" name="name"></Field>
        <Field label="Nome do pai" name="name"></Field>
        <Field label="CPF" name="name"></Field>
        <br></br>
        <div style={{ float: "right" }}>
          <Button onClick={() => console.log("voltar")} theme="secondary">
            Voltar
          </Button>
          <Button onClick={() => console.log("avançar")}>Avançar</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
