import { Component, OnInit } from '@angular/core';
import Player from 'src/app/entity/Player';
import { PlayerService } from 'src/app/player.service';
import SportsFacility from 'src/app/entity/SportsFacility';

@Component({
  selector: 'app-bookfacility',
  templateUrl: './bookfacility.component.html',
  styleUrls: ['./bookfacility.component.css']
})
export class BookfacilityComponent implements OnInit {
  facility:SportsFacility = new SportsFacility();

bookFacility(){
  const observable = this.playerService.sloteBooking(this.facility);
  observable.subscribe(
    (response: any)=>{
      console.log(response);
      alert("slote has booked successfully ");
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
