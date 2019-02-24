import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/BucketList', pathMatch: 'full' },
  { path: 'BucketList', component: ListComponent },
  { path: 'BucketDetail/:id', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
