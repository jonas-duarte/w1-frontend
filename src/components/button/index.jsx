import React from "react";

const Button = ({ children, theme, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w1Button ${theme === "secondary" ? "w1ButtonSecondary" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
