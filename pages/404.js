


import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

const Noencontrado = () => {
    return (
        <div className={styles.no_encontrado}>
            <h1 className='heading'>Página no Encontrada</h1>
            <Link href='/'><a>Volver al Inicio</a></Link>
        </div>
    )
}

export default Noencontrado