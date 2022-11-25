import styled from "styled-components"

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1vh;
cursor: pointer;

input, button {
	width: 80vw;
	height: 5vh;
	border-radius: 5px;
	border: none;
    font-family: 'Inter', sans-serif;
    font-size: 1.75vh;
    padding: 0 14px;
    box-sizing: border-box
}

input, input::placeholder {
    font-weight: 400;
    color: #505050;
}

button {
    background-color: #7BC5C1;
    color: white;
    font-weight: 700;
}
`

export default Form