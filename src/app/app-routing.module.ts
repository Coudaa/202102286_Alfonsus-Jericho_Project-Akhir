import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { EditdatadivisiComponent } from './editdatadivisi/editdatadivisi.component';
import { HapusdatadivisiComponent } from './hapusdatadivisi/hapusdatadivisi.component';
import { TambahdatadivisiComponent } from './tambahdatadivisi/tambahdatadivisi.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionComponent},
  {path:"tambahdatadivisi",component:TambahdatadivisiComponent},
  {path:"editdatadivisi", component:EditdatadivisiComponent},
  {path:"hapusdatadivisi", component:HapusdatadivisiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
