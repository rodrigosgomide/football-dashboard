import styled from "styled-components";

function Input({placeholder, setState}) {

    function handleChange({target}) {
        const {value} = target
        setState(value)
    }

    return (
        <CustomInput placeholder={placeholder} onChange={handleChange} setState={setState}/>
    )
}

export default Input

const CustomInput = styled.input`
  background-color: white;
  outline: none;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10%;
  border-bottom: 1px lightgray solid;
`