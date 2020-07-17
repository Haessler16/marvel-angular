import { Component, OnInit } from '@angular/core';
import {CreatorsService} from "../../services/creators/creators.service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  constructor(private creatorService: CreatorsService) { }
  filter_value = ""
  allCreators: Observable<any>

  ngOnInit(): void {
    this.getCreators()
  }

  getCreators(){
    this.allCreators = this.creatorService.getAllCreators()
  }

  handleSearch(e: string){
    this.filter_value = e
  }

}
