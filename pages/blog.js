

//import { useEffect } from 'react';

import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"


const Blog = ({ entradas }) => {

  console.log(entradas)

  // Tambien se pueden consumir datos con fetch
  //useEffect(() => {
  //  const consultarAPI = async () => {
  //    const url = 'http://localhost:1337/api/blogs'
  //
  //    const respuesta = await fetch(url);
  //    const resultado = await respuesta.json();
  //
  //    console.log(resultado)
  //  }
  //
  //  consultarAPI();
  //}, [])

  return (
    <Layout
      pagina='Blog'
    >
      <main className="contenedor">
        <ListadoBlog
          entradas={entradas} 
        />
      </main>
    </Layout>
  )
}

// para consultar la api con next
// se debe exportar la funcion para que next la reconozca
// automaticamente se importa
export async function getServerSideProps() {

  const url = `${process.env.API_URL}/api/blogs`

  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  // se mostrará en el servidor
  console.log(entradas)

  // se mostrará en el navegador
  //puedes usar el prop en el mismo componente
  return {
    // reverse()para iniciar desde el último elemento
    props: {
      entradas: entradas.data.reverse()
    }
  }
}

//export async function getStaticProps() {
//
//  const url = 'http://localhost:1337/api/blogs'
//
//  const respuesta = await fetch(url);
//  const entradas = await respuesta.json();
//
//  // se mostrará en el servidor
//  console.log(entradas)
//
//  // se mostrará en el navegador
//  //puedes usar el prop en el mismo componente
//  return {
//    props: {
//      entradas
//    }
//  }
//}

export default Blog