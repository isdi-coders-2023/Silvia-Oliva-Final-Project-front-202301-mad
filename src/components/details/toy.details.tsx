import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToyStructure } from "../../model/toy";

import style from "./toy.details.style.module.scss";

export default function ToyDetails() {
  const location = useLocation();
  const { toyProps } = location.state;
  const toy: ToyStructure = toyProps;

  const navigate = useNavigate();

  const handlerNavigateBack = () => {
    navigate(-1);
  };

  return (
    <section className={style.toyDetails}>
      <div className={style.toyDetailsHeader}>
        <h2 className={style.toyDetailsHeaderTitle}>Details</h2>

        <button
          className={style.toyDetailsHeaderBackButton}
          onClick={handlerNavigateBack}
        >
          ◄ Go back
        </button>
      </div>

      <div className={style.toyDetailsBody}>
        <div className={style.toyDetailsBodyMain}>
          <div className={style.toyDetailsBodyImg}>
            <img src={toy.img} alt={toy.animalModel} />
          </div>

          <div className={style.toyDetailsBodyInfo}>
            <div className={style.toyDetailsBodyInfoButtons}>
              <Link
                to="/toy/form"
                state={{ toyProps: toy, actionProps: "edit" }}
              >
                <button className={style.toyDetailsBodyInfoButtonsEdit}>
                  Edit
                </button>
              </Link>

              <Link to="/delete/toy" state={{ toyIdProps: toy.id }}>
                <button className={style.toyDetailsBodyInfoButtonsDelete}>
                  <img src="./images/delete-button.png" alt="Delete-button" />
                </button>
              </Link>
            </div>
            <p className={style.toyDetailsBodyInfoName}>Name: {toy.name}</p>
            <p className={style.toyDetailsBodyInfoAnimalModel}>
              Model: {toy.animalModel}
            </p>
            <p className={style.toyDetailsBodyInfoHeight}>
              Height; {toy.height}
            </p>
          </div>
        </div>

        <div className={style.toyDetailsBodyDescription}>
          <p className={style.toyDetailsBodyDescriptionText}>
            Description: {toy.description} Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
