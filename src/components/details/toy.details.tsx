import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToyStructure } from "../../model/toy";

import styles from "./toy.details.module.scss";

export default function ToyDetails() {
  const location = useLocation();
  const { toyProps } = location.state;
  const toy: ToyStructure = toyProps;

  const navigate = useNavigate();

  const handlerNavigateBack = () => {
    navigate(-1);
  };

  return (
    <section className={styles.toyDetails}>
      <div className={styles.toyDetailsHeader}>
        <h2 className={styles.toyDetailsHeaderTitle}>Details</h2>

        <button
          className={styles.toyDetailsHeaderBackButton}
          onClick={handlerNavigateBack}
        >
          ◄ Go back
        </button>
      </div>

      <div className={styles.toyDetailsBody}>
        <div className={styles.toyDetailsBodyMain}>
          <div className={styles.toyDetailsBodyImg}>
            <img src={toy.img} alt={toy.animalModel} />
          </div>

          <div className={styles.toyDetailsBodyInfo}>
            <div className={styles.toyDetailsBodyInfoButtons}>
              <Link
                to="/toy/form"
                state={{ toyProps: toy, actionProps: "edit" }}
              >
                <button className={styles.toyDetailsBodyInfoButtonsEdit}>
                  Edit
                </button>
              </Link>

              <Link to="/delete/toy" state={{ toyIdProps: toy.id }}>
                <button className={styles.toyDetailsBodyInfoButtonsDelete}>
                  <img src="./images/delete-button.png" alt="Delete-button" />
                </button>
              </Link>
            </div>
            <p className={styles.toyDetailsBodyInfoName}>Name: {toy.name}</p>
            <p className={styles.toyDetailsBodyInfoAnimalModel}>
              Model: {toy.animalModel}
            </p>
            <p className={styles.toyDetailsBodyInfoHeight}>
              Height; {toy.height}
            </p>
          </div>
        </div>

        <div className={styles.toyDetailsBodyDescription}>
          <p className={styles.toyDetailsBodyDescriptionText}>
            Description: {toy.description} Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
