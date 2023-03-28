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
      event.currentTarget.innerHTML === null
        ? "156450"
        : event.currentTarget.innerHTML;

    loadOneToy(valueToDetail);

    navigate("/details");
  };
  return (
    <>
      <div className={styles.gallery}>
        <ul className="gallery__list">
          {galleryArray.map((item: Partial<ToyStructure>) => (
            <li key={item.id}>
              <p onClick={handlerClick}>{item.id}</p>
              <p>Nombre: {item.name}</p>
              <p>Altura: {item.height}</p>
              <p>Animal: {item.animalModel}</p>
              <p>Descripción: {item.description}</p>
              <img src={item.img} alt={item.description} />
            </li>

            // <Card key={item.id} toy={item}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}
