import React from "react";
import { useState } from "react";
export default function Formulario() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || username === "" || email === "" || password === "") {
      alert("debes rellenar todos los campos");
    } else {
      alert(
        `los datos han sido enviados ${name} ${username} ${email} ${password}`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          name:
          <input value={name} onChange={handleNameChange} type="text" />
        </label>
        <br />
        <label htmlFor="">
          username:
          <input value={username} onChange={handleUsernameChange} type="text" />
        </label>
        <br />
        <label>
          email:
          <input value={email} onChange={handleEmailChange} type="email" />
        </label>

        <br />
        <label>
          password:
          <input value={password} onChange={handlePassword} type="password" />
        </label>
        <br />
        <button type="submit">enviar</button>
      </form>
    </div>
  );
}
