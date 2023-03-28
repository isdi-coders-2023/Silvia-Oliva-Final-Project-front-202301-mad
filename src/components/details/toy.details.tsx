import { SyntheticEvent, useMemo } from "react";
import { useSelector } from "react-redux";
import { useToys } from "../../hooks/use.toys";
import { ToysApiRepo } from "../../services/toys.api.repo";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ToyStructure } from "../../model/toy";
import { RootState } from "../../store/store";

import styles from "./toy.details.module.scss";

export default function ToyDetails() {
  const toyDetail = useSelector((state: RootState) => state.toys.toy);
  const repoToys = useMemo(() => new ToysApiRepo(), []);
  const { deleteOneToy } = useToys(repoToys);
  const handlerClickDelete = (event: SyntheticEvent) => {
    console.log("borrando");
    const valueToDetail =
      event.currentTarget.ariaLabel === null
        ? "666"
        : event.currentTarget.ariaLabel;

    deleteOneToy(valueToDetail);
  };
  // const location = useLocation();
  // const { toyProps } = location.state;
  // const toy: ToyStructure = toyProps;

  // const navigate = useNavigate();

  // const handlerNavigateBack = () => {
  //   navigate(-1);
  // };

  return (
    <section className={styles.toyDetails}>
      <div className={styles.toyDetailsHeader}>
        <h2 className={styles.toyDetailsHeaderTitle}>Details</h2>

        {/* <button
          className={styles.toyDetailsHeaderBackButton}
          onClick={handlerNavigateBack}
        >
          ◄ Go back
        </button> */}
      </div>

      <div className={styles.toyDetailsBody}>
        <div className={styles.toyDetailsBodyMain}>
          <div className={styles.toyDetailsBodyImg}>
            <img src={toyDetail.img} alt={toyDetail.animalModel} />
          </div>

          <div className={styles.toyDetailsBodyInfo}>
            <div className={styles.toyDetailsBodyInfoButtons}>
              {/* <Link
                to="/toy/form"
                state={{ toyProps: toy, actionProps: "edit" }}
              >
                <button className={styles.toyDetailsBodyInfoButtonsEdit}>
                  Edit
                </button>
              </Link> */}

              {/* <Link to="/delete/toy" state={{ toyIdProps: toy.id }}>
                <button className={styles.toyDetailsBodyInfoButtonsDelete}>
                  <img
                    src="../public/asset/card/papelera3.png"
                    alt="Delete-button"
                  />
                </button>
              </Link> */}
            </div>
            <p className={styles.toyDetailsBodyInfoName}>
              Name: {toyDetail.name}
            </p>
            <p className={styles.toyDetailsBodyInfoAnimalModel}>
              Model: {toyDetail.animalModel}
            </p>
            <p className={styles.toyDetailsBodyInfoHeight}>
              Height; {toyDetail.height}
            </p>
          </div>
        </div>

        <div className={styles.toyDetailsBodyDescription}>
          <p className={styles.toyDetailsBodyDescriptionText}>
            Description: {toyDetail.description}
          </p>
        </div>
      </div>

      <button onClick={handlerClickDelete} aria-label={toyDetail.id}>
        📮
      </button>
    </section>
  );
}
