import React from 'react'
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import Navegacion from '../components/nav';
import { Link } from 'gatsby';

// Nota: se improtan entre {} por no ser el export default del gatsby

const EnlaceHome = styled(Link)`
    color:#fff;
    text-align:center;
    text-decoration:none;
`;

const Footer = ({tille}) => {

    const year = new Date().getFullYear();
    return ( 
        <>
        <footer
            css={css`
                background-color: rgba(44,62,80);
                padding: 1rem;
                margin-top: 5rem;
            `}
        >
            <div
               css={css`
               max-width: 1200px;/**PAra cetrado */
               margin: 0 auto; /**PAra cetrado */

               @media (min-width: 768px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}>   

                <Navegacion />
                <EnlaceHome
                    to='/'
                >
                    <h1>Hotel Gatsby</h1>
                </EnlaceHome>
                
            </div>
        </footer>
            <p 
                css={css`
                    text-align: center;
                    color: #fff;
                    background-color: rgb(33,44,55);
                    margin:0;
                    padding:1;
                `}
            
            >{tille}. Todos los derechos Reservados &copy; { year }</p>
        </>
     )
}
 
export default Footer;
