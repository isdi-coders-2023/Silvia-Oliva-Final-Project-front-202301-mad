import { SyntheticEvent, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useToys } from "../../hooks/use.toys";
import { ToysApiRepo } from "../../services/toys.api.repo";
import { RootState } from "../../store/store";

import styles from "./toy.details.module.scss";

export default function ToyDetails() {
  const toyDetail = useSelector((state: RootState) => state.toys.toy);
  const repoToys = useMemo(() => new ToysApiRepo(), []);
  const { deleteOneToy } = useToys(repoToys);
  const navigate = useNavigate();

  const handlerClickDelete = (event: SyntheticEvent) => {
    const valueToDetail =
      event.currentTarget.ariaLabel === null
        ? "666"
        : event.currentTarget.ariaLabel;

    deleteOneToy(valueToDetail);
    navigate("/gallery");
  };

  return (
    <section className={styles.toyDetails}>
      <div className={styles.toyDetailsHeader}>
        <h2 className={styles.toyDetailsHeaderTitle}>Details</h2>
      </div>

      <div className={styles.toyDetailsBody}>
        <div className={styles.toyDetailsBodyMain}>
          <div className={styles.toyDetailsBodyImg}>
            <img src={toyDetail.img} alt={toyDetail.animalModel} />
          </div>

          <div className={styles.toyDetailsBodyInfo}>
            <div className={styles.toyDetailsBodyInfoButtons}></div>
            <p className={styles.toyDetailsBodyInfoName}>
              Name: {toyDetail.name}
            </p>
            <p className={styles.toyDetailsBodyInfoAnimalModel}>
              Model: {toyDetail.animalModel}
            </p>
            <p className={styles.toyDetailsBodyInfoHeight}>
              Height; {toyDetail.height}
            </p>
            <p className={styles.toyDetailsBodyInfoArtist}>
              Artist; {toyDetail.artist}
            </p>
          </div>
        </div>

        <div className={styles.toyDetailsBodyDescription}>
          <p className={styles.toyDetailsBodyDescriptionText}>
            Description: {toyDetail.description}
          </p>
        </div>
      </div>

      <button
        className={styles.toyDetailsBodyInfoButtonsDelete}
        onClick={handlerClickDelete}
        aria-label={toyDetail.id}
      >
        🗑
      </button>
    </section>
  );
}
