import { Component, OnInit } from "@angular/core";
import { DataCharactersService } from "src/app/core/services/data-characters.service";
import { Character } from "src/app/core/models/character.interface";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private dataCharacters: DataCharactersService) {}

  ngOnInit(): void {
    this.characters = this.dataCharacters.getCharacters();
  }
}
