import { useSelector } from "react-redux";
import { ToyStructure } from "../../model/toy";
import { RootState } from "../../store/store";

export default function Gallery() {
  const galleryArray = useSelector((state: RootState) => state.toys.allToys);
  return (
    <>
      <h1>hola</h1>
      <header>Gallery</header>
      <ul className="gallery__list">
        {galleryArray.map((item: Partial<ToyStructure>) => (
          <p>{item.animalModel}</p>
          // <Card key={item.id} product={item}></Card>
        ))}
      </ul>
    </>
  );
}
