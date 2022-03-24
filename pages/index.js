

import Curso from '../components/Curso'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({ guitarras, curso, blogs }) {

  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>
      <Curso
        curso={curso}
      />
      <section className='contenedor'>
        <ListadoBlog
          entradas={blogs}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  //const urlGutarras = `${process.env.API_URL}/api/guitarras`
  //const respuesta = await fetch(url)
  //const guitarras = await respuesta.json();

  //const urlCurso = `${process.env.API_URL}/api/curso`
  //const respuestaCurso = await fetch(urlCurso)
  //const curso = await respuesta.json();

  const urlGutarras = `${process.env.API_URL}/api/guitarras`
  const urlCurso = `${process.env.API_URL}/api/curso`
  const urlBlogs = `${process.env.API_URL}/api/blogs?pagination[pageSize]=3&sort=createdAt:DESC`

  const [respGuitarras, respCursos, respBlogs] = await Promise.all([
    fetch(urlGutarras), fetch(urlCurso), fetch(urlBlogs)
  ])
  const [guitarras, curso, blogs] = await Promise.all([
    respGuitarras.json(), respCursos.json(), respBlogs.json()
  ])

  return {
    props: {
      guitarras: guitarras.data,
      curso: curso.data,
      blogs: blogs.data
    }
  }
}
