/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


// Este artchivo permite crear las paginas dinamicas con programacion

exports.createPages = async({actions, graphql, reporter}) =>{
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                slug
                }
            }
        }
    `);

    //console.log(resultado.data.allDatoCmsHabitacion.nodes);
    //Nota importante:  Se muestra en la consola de gatsby

    if(resultado.errors) {
        reporter.panic('No hubo resultados ', resultado.errors);
    }

    // Si hay paginas crear ls archivos
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;


    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug, // la ruta del boton, ambos lados deben ser iguales
            component: require.resolve('./src/components/habitaciones.jsx'), // pasando al componentes a usar
            context: {
                slug: habitacion.slug  // Pasas props al compoonentes
            }
        })
    })

    // Nota: Gatsby automaticamente crea las paginas estatica en public/page-data

}