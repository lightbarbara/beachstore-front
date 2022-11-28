import styled from "styled-components"
import TopBar from "../components/TopBar"
import cartao from '../assets/cartao.png'
import pix from '../assets/pix.png'
import boleto from '../assets/boleto.png'

export default function Checkout() {

    return (
        <Container>
            <TopBar />
            <p>Escolha o modo de pagamento:</p>
            <div>
                <p>Cartão</p>
                <img src={cartao} alt='cartao' />
            </div>
            <div>
                <p>Pix</p>
                <img src={pix} alt='pix' />
            </div>
            <div>
                <p>Boleto</p>
                <img src={boleto} alt='boleto' />
            </div>
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
flex-direction: column;
align-items: center;
color: #B25D3A;
gap: 20px;

& > div:nth-child(3), div:nth-child(4), div:nth-child(5) {
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
        width: 50px;
        height: 50px;
    }
}
`