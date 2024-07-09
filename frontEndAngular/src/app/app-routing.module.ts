import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { ProvidersPageComponent } from './pages/providers/providers.component';
import { ProviderPageComponent } from './pages/provider/provider.component';
//import { routes } from './routes';
const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'providers', component: ProvidersPageComponent},
  {path: 'provider/:id', component: ProviderPageComponent},
  //{path: 'provider', component: ProviderPageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
