import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http'

import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _loginUrl = "http://localhost:3000/user/login";
  loginUserData = <any>{}
  constructor(private http: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
  }
  
  loginUser () {
    this.http.post<any>(this._loginUrl, this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/test'])
        
      },
      err => console.log(err)
    ) 
  }
}
