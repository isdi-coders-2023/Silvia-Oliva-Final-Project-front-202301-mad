export {};
// import { ToysApiRepo } from "../../services/toys.api.repo";
// import { useMemo, useState } from "react";
// import { useToys } from "../../hooks/use.toys";

// import style from "./filter.toy.module.scss";

// export function FilterToy() {
//   const toyRepo = useMemo(() => new ToysApiRepo(), []);

//   const { loadToys } = useToys(toyRepo);

//   const [isSelectedAll, setIsSelectedAll] = useState(true);
//   const [isSelectedAnimal, setIsSelectedAnimal] = useState(false);
//   const [isSelectedName, setIsSelectedName] = useState(false);

//   const handleFilter = (style: string) => {
//     loadToys(undefined, style);

//     switch (style) {
//       case "animalModel":
//         setIsSelectedAll(false);
//         setIsSelectedAnimal(true);
//         setIsSelectedName(false);
//         break;

//       case "name":
//         setIsSelectedAll(false);
//         setIsSelectedAnimal(false);
//         setIsSelectedName(true);
//         break;

//       default:
//         setIsSelectedAll(true);
//         setIsSelectedAnimal(false);
//         setIsSelectedName(false);
//         break;
//     }
//   };

//   return (
//     <nav className={style.filter}>
//       <button
//         className={
//           isSelectedAll ? style.filterOptionSelected : style.filterOption
//         }
//         onClick={() => {
//           handleFilter("All");
//         }}
//       >
//         All
//       </button>

//       <button
//         className={
//           isSelectedAnimal ? style.filterOptionSelected : style.filterOption
//         }
//         onClick={() => {
//           handleFilter("Animal");
//         }}
//       >
//         Animal
//       </button>

//       <button
//         className={
//           isSelectedName ? style.filterOptionSelected : style.filterOption
//         }
//         onClick={() => {
//           handleFilter("Name");
//         }}
//       >
//         Name
//       </button>
//     </nav>
//   );
// }
