import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})

export class ComicDetailService {
  PUBLIC_KEY = "738903c798cf6136fba2337cb9c8db68"
  HASH = "ccb5d2579f85f580a0f7926fa96c827e"
  URL_API = 'https://gateway.marvel.com:443/v1/public/comics/'
  GET_ONE = ""
  GET_CHARACTERS=""
  GET_CREATORS=""
  GET_STORIES=""
  
  constructor(private _http: HttpClient) { }

  getAll(id):Observable<any>{
    this.GET_ONE = `${this.URL_API}${id}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this._http.get<any>(this.GET_ONE)
  }

  getComicCharacters(id):Observable<any>{
    this.GET_CHARACTERS = `${this.URL_API}${id}/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this._http.get<any>(this.GET_CHARACTERS)
  }

  getComicCreators(id):Observable<any>{
    this.GET_CREATORS = `${this.URL_API}${id}/creators?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this._http.get<any>(this.GET_CREATORS)
  }

  getComicStories(id):Observable<any>{
    this.GET_STORIES = `${this.URL_API}${id}/stories?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this._http.get<any>(this.GET_STORIES)
  }
}
