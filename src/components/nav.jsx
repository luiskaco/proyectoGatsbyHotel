import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display:Flex;
    justify-content:center;
    padding-bottom:3rem;
    @media (min-width: 768px) {
        padding-bottom:0;
    }
`;

// Dandole estilo al componente link
const NavLink = styled(Link)`
    color:#fff;
    font-size:1.6rem;
    font-weight:700;
    line-height:1rem;
    font-family:'PT Sans', sans-serif;
    text-decoration:none;
    padding:1rem;
    margin-right:1rem;

    &:last-of-type{
        margin-right:0;
    }

    &.pagina-actual{   /**Agregado de una clase al style */
        border-bottom: 2px solid #fff;
    }
`;


const Navegacion = () => {
    return ( 
        <Nav>
            <NavLink 
                to={'/'}
                activeClassName="pagina-actual"
                >Inicio</NavLink>
            <NavLink 
                to={'/nosotros'}
                activeClassName="pagina-actual"
                >Nosotros</NavLink>
        </Nav>
     );
}
 
export default Navegacion;