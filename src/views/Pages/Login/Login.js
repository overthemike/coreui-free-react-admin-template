import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import { useAuth } from "../../../hooks";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signin(username, password);
      props.history.push("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div class="login-body"></div>
      <div class="grad"></div>
      <div class="header">
        <div>
          Travel<span className="text-primary">Wealth</span>
        </div>
      </div>
      <br />
      <div class="login">
        <Form onSubmit={handleSubmit}>
          <Input
            className="mb-2"
            type="text"
            placeholder="Username"
            autoComplete="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            className="mb-2"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            className="btn btn-primary btn-lg btn-block"
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
