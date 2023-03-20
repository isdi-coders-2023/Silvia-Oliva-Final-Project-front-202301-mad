export type ToyStructure = {
  id: string;
  name: string;
  animalModel: string;
  height: number;
  description: string;
  img: string;
};
export type ServerTypeToy = {
  results: ToyStructure[];
};

export class Toy implements ToyStructure {
  constructor(
    public id: string,
    public name: string,
    public animalModel: string,
    public height: number,
    public description: string,
    public img: string
  ) {}
}
