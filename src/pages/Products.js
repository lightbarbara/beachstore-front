import styled from "styled-components"

export default function Products() {

    return(
        <Container>
            <Top>
                <h1>Beach Store</h1> <p>carrinho</p> <p>sair</p>
            </Top>  
        <MainContent>
            <h2>Mais pedidos</h2>
            <Prod>

            </Prod>
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
width: 100%;
height: 100%;
margin-left: 30px;

h2{
    color: #f8a930;
    font-size: 22px;
    margin-top: 25px;
}
`
const Prod = styled.div`

`