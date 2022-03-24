


import Link from "next/link"
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href='/'><a>Inicio</a></Link>
                    <Link href='/nosotros'><a>Nosotros</a></Link>
                    <Link href='/blog'><a>Blog</a></Link>
                    <Link href='/tienda'><a>Tienda</a></Link>
                </nav>
                <p className={styles.copyright}>Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer