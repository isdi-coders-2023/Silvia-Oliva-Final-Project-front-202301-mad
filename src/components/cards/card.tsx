// import { ToyStructure } from "../../model/toy";
// import style from "./toy.card.style.module.scss";
// import { useMemo } from "react";
// import { UsersRepo } from "../../services/user.repo";
// import { useUsers } from "../../hooks/use.users";
// import { Link } from "react-router-dom";

// type ToyCardProps = {
//   toy: ToyStructure;
//   action: string;
// };

// export default function ToyCard({ toy, action }: ToyCardProps) {
//   const userRepo = useMemo(() => new UsersRepo(), []);

//   const { token } = useUsers(userRepo);

//   let addGuitar: boolean;

//   addGuitar = action === "products" ? true : false;

//   const handlerAddToy = (id: ToyStructure["id"]) => {
//     userCart(id, "add");
//   };

//   const handlerRemoveToy = (id: ToyStructure["id"]) => {
//     userCart(id, "remove");
//   };

//   return (
//     <li className={style.toyCard}>
//       <div className={style.toyCardInfo}>
//         <p className={style.toyCardInfoName}>{toy.name}</p>
//         <p className={style.toyCardInfoModel}>{toy.animalModel}</p>
//         <img src={toy.img} alt={toy.animalModel} />
//         <p className={style.guitarCardInfoHeight}>{toy.height}</p>
//         <p className={style.guitarCardInfoDescription}>{toy.description} €</p>
//       </div>
//       <Link to="/details" state={{ toyProps: toy }}>
//         <button className={style.toyCardMoreDetails}>More details</button>
//       </Link>

//       {addToy ? (
//         <button
//           className={style.toyCardButtonsAdd}
//           onClick={() => {
//             handlerAddToy(toy.id);
//           }}
//         >
//           <img src="./images/shop-cart.png" alt="Shop-Cart-button" />
//         </button>
//       ) : (
//         <button
//           className={style.toyCardButtonsRemove}
//           onClick={() => {
//             handlerRemoveToy(toy.id);
//           }}
//         >
//           <img src="./images/remove-button.png" alt="Remove-button" />
//         </button>
//       )}
//     </li>
//   );
// }
