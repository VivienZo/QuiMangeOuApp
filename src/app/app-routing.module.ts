import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupeComponent } from './groupe/groupe.component';
import { PropositionsComponent } from './propositions/propositions.component';
import { PropositionDetailComponent } from './proposition-detail/proposition-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/groupe', pathMatch: 'full' },
  { path: 'groupe', component: GroupeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'propositions', component: PropositionsComponent },
  { path: 'detail/:slug', component: PropositionDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
