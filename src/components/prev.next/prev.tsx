import styles from "./prev.module.scss";
export function PrevNext() {
  return (
    <div className={styles.prev}>
      <button className="prev">
        <img
          className="prev_button"
          src="../../../assets/card/flecha-gris"
          alt="previous"
        />
      </button>
      <button className="next">
        <img
          className="next_button"
          src="../../../assets/card/flecha-gris"
          alt="next"
        />
      </button>
    </div>
  );
}
export default PrevNext;
