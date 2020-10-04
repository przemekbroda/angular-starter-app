import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '**', redirectTo: 'home'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
