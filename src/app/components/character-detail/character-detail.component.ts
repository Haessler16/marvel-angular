import { Component, OnInit, Input } from '@angular/core';
import { CharacterDetailService } from "../../services/character-detail/character-detail.service"
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input("data") data
  
  constructor(
    private characterDetail: CharacterDetailService,
    private _ar: ActivatedRoute
  ) { }

  Id = ""
  getOnlyOne: One
  getCharComics = []
  getCharSeries = []

  ngOnInit(): void {
    this._ar.paramMap.subscribe(params => {
      this.Id = params.get("id")
    })

    this.getOne()
    this.getComics()
    this.getSeries()
  }

  getOne() {
    this.characterDetail.getAll(this.Id)
      .subscribe((res: any) => {
        this.getOnlyOne = res.data.results[0]
      })
  }

  getComics(){
    this.characterDetail.getCharacterComics(this.Id)
    .subscribe((res)=>{
      this.getCharComics = res.data.results
    })
  }

  getSeries(){
    this.characterDetail.getCharacterSeries(this.Id)
    .subscribe((res)=>{
      this.getCharSeries = res.data.results
    })
  }
}

interface One {
  comics: {
    available: number
  }
  description: string
  events: Object
  id: number
  modified: string
  name: string
  resourceURI: string
  series: {
    available: number
  }
  stories: Object
  thumbnail: {
    path: string,
    extension: string
  }
  urls: [
    {
      url: string
    }
  ]
}
