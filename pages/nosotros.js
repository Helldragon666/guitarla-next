
import Image from 'next/image'

import Layout from "../components/Layout"

import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>

          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros' />

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer in odio arcu. Sed hendrerit suscipit magna, non elementum
              justo semper in. Etiam ultricies felis non dolor lobortis porta.
              Quisque aliquet felis a enim iaculis pellentesque. Mauris id sem
              consectetur, porta arcu id, eleifend augue. In nec semper nibh.
              Morbi eu condimentum dui, a laoreet orci. Suspendisse potenti.
              Donec tincidunt venenatis nunc a commodo.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer in odio arcu. Sed hendrerit suscipit magna, non elementum
              justo semper in. Etiam ultricies felis non dolor lobortis porta.
              Quisque aliquet felis a enim iaculis pellentesque. Mauris id sem
              consectetur, porta arcu id, eleifend augue. In nec semper nibh.
              Morbi eu condimentum dui, a laoreet orci. Suspendisse potenti.
              Donec tincidunt venenatis nunc a commodo.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros