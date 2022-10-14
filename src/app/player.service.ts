import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import  Player from "./entity/Player";
import  {Observable} from 'rxjs';
import SportsFacility from "./entity/SportsFacility";
import Users from "./entity/Users";


const signup_URL = "http://localhost:9909/registerplayer";
const update_URL ="http://localhost:9909/updatedetails/";
const facility_URL = "http://localhost:9909/registorfacility";
const login_URL = "http://localhost:9909/login";

@Injectable({
    providedIn: 'root'
  })
export class PlayerService{

registorPlayer(player:Player){
    return this.http.post(signup_URL ,player);

}

updateDetails(player:Player,id:string)
    {

    return this.http.put(update_URL+id,player);
}

sloteBooking(facility:SportsFacility){

    return this.http.post(facility_URL,facility);

}

loginUser(user:Users):Observable<object>{
   // return this.http.post('${loging_URL}',user);
   return this.http.post(login_URL,user);
      }



    constructor(public http: HttpClient){

    }

}