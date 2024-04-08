import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CodeSearchComponent } from './components/code-search/code-search.component';
import { CommitSearchComponent } from './components/commit-search/commit-search.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },{
    path: 'search',
    component : SearchPageComponent
  },{
    path: 'user/:id',
    component : UserDetailsComponent
  },{
    path: 'code',
    component : CodeSearchComponent
  },{
    path: 'commit',
    component : CommitSearchComponent
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
