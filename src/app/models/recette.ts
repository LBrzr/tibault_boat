export class Recette {
  name: string;
  description!: string[];
  image!: string;
  isOn!: boolean;

  constructor(name: string){
    this.name = name;
    this.isOn = false;
  }
}
