import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

//Componentes
import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { ComicsComponent } from "./components/comics/comics.component"
import { CreatorDetailComponent } from './components/creator-detail/creator-detail.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { SeriesComponent } from "./components/series/series.component"
import { SearchComponent } from './components/search/search.component';

//Modulos
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router"
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from "./app-routing.module"
import { FlexLayoutModule } from "@angular/flex-layout";
//Angular Material Modulos
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRippleModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { CreatorRoleComponent } from './components/creator-role/creator-role.component';
//Pipes
import { SearchCreatorsPipe } from './pipes/search-creators/search-creators.pipe';
import { SearchPipe } from './pipes/search/search.pipe';

//api= https://gateway.marvel.com:443/v1/public/characters?apikey=738903c798cf6136fba2337cb9c8db68
//private 6bc472f49980e881401c5b61125d10e2f887935c
//public 738903c798cf6136fba2337cb9c8db68
//ts =1
//hash = ccb5d2579f85f580a0f7926fa96c827e

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersComponent,
    CharacterDetailComponent,
    ComicsComponent,
    SeriesComponent,
    CreatorsComponent,
    ComicDetailComponent,
    CreatorDetailComponent,
    SearchComponent,
    SearchPipe,
    LoaderComponent,
    CreatorRoleComponent,
    SearchCreatorsPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
