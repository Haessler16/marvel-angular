import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  PUBLIC_KEY = "738903c798cf6136fba2337cb9c8db68"
  HASH = "ccb5d2579f85f580a0f7926fa96c827e"
  URL_API = `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
  
  constructor(private _http: HttpClient) { }

  getAllComics():Observable<any>{
    return this._http.get<any>(this.URL_API)
    .pipe(map((data:any)=>{
      console.log(data.data.results)
      return data.data.results
    }))
  }
}
