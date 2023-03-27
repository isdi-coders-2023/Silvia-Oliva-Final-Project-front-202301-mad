import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ToysApiRepo } from "../services/toys.api.repo";
import {
  loadGallery,
  loadDetails,
  // create,
  // update,
  // deleteToy,
} from "../reducer/toy.slice";

export function useToys(repo: ToysApiRepo) {
  const users = useSelector((state: RootState) => state.users);
  // const toys = useSelector((state: RootState) => state.toys);

  const dispatch = useDispatch<AppDispatch>();
  const tokenAtState = users.token;
  const gallery = async () => {
    const serverResponse: any = await repo.query(
      // userState.userLoggedToken,
      tokenAtState,
      "toys/all"
    );

    try {
      await dispatch(loadGallery(serverResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    gallery,
    loadGallery,
    loadDetails,
  };
}

// const loadToys = useCallback(
//   async (pageChange: number = 0, style: string = "All") => {
//     try {
//       const userToken = usersState.userLogged.token;
//       if (!userToken) throw new Error("Not authorized");

//       const toysInfo = await repo.query(userToken, pageChange, style);

//       dispatch(loadGallery(toysInfo.results));
//     } catch (error) {
//       console.log((error as Error).message);
//     }
//   },
//   [dispatch, repo, usersState.userLogged.token]
// );

// const loadOneToy = async (idToy: ToyStructure["id"]) => {
//   try {
//     const userToken = usersState.userLogged.token;
//     if (!userToken) throw new Error("Not authorized");

//     const toyInfo = await repo.queryId(userToken, idToy);

//     dispatch(loadDetails(toyInfo.results[0]));
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// };

// const createToy = async (infoToy: Partial<ToyStructure>) => {
//   try {
//     const userToken = usersState.userLogged.token;
//     if (!userToken) throw new Error("Not authorized");

//     const toyInfo = await repo.create(userToken, infoToy);

//     dispatch(create(toyInfo.results[0]));
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// };

// const updateToy = async (
//   idToy: ToyStructure["id"],
//   infoToy: Partial<ToyStructure>
// ) => {
//   try {
//     const userToken = usersState.userLogged.token;
//     if (!userToken) throw new Error("Not authorized");

//     const toyInfo = await repo.update(userToken, idToy, infoToy);

//     dispatch(update(toyInfo.results[0]));
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// };

// const deleteOneToy = async (idToy: ToyStructure["id"]) => {
//   try {
//     const userToken = usersState.userLogged.token;
//     if (!userToken) throw new Error("Not authorized");

//     const toyId: string = idToy;

//     await repo.delete(userToken, toyId);

//     dispatch(deleteToy(toyId));
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// };

//   return {
//     toysState,
//     loadToys,
//     loadOneToy,
//     createToy,
//     updateToy,
//     deleteOneToy,
//   };
// }
