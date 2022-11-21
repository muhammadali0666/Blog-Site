import { NavLink } from "react-router-dom";
import { Layout } from "../../Components/Layout/layout";
import { Logo } from "../../Components/Logo/logo";
import { useState } from "react";
import "./signup.css";

export const Signup = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

 async function handleSubmit(e){
  e.preventDefault()
  const res = await fetch("https://n36-blog.herokuapp.com/login?login" + login + "&password+" + password)
  const {token} = await res.json()

  if(token){
    localStorage.setItem("token", token)
  }
 }

  return (
    <>
      <Layout>
        <div className="container">
          <div>
            <Logo/>
          </div>

          <div>
            <h2 className="login">Login</h2>
            <form className="form" onSubmit={handleSubmit}>
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="input"
                type="text"
                placeholder="login"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                type="password"
                placeholder="password"
              />
              <button type="submit" className="sign-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};
