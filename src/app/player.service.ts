import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import  Player from "./entity/Player";
import  {Observable} from 'rxjs';


const signup_URL = "http://localhost:9909/registerplayer";
const update_URL ="http://localhost:9909/updatedetails/";

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

    constructor(public http: HttpClient){

    }

}