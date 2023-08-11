import React from 'react';
import styled from "styled-components";

function Picker(props) {
    return (
        <StyledPicker {...props}>
            {props.children}
        </StyledPicker>
    );
}

const StyledPicker = styled.select`
    padding: 0.5rem 1rem;
    background: var(--clr-off-white);
    border-radius: 10px;
    outline: none;
    box-shadow: 0 0 5px 0 black;
    font-size: 1.1rem;
`

export default Picker;
