import { SyntheticEvent, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToys } from "../../hooks/use.toys";
import { ToyStructure } from "../../model/toy";
import { ToysApiRepo } from "../../services/toys.api.repo";
import { RootState } from "../../store/store";
import styles from "./gallery.module.scss";

export default function Gallery() {
  const galleryArray = useSelector((state: RootState) => state.toys.allToys);
  const navigate = useNavigate();
  const repoToys = useMemo(() => new ToysApiRepo(), []);
  const { loadOneToy } = useToys(repoToys);

  const handlerClick = (event: SyntheticEvent) => {
    const valueToDetail =
      event.currentTarget.ariaLabel === null
        ? "1556"
        : event.currentTarget.ariaLabel;

    loadOneToy(valueToDetail);

    navigate("/details");
  };
  return (
    <>
      <div className={styles.gallery}>
        <ul className="gallery__list">
          {galleryArray.map((item: Partial<ToyStructure>) => (
            <li key={item.id}>
              <div onClick={handlerClick} aria-label={item.id}>
                <span>More details</span>
              </div>
              <div>Nombre: {item.name}</div>
              <div>Altura: {item.height}</div>
              <div>Animal: {item.animalModel}</div>
              <div>Descripción: {item.description}</div>
              <img src={item.img} alt={item.description} />
            </li>

            // <Card key={item.id} toy={item}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}
