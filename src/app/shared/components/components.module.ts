import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card/info-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from 'src/app/configs/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigsModule } from 'src/app/configs/configs.module';



@NgModule({
  declarations: [
    InfoCardComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigsModule,
  ],
  exports: [
    InfoCardComponent,
    NavbarComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
