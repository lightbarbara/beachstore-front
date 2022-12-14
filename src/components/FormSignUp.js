import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlBack } from "../constants/urls";
import Form from "./Form";

export default function FormSignUp() {

    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [form, setForm] = useState({
        name: '',
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

    async function cadastro(e) {
        e.preventDefault()

        if (form.password !== passwordConfirm) {
            alert('As senhas precisam ser iguais')
            return
        }

        try {
            await axios.post(`${urlBack}/sign-up`, form)

            navigate('/products')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <Form onSubmit={cadastro}>
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleForm}
                placeholder="Nome"
                required />
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
            <input
                type='password'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder='Confirme a senha'
                required />
            <button type="submit">Entrar</button>
        </Form>
    )

}