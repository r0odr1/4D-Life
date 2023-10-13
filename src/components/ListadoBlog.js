import Entrada from "@/components/Entrada";
import styles from "../styles/Blog.module.css";

const ListadoBlog = ({ entradas }) => {
  return (
    <>
      <h2 className="heading">Este es el blog</h2>

      <div className={styles.blog}>
        {entradas.map((entrada) => {
          const { id, attributes } = entrada;

          return <Entrada key={id} entrada={{ ...attributes, id }} />;
        })}
      </div>
    </>
  );
};

export default ListadoBlog;
