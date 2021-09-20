import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { DetailsComponent } from './user-list/details/details.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../configs/material/material.module'
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchPipe } from '../shared/pipes/search.pipe';



@NgModule({
  declarations: [
    UserListComponent,
    DetailsComponent,
    HomeComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    UserListComponent,
    DetailsComponent,
  ]
})
export class LayoutModule { }
