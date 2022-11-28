import styled from "styled-components"

export default function Checkout() {

    return(
        <Container>
            <Top>
                <h1>Beach Store</h1> <p>produtos</p> <p>sair</p>
            </Top>          
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