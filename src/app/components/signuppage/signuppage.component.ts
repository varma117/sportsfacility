import { Component, OnInit } from '@angular/core';
import Player from 'src/app/entity/Player';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {
player : Player = new Player(); 

playerDetails=
{
firstName : "",
lastName : "",
dob : "",
address :"",
state :"",
country : "",
pan : "",
email : "",
password :"",
mobile :""

}

save(){
  const observable = this.playerService.registorPlayer(this.playerDetails);
  observable.subscribe(
    (response: any)=>{
      console.log(response);
     
    },
    function(error){
      console.log(error);
      alert("something went wrong please check ")
    }
  ) 
  
}


  constructor(public playerService:PlayerService) { }

  ngOnInit(): void {
  }

}
