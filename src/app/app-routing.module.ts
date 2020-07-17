import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Characters
import { CharactersComponent } from "./components/characters/characters.component"
import { CharacterDetailComponent } from "./components/character-detail/character-detail.component"
//Comics
import { ComicsComponent } from "./components/comics/comics.component"
import { ComicDetailComponent } from "./components/comic-detail/comic-detail.component"
//Creators
import { CreatorsComponent } from "./components/creators/creators.component"
import { CreatorDetailComponent } from "./components/creator-detail/creator-detail.component"
//Series
import { SeriesComponent } from "./components/series/series.component"

const routes: Routes = [
  {
    path: "", redirectTo: "/characters", pathMatch: "full"
  },
  {
    path: "characters", component: CharactersComponent
  },
  {
    path: "character/:id", component: CharacterDetailComponent
  },
  {
    path: "comics", component: ComicsComponent
  },
  {
    path: "comics/:id", component: ComicDetailComponent
  },
  {
    path: "creators", component: CreatorsComponent
  },
  {
    path: "creators/:id", component: CreatorDetailComponent
  },
  {
    path: "series", component: SeriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
