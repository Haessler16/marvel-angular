import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CreatorDetailService {
  PUBLIC_KEY = "738903c798cf6136fba2337cb9c8db68"
  HASH = "ccb5d2579f85f580a0f7926fa96c827e"
  URL_API = 'https://gateway.marvel.com:443/v1/public/creators/'
  GET_ONE = ""
  GET_COMICS=""

  constructor(private _http: HttpClient) { }

  getAll(id):Observable<any>{
    this.GET_ONE = `${this.URL_API}${id}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this._http.get<any>(this.GET_ONE)
  }

  getCreatorComics(id):Observable<any>{
    this.GET_COMICS = `${this.URL_API}${id}/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this._http.get<any>(this.GET_COMICS)
  }

  getCreatorSeries(id):Observable<any>{
    this.GET_COMICS = `${this.URL_API}${id}/series?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this._http.get<any>(this.GET_COMICS)
  }
}
