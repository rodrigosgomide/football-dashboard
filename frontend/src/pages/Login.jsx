import styled from "styled-components";
import Input from "../components/Input";
import Button from '../components/Button'
import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";

function Login() {

  const {setEmail, setPassword, navigate, email, password} = useContext(UserContext)

  const [ isValidForm, setIsValidForm ] = useState(false)

  useEffect(() => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordRegex =  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    emailRegex.test(email) && passwordRegex.test(password) ? setIsValidForm(true) : setIsValidForm(false)
    }, [email, password]);

  function handlerButton(event){
    event.preventDefault()
    navigate('dashboard')
  }

  return (
    <Container>
        <FormContainer>
          <LoginTitle>Login</LoginTitle>
          <Input placeholder="Enter Your Email" setState={setEmail}/>
          <Input placeholder="Enter Your Password"setState={setPassword}/>
          <Button text={'Enter'} onClick={handlerButton} isDisabled={!isValidForm}/>
        </FormContainer>
    </Container>
  )
}

export default Login

const Container = styled.main`
  max-width: 1200px;
  min-height: 100vh;
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 350px;
  background-color: white;
  min-height: 30vh;
  padding: 10%;
  box-shadow: 1px 1px 30px;
  border: 1px gray solid;
  border-radius: 5px
`
const LoginTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  margin-bottom: rem;
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 15%;
  border-bottom: 1px lightgray solid;
`