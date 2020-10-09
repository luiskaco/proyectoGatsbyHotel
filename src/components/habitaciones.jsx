import React from 'react'
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import {css} from '@emotion/core';
 

// Captura automaticamente la variable proveniente de  gatsby-node
export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter:{slug:{eq:$slug}}) {
            nodes {
                titulo,
                contenido,
                imagen{
                        fluid(maxWidth:1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                
                }
            }
        }
`;

// Plicamos destruturin para sacar el objeto
const HabitacionTemplate = ({data: {allDatoCmsHabitacion: {nodes }}}) => {
     // console.log(nodes);

     // APlicamos nuevamente destructuring
    const {titulo, contenido, imagen} = nodes[0];

    return ( 
        <Layout>
            <main 
                 css={css`
                    margin:0 auto;
                    max-width:1200px;
                    width:95%;
                `}
            >
                <h1
                    css={css`
                        text-align:center;
                        margin-top:4rem;
                    `}
                >
                    {titulo}
                </h1>
                <p>
                    {contenido}
                </p>
                <Image 
                        fluid={imagen.fluid}
                    />
            </main>

         </Layout> 
    );
}
 
export default HabitacionTemplate;