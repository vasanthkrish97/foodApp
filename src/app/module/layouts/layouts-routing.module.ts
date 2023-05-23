import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { AddRecipesComponent } from 'src/app/components/add-recipes/add-recipes.component';
import { DownloadComponent } from 'src/app/components/download/download.component';
import { ExploreComponent } from 'src/app/components/explore/explore.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LayoutsComponent } from 'src/app/components/layouts/layouts.component';
import { RecipesComponent } from 'src/app/components/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: LayoutsComponent,children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'download', component: DownloadComponent},
    { path: 'explore', component: ExploreComponent},
    { path: 'add-recipes', component: AddRecipesComponent},
    
  
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
