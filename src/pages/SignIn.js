import styled from "styled-components"
import FormSignIn from "../components/FormSignIn.js"
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'

export default function SignIn() {


    return (
        <Container>
            <div>
                <img src={logo} alt='logo' />
                <Titulo>Beach Store</Titulo>
            </div>
            <FormSignIn />
            <Link to={`/sign-up`}><p>Primeira vez? Cadastre-se!</p></Link>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3vh;
background-color: #D3E3E2;

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

a {
    text-decoration: none;
}

p {
    height: 18px;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #B25D3A;
    text-decoration: none;
}
`

const Titulo = styled.div`
font-family: 'Solway', serif;
font-size: 36px;
width: 120px;
text-align: center;
font-weight: 400;
line-height: 50px;
color: #B25D3A;
`