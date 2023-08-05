import React from 'react';
import styled from "styled-components";

function Picker({children}) {
    return (
        <StyledPicker>
            {children}
        </StyledPicker>
    );
}

const StyledPicker = styled.select`
    padding: 0.5rem 1rem;
    background: var(--clr-off-white);
    border-radius: 10px;
    border: 2px solid indianred;
    outline: none;
`

export default Picker;
