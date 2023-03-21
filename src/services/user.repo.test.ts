import { UsersRepo } from "./user.repo";
describe("Given the users repo", () => {
  let repo: UsersRepo;
  beforeEach(() => {
    repo = new UsersRepo();
  });
  describe("when we call the create function", () => {
    test("then if the fetch is OK it should return the data", async () => {
      const mockValue = {};
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockValue),
      });
      const result = await repo.create({}, "/test");
      expect(result).toEqual(mockValue);
    });
    test("then if the fetch is NOT OK it throw error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error test");
      const result = repo.create({ id: "1" }, "/test");
      await expect(result).rejects.toThrow();
    });
  });
  describe("when we call the update function", () => {
    test("then if the fetch is OK it should return the data", async () => {
      const mockValue = { id: "2" };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockValue),
      });

      const result = await repo.update({ id: "2" }, "test", "testToken");
      expect(result).toEqual(mockValue);
    });
    test("then if the fetch is NOT OK it throw error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error test");

      const result = repo.update({ id: "1" }, "test", "testToken");
      await expect(result).rejects.toThrow();
    });
  });

  // describe("login", () => {
  //   it("should return token from API", async () => {
  //     const loginInfo = { username: "test", password: "testToken" };
  //     const urlExtraPath = "api/login";

  //     const token = await TokenResponse.login(loginInfo, urlExtraPath);
  //     expect(token).toEqual({ token: "token" });
  //   });
  // });
});
