import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show = false
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this._router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.show = true
      }else if(event instanceof NavigationEnd){
        this.show = false
      }
    })

    console.log(this.show)
  }


}
