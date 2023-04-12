import { Injectable } from "@angular/core";
import { Character } from "../models/character.interface";

@Injectable({
  providedIn: "root",
})
export class DataCharactersService {
  private characters: Character[] = [
    {
      id: 1,
      name: "Cade Skywalker",
      image: "",
      planet: "Skywalker Planet",
      birth: "116 DBY",
      death: "-",
      species: "Humano",
      ship: "Mynock",
      imageShip: "",
      shipClass: "Transporte",
      shipModel: "",
      shipHiper: "Equipado",
      shipPassagers: 7,
      imagePlanet: "",
      planetRegion: "Arkanis",
      planetSystem: "Sistema de Tatoo",
      planetSuns: 2,
      planetMoons: 3,
    },
    {
      id: 2,
      name: "Chewbacca",
      image: "",
      planet: "Kashyyyk",
      birth: "100 ABY",
      death: "200 BDY",
      species: "Wookiee",
      ship: "Halcón Milenario",
      imageShip: "",
      shipClass: "Corporación de Ingeniería",
      shipModel: "Carguero ligero",
      shipHiper: "No equipado",
      shipPassagers: 1,
      imagePlanet: "",
      planetRegion: "Región de Mytaranor",
      planetSystem: "Sistema de Kashyyyk",
      planetSuns: 1,
      planetMoons: 3,
    },
    {
      id: 3,
      name: "Han Solo",
      image: "",
      planet: "Corellia",
      birth: "29 ABY",
      death: "",
      species: "Humano",
      ship: "Halcón Milenario",
      imageShip: "",
      shipClass: "Corporación de Ingeniería",
      shipModel: "Carguero ligero",
      shipHiper: "No equipado",
      shipPassagers: 1,
      imagePlanet: "",
      planetRegion: "Mundos del Núcleo",
      planetSystem: "Sistema de Corelliano",
      planetSuns: 1,
      planetMoons: 3,
    },
    {
      id: 4,
      name: "Mara Skywalker",
      image: "",
      planet: "Coruscant",
      birth: "17 ABY",
      death: "40 DBY",
      species: "Humano",
      ship: "Sombra de Jade",
      imageShip: "",
      shipClass: "Transporte espacial",
      shipModel: "Yate Estelar",
      shipHiper: "Equipado",
      shipPassagers: 3,
      imagePlanet: "",
      planetRegion: "Mundos del Núcleo",
      planetSystem: "Sistema Coruscant",
      planetSuns: 1,
      planetMoons: 4,
    },
  ];

  getCharacters(): Character[] {
    return this.characters;
  }
}