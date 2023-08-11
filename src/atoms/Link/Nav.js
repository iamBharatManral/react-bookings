import React from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Nav = ({icon, text, path}) => {
    return (
        <NavStyled>
            <Link to={path} className={"link"}>
                {icon}
                <span>{text}</span>
            </Link>
        </NavStyled>
    );
};

const NavStyled = styled.div`
    padding: 0.5rem 1rem;
    background: wheat;
    font-size: 1.2rem;
    border-radius: 10px;
  
    .link{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
    }
    
`

export default Nav;
