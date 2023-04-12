import { Component, OnInit } from "@angular/core";
import { DataCharactersService } from "src/app/core/services/data-characters.service";
import { Character } from "src/app/core/models/character.interface";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private dataCharacters: DataCharactersService) {}

  ngOnInit(): void {
    this.characters = this.dataCharacters.getCharacters();
  }
}
