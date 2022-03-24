

import Link from 'next/link'

import styles from '../styles/Curso.module.css'


const Curso = ({ curso }) => {

    const { attributes: { titulo, contenido, imagen, url } } = curso

    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>
                    <Link href='#' ><a className={styles.enlace}>Más Información</a></Link>
                </div>
            </div>

            {/* Solo seleccionará el section de este archivo */}
            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65),
                    rgb(0 0 0 / .7)), url(${url});
                    background-position: 50%;
                    background-size    : cover;
                }
            `}</style>

        </section>
    )
}

export default Curso