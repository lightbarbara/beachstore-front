import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import TopBar from "../components/TopBar"
import { urlBack } from "../constants/urls"
import { UserContext } from "../contexts/UserContext"
import cart from '../assets/cart.png'

function Empty() {
    return (
        <p>Não existe nada disponível para compra na loja!</p>
    )
}

function Product({ p }) {

    const { setNewProducts, token } = useContext(UserContext)

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    async function addToCart() {
        setNewProducts([p])
        try {

            await axios.post(`${urlBack}/cart`, {
                products: [p]
            }, config)

            alert('Produto adicionado ao carrinho!')

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
                <img src={cart} alt='cart' onClick={addToCart} />
            </div>
        </ProductContainer>
    )
}

function Category({ name, products }) {

    const newName = name[0].toUpperCase() + name.substring(1).toLowerCase()

    const newProducts = products.filter(p => p.category.toLowerCase() === name.toLowerCase())

    return (
        <CategoryContainer>
            <p>{newName}</p>
            <div>
                {newProducts.map(p => <Product p={p} />)}
            </div>
        </CategoryContainer>
    )
}

function ProductsLists({ products }) {

    let categories = products.map(p => p.category)

    categories = new Set(categories)

    categories = Array.from(categories)

    return (
        <ProductsListsContainer>
            {categories.map(c => <Category name={c} products={products} />)}
        </ProductsListsContainer>
    )
}

export default function Products() {

    const [products, setProducts] = useState([])

    const { token } = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const getProducts = async () => {

            try {

                const res = await axios.get(`${urlBack}/products`, config)
                setProducts(res.data)

            } catch (err) {
                console.log(err)
            }

        }

        getProducts()

    }, [])

    return (
        <Container products={products}>
            <TopBar opcao='carrinho' />
            {products.length === 0 ? <Empty /> : <ProductsLists products={products} />}
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
justify-content: ${props => props.products.length > 0 ? 'initial' : 'center'};
align-items: ${props => props.products.length > 0 ? 'initial' : 'center'};
text-align: ${props => props.products.length > 0 ? 'initial' : 'center'};
color: #B25D3A;
`

const ProductsListsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
font-size: 20px;
box-sizing: border-box;
`

const CategoryContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 90vw;
height: 280px;
padding: 0 20px;
background-color: white;
border-radius: 5px;
box-sizing: border-box;

& > div {
    display: flex;
    gap: 20px;
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