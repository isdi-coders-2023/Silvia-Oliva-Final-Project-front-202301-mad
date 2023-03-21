import { getDownloadURL } from "firebase/storage";
import { newImage } from "../firebase/firebase.toy";

jest.mock("firebase/storage");

describe("Given the firebase function", () => {
  describe("when there is NO FILE param", () => {
    test("then, the toy should be the default image", async () => {
      const mockInfo = { id: "2", toy: "123" };

      await newImage(mockInfo);
      expect(mockInfo.toy).toBe(
        "https://console.firebase.google.com/project/amigurumis-95a10/storage/amigurumis-95a10.appspot.com/files?hl=es-419"
      );
    });
  });
  describe("when there is a FILE param", () => {
    test("then, the avatar should be the default image", async () => {
      const mockInfo = { id: "2", toy: "123" };
      const mockFile = new File(["toy"], "toy.png", {
        type: "image/png",
      });
      await newImage(mockInfo, mockFile);
      expect(getDownloadURL).toHaveBeenCalled();
    });
  });
});
