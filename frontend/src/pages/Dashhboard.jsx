// import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useEffect } from "react";

function Dashboard() {
  const {email, navigate} = useContext(UserContext)
  
  useEffect(() => {
    if(!email) navigate('/')
  }, [email, navigate]);
    
    return (
        <div>{email}</div>
    )
}

export default Dashboard
