import { useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


function UserProvider({children}) {

const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

const value = {
    email,
    password,
    setEmail,
    setPassword,
    navigate
}

return(
    <UserContext.Provider value={ value }>
        {children}
    </UserContext.Provider>
)
}

export default UserProvider


UserProvider.propTypes = {
    children: PropTypes.element
}