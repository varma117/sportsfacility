import { Component, OnInit } from '@angular/core';
import Player from 'src/app/entity/Player';
import { PlayerService } from 'src/app/player.service';

@Component({
  selector: 'app-updateplayerdetails',
  templateUrl: './updateplayerdetails.component.html',
  styleUrls: ['./updateplayerdetails.component.css']
})
export class UpdateplayerdetailsComponent implements OnInit {
   player : Player = new Player();
   id : string = "";

update(player:Player){
  const observable = this.playerService.updateDetails(this.player,this.id);
  observable.subscribe(
    (response: any)=>{
      console.log(response);
     
    },
    function(error){
      console.log(error);
      alert("something went wrong please check ");
    }
  ) 

  
}

  constructor(public playerService:PlayerService) { }

  ngOnInit(): void {
  }

}
