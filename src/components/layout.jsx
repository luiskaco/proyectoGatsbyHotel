import React from 'react';
import Helmet from 'react-helmet'; // Nota: es que modifica todo el html que contiene el head antes del body
import {Global, css} from '@emotion/core';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {

        /*NOta: Global no tiene etiqueta de cierre, y se pasan como props(styles)
                Global requiere el uso del props(style), mientras que los demas el props(css)
        */
    return ( 
        <>       
            <Global 
                styles={css`
                    html{
                        font-size:62.5%; /* 10 px = 1rem */
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                        }
                    body{
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family:'PT-Sans', sans-serif;        
                    }
                    h1,h2,h3{
                        margin:0;
                        line-height:1.5;
                    }
                    h1, h2{
                        font-family: 'Roboto', sans-serif;
                    }
                    h3{
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul{
                        list-style:none;
                        margin:0;
                        padding:0;
                    }

                
                `}
            
            />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
            {props.children}
            <Footer />
        </>  
     );
}
 
// NOTA: HACEMOS USO DE PROPS.CHILDREN, PARA QUE TODO EL CONTENIDO DONDE SEA USADO EL LAYOU Y SE PASE INFORMACION PEUDA SER MOSTRADO.

export default Layout;