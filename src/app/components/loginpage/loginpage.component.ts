import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Users from 'src/app/entity/Users';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  user : Users = new Users();
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
  }

  userLoging(){
    console.log(this.user)
    this.playerService.loginUser(this.user).subscribe(data=>{
alert("login successfull")
    },error=>alert("wrong credentials , please enter correct username and password")
    )
  }

}
