

import Link from 'next/link'
import Image from 'next/image'

import { formatearFecha } from "../helpers";

import styles from '../styles/Entrada.module.css'

const Entrada = ({ entrada }) => {

    const { attributes: { url_seo, titulo, resumen, url, publishedAt }, id } = entrada;


    return (
        <article>
            <Image priority='true' layout='responsive' width={800} height={600} src={url} alt={`Imgagen blog ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url_seo}`}>
                    <a className={styles.enlace}>Leer Entrada</a>
                </Link>
            </div>
        </article>
    )
}

export default Entrada