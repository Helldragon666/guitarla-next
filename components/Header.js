

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import styles from '../styles/Header.module.css'

const Header = ({ guitarra }) => {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <div>
                        <Link href='/'>
                            <a>
                                <Image className={styles.img} width={400} height={100} src='/img/logo.svg' alt="Imagen Logo" />
                            </a>
                        </Link>
                        {/* necesita forzosamente la anchura y alrura sin unidades
                        (por defecto maneja px)
                        y la ruta directamente ya apunta a la carpeta public
                     */}
                    </div>
                    <nav className={styles.navegacion}>
                        <Link href='/'><a>Inicio</a></Link>
                        <Link href='/nosotros'><a>Nosotros</a></Link>
                        <Link href='/blog'><a>Blog</a></Link>
                        <Link href='/tienda'><a>Tienda</a></Link>
                        <Link href='/carrito'>
                            <a>
                                <Image layout="fixed" width={30} height={20} src='/img/carrito.png' alt="Imagen Carrito" />
                            </a>
                        </Link>
                    </nav>
                </div>

                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>Modelo {guitarra.attributes.nombre}</h2>
                        <p>{guitarra.attributes.descripcion}</p>
                        <p className={styles.precio}>${guitarra.attributes.precio}</p>
                        <Link href={`/guitarras/${guitarra.attributes.url_seo}`}>
                            <a className={styles.enlace}>
                                Ver Producto
                            </a>
                        </Link>
                    </div>
                )}

            </div>

            {router.pathname === '/' && (
                <img className={styles.guitarra} src="/img/header_guitarra.png" alt="Imagen header guitarra" />
            )}

        </header>
    )
}

export default Header