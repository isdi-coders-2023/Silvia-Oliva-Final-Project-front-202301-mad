export type ProtoToyStructure = {
  id: string;
  name: string;
  animalModel: string;
  height: string;
  artist: string;
  description: string;
  img: string;
};
export type ToyStructure = { id: string } & ProtoToyStructure;

export type ToyServerResponse = {
  results: ToyStructure[];
};
