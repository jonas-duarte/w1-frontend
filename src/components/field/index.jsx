import React, { Component } from "react";

// quando tiver desabilitado deve exibir um cadeado no canto direito para indicar que a edição está bloqueada

class Field extends Component {
  state = {
    text: ""
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { name, label, required } = this.props;
    const { text } = this.state;
    const active = text ? true : false;
    return (
      <div className={`w1Field${active ? " w1FieldActive" : ""}`}>
        <label>{(required ? "*" : "") + label}</label>
        <input type="text" name={name} onChange={this.onChange}></input>
      </div>
    );
  }
}

export default Field;
