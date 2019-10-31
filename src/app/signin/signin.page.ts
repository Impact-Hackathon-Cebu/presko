import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService, User } from '../services/uservice.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  email: '';
  password: '';

  user: User = {
    id: '',
    email: '',
    role: ''
  };

  constructor(
    private uservice: UserService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async signin() {
    const { email, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      if (res.user) {
        let id = res.user.uid;
        if (id) {
          this.uservice.getUser(id).subscribe(user => {
            this.user = user;
            if (user.role == "supplier") {
              this.router.navigate(['sup-home/' + id]);
            } else if (user.role == "consumer") {
              this.router.navigate(['con-home/' + id]);
            }
          });
        }
      }
    } catch (err) {
      console.dir(err);
      if (err.code === "auth/user-not-found") {
        console.log("User not found");
      }
    }
  }

}
