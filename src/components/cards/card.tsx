import { ToyStructure } from "../../model/toy";
import style from "./toy.card.style.module.scss";
import { Link } from "react-router-dom";

type CardProps = {
  toy: ToyStructure;
  action: string;
};

export function Card({ toy }: CardProps) {
  return (
    <li className={style.toyCard}>
      <div className={style.toyCardInfo}>
        <p className={style.toyCardInfoName}>{toy.name}</p>
        <p className={style.toyCardInfoAnimalModel}>{toy.animalModel}</p>
        <img src={toy.img} alt={toy.animalModel} />
        toyCardInfoDescription{" "}
        <p className={style.toyCardInfoHeight}>{toy.height}</p>
        <p className={style.toyCardInfoDescription}>{toy.description} </p>
      </div>
      <Link to="/details" state={{ toyProps: toy }}>
        <button className={style.toyCardMoreDetails}>More details</button>
      </Link>
    </li>
  );
}
