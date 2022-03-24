

import Layout from "../components/Layout"
import Listado from "../components/Listado"

const Tienda = ({ guitarras }) => {

  console.log(guitarras)

  return (
    <Layout
      pagina='Tienda Virtual'
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado 
          guitarras={guitarras}
        />
      </main>
    </Layout>
  )
}

// solo funcionan desde la carpeta pages
export async function getServerSideProps() {
  const url = `${process.env.API_URL}/api/guitarras`

  const respuesta = await fetch(url)
  const guitarras = await respuesta.json();

  return {
    props: {
      guitarras: guitarras.data
    }
  }
}

export default Tienda