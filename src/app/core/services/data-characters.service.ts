import { Injectable } from "@angular/core";
import { Character } from "../models/character.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataCharactersService {
  private characters: Character[] = [
    {
      id: 1,
      name: "Cade Skywalker",
      image: "./../../../assets/images/characters/cadeskywalker.jpg",
      planet: "Skywalker Planet",
      birth: "116 DBY",
      death: "-",
      species: "Humano",
      ship: "Mynock",
      imageShip: "./../../../assets/images/ships/mynock.jpg",
      shipClass: "Transporte",
      shipModel: "",
      shipHiper: "Equipado",
      shipPassagers: 7,
      imagePlanet: "./../../../assets/images/planets/tattoine.jpg",
      planetRegion: "Arkanis",
      planetSystem: "Sistema de Tatoo",
      planetSuns: 2,
      planetMoons: 3,
    },
    {
      id: 2,
      name: "Chewbacca",
      image: "./../../../assets/images/characters/chewbacca.png",
      planet: "Kashyyyk",
      birth: "100 ABY",
      death: "200 BDY",
      species: "Wookiee",
      ship: "Halcón Milenario",
      imageShip: "./../../../assets/images/ships/halcon.jpg",
      shipClass: "Corporación de Ingeniería",
      shipModel: "Carguero ligero",
      shipHiper: "No equipado",
      shipPassagers: 1,
      imagePlanet: "./../../../assets/images/planets/kashyyyk.jpg",
      planetRegion: "Mytaranor",
      planetSystem: "Sistema de Kashyyyk",
      planetSuns: 1,
      planetMoons: 3,
    },
    {
      id: 3,
      name: "Han Solo",
      image: "./../../../assets/images/characters/hansolo.png",
      planet: "Corellia",
      birth: "29 ABY",
      death: "",
      species: "Humano",
      ship: "Halcón Milenario",
      imageShip: "./../../../assets/images/ships/halcon.jpg",
      shipClass: "Corporación de Ingeniería",
      shipModel: "Carguero ligero",
      shipHiper: "No equipado",
      shipPassagers: 1,
      imagePlanet: "./../../../assets/images/planets/corellia.jpg",
      planetRegion: "Núcleo",
      planetSystem: "Sistema de Corelliano",
      planetSuns: 1,
      planetMoons: 3,
    },
    {
      id: 4,
      name: "Mara Skywalker",
      image: "./../../../assets/images/characters/maraskywalker.jpg",
      planet: "Coruscant",
      birth: "17 ABY",
      death: "40 DBY",
      species: "Humano",
      ship: "Sombra de Jade",
      imageShip: "./../../../assets/images/ships/sombra.jpg",
      shipClass: "Transporte espacial",
      shipModel: "Yate Estelar",
      shipHiper: "Equipado",
      shipPassagers: 3,
      imagePlanet: "./../../../assets/images/planets/coruscant.jpg",
      planetRegion: "Núcleo",
      planetSystem: "Sistema Coruscant",
      planetSuns: 1,
      planetMoons: 4,
    },
  ];

  getCharacters(): Character[] {
    return this.characters;
  }

  getCharacter(id: number): Observable<Character> {
    const character = this.characters.find((h) => h.id === id)!;
    return of(character);
  }
}
