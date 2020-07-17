import { Component, OnInit } from '@angular/core';
import { CreatorDetailService } from "../../services/creator-detail/creator-detail.service"
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.scss']
})
export class CreatorDetailComponent implements OnInit {
  Id = ""
  getOnlyOne:any
  getCreatorComic = []
  getCreatorSeries = []

  constructor(
    private creatorDetail: CreatorDetailService,
    private _ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._ar.paramMap.subscribe(params => {
      this.Id = params.get("id")
    })

    this.getOne()
    this.getCharacters()
    this.getSeries()
  }

  getOne() {
    this.creatorDetail.getAll(this.Id)
      .subscribe((res: any) => {
        this.getOnlyOne = res.data.results[0]
      })
  }

  getCharacters(){
    this.creatorDetail.getCreatorComics(this.Id)
    .subscribe((res)=>{
      this.getCreatorComic = res.data.results
    })
  }

  getSeries(){
    this.creatorDetail.getCreatorSeries(this.Id)
    .subscribe((res)=>{
      this.getCreatorSeries = res.data.results
    })
  }

}
