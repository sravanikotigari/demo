import { Injectable } from "@angular/core";

@Injectable()
export class TokenManager {

  public tokenKey: string = 'app_token';

  constructor() { }    

  store(content) {
    var contentData;

    console.log("inside localstorsge store:", content);
    contentData = content.map(
      (data) => data.name
    )
    console.log("contentData:", contentData)
    localStorage.setItem(this.tokenKey, content);
  }

  retrieve() {
    console.log("inside localstorage");
    let storedToken: any = localStorage.getItem(this.tokenKey);
    console.log("storedToken:", storedToken);//====> here this console is[object object]
    if (!storedToken) throw 'no token found';
    return storedToken;
  }

}
