import styled from "styled-components"
import TopBar from "../components/TopBar"

export default function Products() {

    return (
        <Container>
            <TopBar opcao='carrinho' />
            <p>oi</p>
        </Container>
    )
}

const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
padding: 0 5vw;
padding-top: 90px;
background-color: #D3E3E2;
`