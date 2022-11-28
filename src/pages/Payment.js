import { useContext } from "react"
import styled from "styled-components"
import TopBar from "../components/TopBar"
import { UserContext } from "../contexts/UserContext"

export default function Payment() {

    const { option } = useContext(UserContext)
    console.log(option)

    return (
        <Container>
            <TopBar />
            <p>Parabéns, sua compra foi efetuada!</p>
        </Container>
    )
}

const Container = styled.div`
padding: 0 5vw;
padding-top: 90px;
font-size: 20px;
position: relative;
width: 100vw;
height: 100vh;
background-color: #D3E3E2;
box-sizing: border-box;
font-family: 'Solway', serif;
display: flex;
align-items: center;
justify-content: center;
color: #B25D3A;
gap: 20px;
`