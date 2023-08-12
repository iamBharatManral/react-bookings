import React from 'react';
import styled from "styled-components";
import {FaSpinner} from "react-icons/fa";

const Spinner = ({text}) => {
    return (
        <StyledSpinner>
            <FaSpinner className={"icon-spin"}/> {text}
        </StyledSpinner>
    );
};

const StyledSpinner = styled.div`
    font-size: 2rem;
    @keyframes rotate{
      from{
        transform: rotate(0deg)
      }
      to{
        transform: rotate(400deg)
      }
    }
    .icon-spin{
      animation: rotate 2s infinite alternate;
    }
`

export default Spinner;
