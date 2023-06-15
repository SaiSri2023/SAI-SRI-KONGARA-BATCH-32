import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLogin=false;
  constructor() { }

  ngOnInit() {
  }
login:string='Login';
  toggleMenu(){
     if(this.login==='Login'){
      this.login='Logout';
     }else{
      this.login='Login';
     }
  }

}