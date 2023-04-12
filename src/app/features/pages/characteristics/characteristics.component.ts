import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataCharactersService } from "src/app/core/services/data-characters.service";
import { Character } from "src/app/core/models/character.interface";
import { NavigationService } from "src/app/core/services/navigation.service";

@Component({
  selector: "app-characteristics",
  templateUrl: "./characteristics.component.html",
  styleUrls: ["./characteristics.component.scss"],
})
export class CharacteristicsComponent implements OnInit {
  character: Character = {} as Character;

  constructor(
    private dataCharacters: DataCharactersService,
    private route: ActivatedRoute,
    public navigation: NavigationService
  ) {}

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.dataCharacters
      .getCharacter(id)
      .subscribe((character) => (this.character = character));
  }
}
