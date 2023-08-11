import React from 'react';
import styled from "styled-components";

const Button = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    color: ${props => props.link ? "white" : "indianred"};
    font-size: 1.2rem;
    outline: none;
    cursor: pointer;
    box-shadow: 0 0 5px 0 black;
    display: flex;
    justify-content: space-between;
    background: ${props => props.link && "cornflowerblue"};
`
export default Button;
