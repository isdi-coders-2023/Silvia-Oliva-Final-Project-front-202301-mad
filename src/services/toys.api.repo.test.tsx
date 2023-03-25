import { ToyStructure } from "../model/toy";
import { ToysApiRepo } from "./toys.api.repo";

describe("Given ToysApiRepo class and its instance", () => {
  let repo: ToysApiRepo;

  beforeEach(() => {
    repo = new ToysApiRepo();
  });

  const mockToy = {
    name: "test",
    animalModel: "test",
    height: "test",
    description: "test",
    img: "test",
  } as unknown as ToyStructure;

  describe("When the query method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([
          {
            name: "test",
          },
          {
            name: "test2",
          },
        ]),
      });

      const result = await repo.query("tokenMock", 1, "All");
      expect(result).toEqual([
        {
          name: "test",
        },
        {
          name: "test2",
        },
      ]);
    });

    test("Then if the fetch response is Ok, and there is style and page, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([
          {
            name: "test",
          },
          {
            name: "test2",
          },
        ]),
      });

      const result = await repo.query("tokenMock", -1, "mockStyle");
      expect(result).toEqual([
        {
          name: "test",
        },
        {
          name: "test2",
        },
      ]);
    });

    test("Then if the fetch response is NOK, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.query("tokenMock", 0, "All");
      await expect(result).rejects.toThrow();
    });
  });

  describe("When the queryId method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ brand: "test" }),
      });

      const result = await repo.queryId("tokenMock", "idToyMock");
      expect(result).toEqual({ brand: "test" });
    });

    test("Then if the fetch response is NOK, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.queryId("tokenMock", "idToyMock");
      await expect(result).rejects.toThrow();
    });
  });

  describe("When the create method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ brand: "test" }),
      });

      const result = await repo.create("tokenMock", mockToy);
      expect(result).toEqual({ brand: "test" });
    });

    test("Then if the fetch response is NOK, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.create("tokenMock", mockToy);
      await expect(result).rejects.toThrow();
    });
  });

  describe("When the update method is called", () => {
    test("Then if the fetch response is Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ brand: "test" }),
      });

      const result = await repo.update("tokenMock", "idToyMock", mockToy);
      expect(result).toEqual({ brand: "test" });
    });

    test("Then if the fetch response is NOK, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.update("tokenMock", "idGuitarMock", mockToy);
      await expect(result).rejects.toThrow();
    });
  });

  describe("When the delete method is called", () => {
    test("Then if the fetch response is Ok, the response should be undefined for void Promise", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          name: "test",
        }),
      });

      const result = await repo.delete("tokenMock", "idToyMock");
      expect(result).toBe(undefined);
    });

    test("Then if the fetch response is not Ok, the result should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error Test");

      const result = repo.delete("tokenMock", "idToyMock");
      await expect(result).rejects.toThrow();
    });
  });
});
