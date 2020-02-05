import React from "react";

// definir tamanho maximo de 1000
// se passar do tamanho maximo tem q exibir o botão de 3 pontinhos

const Navbar = ({ img, menu }) => {
  return (
    <div className="w1Navbar">
      <a
        style={{
          height: "100%",
          width: "80px",
          padding: "0px 0px"
        }}
        href="/"
      >
        <img src={img}></img>
      </a>
      {menu.map(m => (
        <a href={m.link}>{m.label}</a>
      ))}
    </div>
  );
};

export default Navbar;
