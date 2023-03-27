import { useSelector } from "react-redux";
import { ToyStructure } from "../../model/toy";
import { RootState } from "../../store/store";
import styles from "./gallery.module.scss";

export function Gallery() {
  const galleryArray = useSelector((state: RootState) => state.toys.allToys);
  return (
    <>
      <div className={styles.gallery}>
        <h1>Gallery</h1>
        <ul className="gallery__list">
          {galleryArray.map((item: Partial<ToyStructure>) => (
            <li key={item.id}>
              <p>Nombre: {item.name}</p>
              <p>Altura: {item.height}</p>
              <p>Animal: {item.animalModel}</p>
              <p>Descripción: {item.description}</p>
              <img src={item.img} alt={item.description} />
            </li>

            // <Card key={item.id} product={item}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Gallery;
