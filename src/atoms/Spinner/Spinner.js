import React from 'react';
import styled from "styled-components";
import {FaSpinner} from "react-icons/fa";

const Spinner = () => {
    return (
        <StyledSpinner>
            <FaSpinner className={"icon-spin"}/>
        </StyledSpinner>
    );
};

const StyledSpinner = styled.div`
    font-size: 3rem;
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
