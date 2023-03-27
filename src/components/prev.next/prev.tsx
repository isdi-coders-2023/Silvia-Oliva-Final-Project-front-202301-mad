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
        <h3 className="prev-text">Previous</h3>
      </button>
      <button className="next">
        <h3 className="n-text">Next</h3>
        <img
          className="next_button"
          src="../../../assets/card/flecha-gris"
          alt="next"
        />
      </button>
    </div>
  );
}
