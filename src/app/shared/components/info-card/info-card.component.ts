import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DetailsComponent } from 'src/app/layout/user-list/details/details.component';
import { user } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit, OnDestroy {

  @Input() user;
  userSubscription: Subscription;
  detailsUsers: MatDialogRef<DetailsComponent>;
  users: user[] = [];


  constructor(private srvUser: UserService, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription && this.userSubscription.unsubscribe();
  }

  // Funcion para consumir el servicio y mostrar la lista de usuarios
  getListUsers(): void {
    this.userSubscription = this.srvUser.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error)
    );

  }

  // Funcion para mostrar el modal de los detalles de los usuarios
  shwoUserDetails(): void {
    this.detailsUsers = this.dialog.open(DetailsComponent, { width: '400px', data: this.user, panelClass: 'dialogWhite' });
  }
}
