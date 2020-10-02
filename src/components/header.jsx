import React from 'react'
import {css} from '@emotion/core';
import Navegacion from '../components/nav';

const Header = () => {
    return ( 
        <header
            css={css`
                background-color:#222;
                padding: 1rem;
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
            `}

            >
                <h1
                    css={css`
                        color:#fff;
                    `}
                
                >Hotel Gatsby</h1>

                <Navegacion />
            </div>
        </header>
     )
}
 
export default Header;
