import axios from "axios"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import TopBar from "../components/TopBar"
import { urlBack } from "../constants/urls"
import { UserContext } from "../contexts/UserContext"

function Empty() {
    return (
        <p>Você não adicionou nada em seu carrinho!</p>
    )
}

function CartProducts() {
    return (
        <CartProductsContainer>
            <p>Meu carrinho</p>
        </CartProductsContainer>
    )
}

export default function Cart() {

    const { cart, setCart, token } = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const getCart = async () => {
            try {

                const newCart = await axios.get(`${urlBack}/cart`, config)
                setCart(newCart.data)

            } catch (err) {
                console.log(err)
            }
        }

        getCart()

    }, [])

    console.log(cart)

    return (
        <Container cart={cart}>
            <TopBar opcao='produtos' />
            {cart.length === 0 ? <Empty /> : <CartProducts />}
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
box-sizing: border-box;
font-family: 'Solway', serif;
display: flex;
justify-content: ${props => props.cart.length > 0 ? 'initial' : 'center'};
align-items: ${props => props.cart.length > 0 ? 'initial' : 'center'};
text-align: ${props => props.cart.length > 0 ? 'initial' : 'center'};
color: #B25D3A;
`

const CartProductsContainer = styled.div`

`