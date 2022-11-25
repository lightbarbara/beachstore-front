import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { urlBack } from "../constants/urls";

export default function FormSignIn() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function login(e) {
        e.preventDefault()

        try {
            const res = await axios.post(`${urlBack}/signIn`, form)

            localStorage.setItem('token', JSON.stringify(res.data.token))
            localStorage.setItem('name', JSON.stringify(res.data.name))
            navigate('/products')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <Form onSubmit={login}>
            <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleForm}
                placeholder="Email"
                required />
            <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleForm}
                placeholder="Senha"
                required
            />
            <button type="submit">Entrar</button>
        </Form>
    )

}

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1vh;
cursor: pointer;

input, button {
	width: 80vw;
	height: 5vh;
	border-radius: 5px;
	border: none;
    font-family: 'Inter', sans-serif;
    font-size: 1.75vh;
    padding: 0 14px;
    box-sizing: border-box
}

input, input::placeholder {
    font-weight: 400;
    color: #505050;
}

button {
    background-color: #7BC5C1;
    color: white;
    font-weight: 700;
}
`