import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{
    constructor(private datasouce : RestDataSource){

    }

    authenticate(username:string, password:string): Observable<boolean>{
        return this.datasouce.authenticate(username,password);
    }

    get authenticcted() : boolean {
        return this.datasouce.auth_token != null;
    }

    clear(){
        this.datasouce.auth_token = null;
    }

}