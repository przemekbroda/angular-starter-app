import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login: string;
  password: string;

  constructor(private snackbar: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.login !== 'przemek' || this.password !== 'pass') {
      this.snackbar.open('Wrong login or password', 'OK', {duration: 4000});
    } else {
      this.router.navigate(['main', 'home'], {relativeTo: this.route});
    }
  }
}
