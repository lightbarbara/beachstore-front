import axios from "axios"
import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { urlBack } from '../constants/urls'
import { UserContext } from "../contexts/UserContext"

export default function TopBar({ opcao }) {

    const { token, setToken } = useContext(UserContext)

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    async function logout() {
        try {
            await axios.delete(urlBack, config)
            setToken('')
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Container>
            <p>Beach Store</p>
            <div>
                <Link to={`/${opcao === 'produtos' ? 'products' : 'cart'}`}><p>{opcao}</p></Link>
                <p onClick={logout}>sair</p>
            </div>

        </Container>
    )
}

const Container = styled.div`
font-family: 'Solway', serif;
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 70px;
background-color: #7BC5C1;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 5vw;
box-sizing: border-box;
color: white;

& > p:nth-child(1) {
    font-size: 24px;
}

div {
    width: 40vw;
    display: flex;
    justify-content: space-between;
}

a {
    text-decoration: none;
    color: white;
    cursor: pointer;
}
`