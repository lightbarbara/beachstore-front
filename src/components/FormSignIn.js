/* import axios from "axios";
import { useNavigate } from "react-router-dom"; */
import { useState } from "react";

import styled from "styled-components";

export default function FormSignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    /* const navigate = useNavigate();

    function login(e){
        e.preventDefault()

        const URL = "http://localhost:5000/signIn"

        const body = {
            email: email,
            password: password
        }
        
        console.log(body)
        const promisse = axios.post(URL, body)

        promisse.then((res) => {
            console.log(res.data)
            localStorage.setItem('name', JSON.stringify(res.data.name));
            localStorage.setItem('token', JSON.stringify(res.data.token));

            navigate("/register");

        })

        promisse.catch((err) => {
            alert(err.response.data.error)
            
        })

    } */

    return(
        <Container>
            <Form /* onSubmit={login} */>
            <div className="primeiro-input">
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite o email..."
                    required />
            </div>
            <div className="segundo-input">
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha..."
                    required
                />
            </div>
            <div><button type="submit">{'Entrar'}</button></div>
            </Form>
            
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const Form = styled.form`
    height: 160px;
    
    
.primeiro-input{
    margin-top: 24px;
}
.segundo-input{
    margin-top: 13px;
    margin-bottom: 13px;
}

input {
    height: 58px;
    width: 326px;
    border-radius: 5px;
    
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;

}

button{
    height: 46px;
    width: 326px;
    left: 23px;
    top: 375px;
    border-radius: 5px;
    background-color: #A328D6;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;  
    text-align: center;

    color: #ffffff;
}

`