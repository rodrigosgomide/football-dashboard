import styled from "styled-components";
import PropTypes from 'prop-types';


function Button({text, onClick, isDisabled}) {
    return (
        <CustomButton disabled={isDisabled} preven type="submit" onClick={onClick}>
            {text}
        </CustomButton>
    )
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool
}

const CustomButton = styled.button`
  font-family: 'Poppins', sans-serif;
  border-radius: 5px;
  background-color: #e2e2e2;
  font-size: 1.3rem;
  margin-top: 10%;
  min-height: 5vh;
  &:hover {
    opacity: 80%;
  }
`