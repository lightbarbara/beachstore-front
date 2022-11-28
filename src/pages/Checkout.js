import styled from "styled-components"
import TopBar from "../components/TopBar"
import cartao from '../assets/cartao.png'
import pix from '../assets/pix.png'
import boleto from '../assets/boleto.png'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import axios from "axios"
import { urlBack } from "../constants/urls"

export default function Checkout() {

    const { setOption, option, token, cart } = useContext(UserContext)

    const navigate = useNavigate()

    async function payment() {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const sale = { ...cart, option }

        try {

            await axios.post(`${urlBack}/sale`, sale, config)
            await axios.delete(`${urlBack}/cart`, config)

            navigate('/payment')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <TopBar />
            <p>Escolha o modo de pagamento:</p>
            <div onClick={() => setOption('cartao')}>
                <p>Cartão</p>
                <img src={cartao} alt='cartao' />
            </div>
            <div onClick={() => setOption('pix')}>
                <p>Pix</p>
                <img src={pix} alt='pix' />
            </div>
            <div onClick={() => setOption('boleto')}>
                <p>Boleto</p>
                <img src={boleto} alt='boleto' />
            </div>
            <button onClick={payment}>Fazer pagamento</button>
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

button {
    background-color: #B25D3A;
    height: 50px;
    width: 100px;
    border: none;
    color: #D3E3E2;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: 'Solway', serif;
    font-size: 14px;
    }
`