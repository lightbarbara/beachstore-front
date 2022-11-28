import styled from "styled-components"

export default function Cart() {


    return (
        <Container>
            <Top>
                <h1>Beach Store</h1> <p>produtos</p> <p>sair</p>
            </Top>
            <MainContent>
                <h2>Carrinho</h2>
                <CartShopping>
                    <p>Nenhum item foi adicionado no carrinho ainda</p>
                </CartShopping>
            </MainContent>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    
    background-color: #D3E3E2;
    `

const Top = styled.div`
    height: 55px;
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #7BC5C1;
    
    
    h1{
        font-family: 'Solway', serif;
        color: #ffffff;
        font-size: 26px;
        padding-top: 18px;
        
    }
    
    p{
        font-family: 'Solway', serif;
        color: #ffffff;
        font-size: 18px;
        padding-top: 23px;
        text-decoration: underline;
    }
    
    `

const MainContent = styled.div`
width: 300px;
height: 100%;
margin-left: 30px;

h2{
    color: #f8a930;
    font-size: 22px;
    margin-top: 25px;
}
`
const CartShopping = styled.div`
width: 100%;
height: 106px;
background-color: #ffffff;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
p{
    color: #AFAFAF;

}
`