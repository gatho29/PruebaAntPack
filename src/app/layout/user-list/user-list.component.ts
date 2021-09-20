import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { user } from 'src/app/shared/interfaces/user';
import { DetailsComponent } from './details/details.component';
import { Md5 } from 'ts-md5/dist/md5';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  detailsUsers: MatDialogRef<DetailsComponent>;
  subscriptionUser: Subscription;
  users: user[] = [];
  md5 = new Md5();
  filtroValor = '';

  constructor(private srvUser: UserService, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  // Funcion para mostrar los gravatar en los usuarios
  getListUsers(): void {
    this.subscriptionUser = this.srvUser.getUsers().subscribe(
      users => {
        this.users = users.map(user => {
          const md5Str = this.md5.appendStr(user.email).end()
          return { ...user, image: `https://www.gravatar.com/avatar/${md5Str}?d=robohash` }
        })
      },
      error => console.log(error)
    );
  }

  mostrarDetallesUsuario(): void {
    this.detailsUsers = this.dialog.open(DetailsComponent);
  }

  searchUser(value: string): void {
    this.filtroValor = value
  }

}
