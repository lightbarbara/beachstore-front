import axios from "axios"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import TopBar from "../components/TopBar"
import { urlBack } from "../constants/urls"
import { UserContext } from "../contexts/UserContext"

export default function Cart() {

    const { cart, setCart, token } = useContext(UserContext)

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
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

    // console.log(cart)

    return (
        <Container>
            <TopBar opcao='produtos' />
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
`