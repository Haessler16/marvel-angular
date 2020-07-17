import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class CharactersApiService {
  
  PUBLIC_KEY = "738903c798cf6136fba2337cb9c8db68"
  HASH = "ccb5d2579f85f580a0f7926fa96c827e"
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`

  constructor(
    private _http: HttpClient
  ) { }

  getAllCharacters(): Observable<any> {
    return this._http.get<any>(this.URL_API)
      .pipe(map((data: any) =>{
        return  data.data.results
      }))
  }
  
}
