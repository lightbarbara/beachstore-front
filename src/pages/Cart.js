import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import TopBar from "../components/TopBar"
import { urlBack } from "../constants/urls"
import { UserContext } from "../contexts/UserContext"
import deleteIcon from '../assets/delete.png'
import { Link } from "react-router-dom"

function Empty() {
    return (
        <p>Você não adicionou nada em seu carrinho!</p>
    )
}

function Product({ p, deleted, setDeleted }) {

    const { token } = useContext(UserContext)

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    async function deleteProduct() {

        setDeleted(!deleted)

        try {
            await axios.delete(`${urlBack}/cart/${p._id}`, config)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ProductContainer>
            <p>{p.product}</p>
            <img src={p.image} alt={p.product} />
            <div>
                <p>{`R$${p.price}`}</p>
                <img src={deleteIcon} alt='delete' onClick={deleteProduct} />
            </div>
        </ProductContainer>
    )
}

function CartProducts({ deleted, setDeleted }) {

    const { cart } = useContext(UserContext)

    return (
        <CartProductsContainer>
            <div>
                <p>Meu carrinho</p>
                <Link to='/checkout'><button>Finalizar compra</button></Link>
            </div>
            <div>
                {cart.products.map(p => <Product p={p} deleted={deleted} setDeleted={setDeleted} />)}
            </div>
        </CartProductsContainer>
    )
}

export default function Cart() {

    const { cart, setCart, token } = useContext(UserContext)

    const [deleted, setDeleted] = useState(false)

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

    }, [deleted])

    return (
        <Container cart={cart}>
            <TopBar opcao='produtos' />
            {cart.length === 0 ? <Empty /> : <CartProducts deleted={deleted} setDeleted={setDeleted} />}
        </Container>
    )
}

const Container = styled.div`
padding: 0 5vw;
padding-top: 90px;
position: relative;
width: 100vw;
height: 100vh;
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
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 100vw;
height: 90vh;
gap: 15px;
padding: 0 5vw;
font-size: 20px;
box-sizing: border-box;

& > div:nth-child(1) {
    display: flex;
    width: 90vw;
    justify-content: space-between;
    align-items: center;

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
}

& > div:nth-child(2) {
    display: flex;
    gap: 20px;
    width: 90vw;
    height: 90vh;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    overflow: auto;
}
`

const ProductContainer = styled.div`
width: 200px;
height: 220px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #D3E3E2;
padding: 5px 10px;
border-radius: 5px;
box-sizing: border-box;
font-size: 17px;

& > img {
    width: 150px;
    margin: 0 auto;
    box-sizing: border-box;
}

div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;

    & > img {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
}
`