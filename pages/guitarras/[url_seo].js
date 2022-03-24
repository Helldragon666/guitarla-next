

import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'

import styles from '../../styles/Guitarra.module.css'


const Producto = ({ guitarra, agregarCarrito }) => {

    const router = useRouter()

    const [cantidad, setCantidad] = useState(0)

    const { attributes: { descripcion, url, nombre, precio }, id } = guitarra

    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1 || cantidad === NaN) {
            return alert('Cantidad no válida')
        }

        // Agregar al carrito

        const guitarraSeleccionada = {
            id,
            imagen: url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)

       
        router.push('/carrito')
        
    }

    return (
        <Layout
            pagina={nombre}
        >
            <div className={styles.guitarra}>
                <Image priority='true' layout='responsive' width={140} height={350}
                    src={url} alt={`Imagen Guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form
                        className={styles.formulario}
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor='cantidad'>Cantidad:</label>
                        <select
                            id='cantidad'
                            value={cantidad}
                            onChange={e => setCantidad(parseInt(e.target.value))}
                        >
                            <option value=''>-- Seleccione --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                        </select>

                        <input type='submit' value='Agregar al Carrito' />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url_seo } }) {

    const url = `${process.env.API_URL}/api/guitarras?filters[url_seo][$eq]=${url_seo}`

    const respuesta = await fetch(url)
    const guitarra = await respuesta.json()

    return {
        props: {
            guitarra: guitarra.data[0]
        }
    }
}

export default Producto