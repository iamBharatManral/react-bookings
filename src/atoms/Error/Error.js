import React from 'react';
import styled from "styled-components";

const Error = () => {
    return (
        <StyledError>
            So Sorry 🙏. Unable to load content 😔.<br/> Try Again Later.
        </StyledError>
    );
};

const StyledError = styled.div`
  font-size: 2rem;
`

export default Error;
