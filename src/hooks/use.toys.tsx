import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ToysApiRepo } from "../services/toys.api.repo";
import { loadGallery, loadDetails, deleteToy } from "../reducer/toy.slice";
import { ToyStructure } from "../model/toy";
import { useNavigate } from "react-router-dom";

export function useToys(repo: ToysApiRepo) {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users);
  const toyState = useSelector((state: RootState) => state.toys);

  const dispatch = useDispatch<AppDispatch>();
  const tokenAtState = users.token;
  const gallery = async () => {
    const serverResponse: any = await repo.query(tokenAtState, "toys/all");

    try {
      await dispatch(loadGallery(serverResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const deleteOneToy = async (idToy: ToyStructure["id"]) => {
    try {
      const userToken = users.userLogged.id;
      if (!userToken) throw new Error("Not authorized");

      const toyId: string = idToy;

      await repo.delete(userToken, toyId);

      dispatch(deleteToy(toyId));
      navigate("/gallery");
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  const loadOneToy = async (idToy: ToyStructure["id"]) => {
    try {
      const toyInfo = await repo.queryId(idToy);
      console.log(toyInfo);

      dispatch(loadDetails(toyInfo.results[0]));
    } catch (error) {}
  };
  return {
    toyState,
    gallery,
    loadGallery,
    loadDetails,
    deleteOneToy,
    loadOneToy,
  };
}
