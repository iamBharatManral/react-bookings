import React from 'react';
import styled from "styled-components";

const Image = ({src}) => {
    return (
        <StyledImage src={src}>
        </StyledImage>
    );
};

const StyledImage = styled.img`
    width: 90vw;
    height: 60vh;
    border-radius: 10px;
`

export default Image;
