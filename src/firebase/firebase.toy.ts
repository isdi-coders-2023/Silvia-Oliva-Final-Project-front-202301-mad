// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "./firebase.config";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { ToyStructure } from "../model/toy";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

// export const newImage = async (info: Partial<ToyStructure>, file?: File) => {
//   if (!file) {
//     info.img =
//       "https://console.firebase.google.com/project/amigurumis-95a10/storage/amigurumis-95a10.appspot.com/files?hl=es-419";
//     return;
//   }
//   const storageRef = ref(storage, info.img);

//   await uploadBytes(storageRef, file);

//   const imgUrl = await getDownloadURL(storageRef);

//   info.img = imgUrl;
// };
