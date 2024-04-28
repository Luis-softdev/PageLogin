/* eslint-disable no-unused-vars */
import React from 'react';
import  {FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import './Login.css'
const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados: " + userName + " - " + password)
    }

  return (
    <div className="Container">
        <form onSubmit={handleSubmit}>
            <h1>Bem-Vindo</h1>
            <div className='input-field'>
                <input 
                type="email" 
                placeholder='E-mail' 
                onChange={(e) => setUserName(e.target.value)}
                />
                <FaUser className='icon'></FaUser>
            </div>
            <div className='input-field'> 
                <input 
                type="password" 
                placeholder='Senha' 
                onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className='icon'></FaLock>
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre-se de mim
                </label>
                <a href="#">Esqueci minha senha</a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href='#'> Registre-se</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login
