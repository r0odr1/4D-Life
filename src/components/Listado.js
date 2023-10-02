import Buzo from "./Buzo";
import styles from "../styles/Listado.module.css";

const Listado = ({ buzos }) => {
  return (
    <div className={styles.listado}>
      {buzos.map((buzo) => (
        <Buzo key={buzo.id} buzo={buzo} />
      ))}
    </div>
  );
};

export default Listado;
