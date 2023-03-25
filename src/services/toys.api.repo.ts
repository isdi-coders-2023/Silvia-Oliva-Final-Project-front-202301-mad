import { ToyServerResponse, ToyStructure } from "../model/toy";
import { URL_AMIGURUMIS_USERS } from "../../src/variables";
export interface ToysRepo<T> {
  query(token: string, extraUrl: string): Promise<T>;
  queryId?(token: string, idToy: ToyStructure["id"]): Promise<T>;
  create?(token: string, infoToy: Partial<ToyStructure>): Promise<T>;
  update?(
    token: string,
    idToy: ToyStructure["id"],
    infoToy: Partial<ToyStructure>
  ): Promise<T>;
  delete?(token: string, idToy: ToyStructure["id"]): Promise<void>;
}

export class ToysApiRepo implements ToysRepo<ToyServerResponse> {
  url: string;
  //actualPage: number;

  constructor() {
    this.url = URL_AMIGURUMIS_USERS;
    // this.actualPage = 1;
  }
  async query(token: string, extraUrl: string): Promise<ToyServerResponse> {
    const url = this.url + "/toys/all";

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error(
        "Error al traer la gallery por query: " + resp.status + resp.statusText
      );

    const toyData = (await resp.json()) as ToyServerResponse;

    return toyData;
  }
}

//   async query(
//     token: string,
//     //pageChange: number,
//     style: string
//   ): Promise<ToyServerResponse> {
//     this.actualPage = this.actualPage + pageChange;

//     if (this.actualPage === 0 || pageChange === 0) this.actualPage = 1;

//     const pageString = this.actualPage.toString();

//     const url = this.url + "/products?style=" + style + "&page=" + pageString;

//     const resp = await fetch(url, {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error http: " + resp.status + resp.statusText);

//     const toysData = (await resp.json()) as ToyServerResponse;

//     return toysData;
//   }

//   async queryId(
//     token: string,
//     idToy: ToyStructure["id"]
//   ): Promise<ToyServerResponse> {
//     const url = this.url + "/details/" + idToy;

//     const resp = await fetch(url, {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error http: " + resp.status + resp.statusText);

//     const toyData = (await resp.json()) as ToyServerResponse;

//     return toyData;
//   }

//   async create(
//     token: string,
//     infoToy: Partial<ToyStructure>
//   ): Promise<ToyServerResponse> {
//     const url = this.url + "/create";

//     const resp = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(infoToy),
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-type": "application/json",
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error http: " + resp.status + resp.statusText);

//     const toyData = (await resp.json()) as ToyServerResponse;

//     return toyData;
//   }

//   async update(
//     token: string,
//     idToy: ToyStructure["id"],
//     infoToy: Partial<ToyStructure>
//   ): Promise<ToyServerResponse> {
//     const url = this.url + "/change/" + idToy;

//     const resp = await fetch(url, {
//       method: "PATCH",
//       body: JSON.stringify(infoToy),
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-type": "application/json",
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error http: " + resp.status + resp.statusText);

//     const toyData = (await resp.json()) as ToyServerResponse;

//     return toyData;
//   }

//   async delete(token: string, idToy: ToyStructure["id"]): Promise<void> {
//     const url = this.url + "/delete/" + idToy;

//     const resp = await fetch(url, {
//       method: "DELETE",
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (!resp.ok)
//       throw new Error("Error http: " + resp.status + resp.statusText);
//   }
// }
