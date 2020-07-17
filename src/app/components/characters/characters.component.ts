import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from "../../services/characters/characters-api.service"
import { Observable } from "rxjs"

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  constructor(private charactersSvc: CharactersApiService) { }
  filter_value = ""
  allCharacters: Observable<any>;

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    this.allCharacters = this.charactersSvc.getAllCharacters()
  }

  handleSearch(e: string){
    this.filter_value = e
  }

}
