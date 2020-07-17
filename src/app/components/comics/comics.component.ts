import { Component, OnInit } from '@angular/core';
import {ComicsService} from "../../services/comics/comics.service"
import {Observable} from "rxjs"

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  
  constructor(private comicsService: ComicsService) { }
  filter_value = ""
  allComics: Observable<any>

  ngOnInit(): void {
    this.getComics()
  }

  getComics(){
    this.allComics = this.comicsService.getAllComics()
  }

  handleSearch(e: string){
    this.filter_value = e
  }

}
