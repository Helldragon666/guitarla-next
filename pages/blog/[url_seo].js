// [id].js debe ser nombrado asi para el routing dinámico

import Image from 'next/image'

import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'

import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada }) => {

    // useRouter para leer el parámetro del enlace
    // la propiedad del query serà [propiedad del query].js 

    const { attributes: { titulo, contenido, url, publishedAt } } = entrada

    return (
        <Layout
            pagina={titulo}
        >
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout='responsive' width={800} height={600} src={url} alt={`Imagen entrada ${titulo}`} />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}


// automáticamente se puede usar la propiedad query en la función
//export async function getServerSideProps({ query: { id } }) {
//
//    const url = `http://localhost:1337/api/blogs/${id}`
//
//    const respuesta = await fetch(url);
//    const entrada = await respuesta.json();
//
//    return {
//        props: {
//            entrada
//        }
//    }
//}


// obtiene las rutas státicas
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/api/blogs`

    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    const { data } = entradas;

    const paths = data.map(entrada => ({
        params: { url_seo: entrada.attributes.url_seo }
    }))

    // si tienes muchas entradas coloca true en fallback, si tienes pocas false

    return {
        paths,
        fallback: false
    }
}

// para routing dinámico con getStaticProps se necesita getStaticPaths
export async function getStaticProps({ params: { url_seo } }) {

    const url = `${process.env.API_URL}/api/blogs?filters[url_seo][$eq]=${url_seo}`

    const respuesta = await fetch(url);
    const entrada = await respuesta.json();

    console.log(entrada.data[0])

    return {
        props: {
            entrada: entrada.data[0]
        }
    }
}

export default EntradaBlog