import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _loginUrl = "http://localhost:3000/user/admin/login";
  loginUserData = <any>{}
  public errorMsg;

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
      err => this.errorMsg = "*" + err.error.message
    )
    

    
    
  }


}
