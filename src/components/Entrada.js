import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "@/helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  const { id, titulo, publishedAt, resumen, imagen } = entrada;

  return (
    <article>
      <Image
        layout="responsive"
        src={imagen.data.attributes.url}
        width={800}
        height={600}
        alt={`imagen blog ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${id}`} className={styles.enlace}>
          Leer Entrada
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
