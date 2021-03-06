import { Component, OnInit } from '@angular/core';
import { ComicDetailService } from "../../services/comic-detail/comic-detail.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {
  Id = ""
  getOnlyOne:any
  getComicCharacters = []
  getComicCreators = []
  getComicStories = []
  elseBlock: any
  
  constructor(
    private comicsDetail: ComicDetailService,
    private _ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._ar.paramMap.subscribe(params => {
      this.Id = params.get("id")
    })

    this.getOne()
    this.getCharacters()
    this.getCreators()
    this.getStories()
  }

  getOne() {
    this.comicsDetail.getAll(this.Id)
      .subscribe((res: any) => {
        this.getOnlyOne = res.data.results[0]
      })
  }

  getCharacters(){
    this.comicsDetail.getComicCharacters(this.Id)
    .subscribe((res)=>{
      this.getComicCharacters = res.data.results
    })
  }

  getCreators(){
    this.comicsDetail.getComicCreators(this.Id)
    .subscribe((res)=>{
      this.getComicCreators = res.data.results
    })
  }

  getStories(){
    this.comicsDetail.getComicStories(this.Id)
    .subscribe((res)=>{
      this.getComicStories = res.data.results
    })
  }

}
