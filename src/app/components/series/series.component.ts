import { Component, OnInit } from '@angular/core';
import {SeriesService} from "../../services/series/series.service"
import {Observable} from "rxjs"

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  filter_value = ""
  allSeries: Observable<any>
  
  constructor(private serieService: SeriesService) { }

  ngOnInit(): void {
    this.getSeries()
  }

  getSeries(){
    this.allSeries = this.serieService.getAllServices()
  }

  handleSearch(e: string){
    this.filter_value = e
  }

}
