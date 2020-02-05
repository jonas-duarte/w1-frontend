import React from "react";

const Field = ({ name, label }) => {
  return (
    <div className="w1FieldContainer">
      <label for={name}>{label}</label>
      <br></br>
      <input type="text" name={name}></input>
    </div>
  );
};

export default Field;
