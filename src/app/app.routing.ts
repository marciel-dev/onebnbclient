import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


// Criando as rotas

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }
];

// Exportando as rotas para serem usadas no app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
