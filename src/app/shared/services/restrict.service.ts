import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestrictService {

  constructor() { }
  checkuserandpassword(user:string,psd:string){
    if(user=="menlo123" && psd=="menlo@12"){
      localStorage.setItem('user','menlo123');
      return true;
    }else{
     return false;
    }
  }
}
