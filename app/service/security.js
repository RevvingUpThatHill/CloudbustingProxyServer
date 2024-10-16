import { token } from "../util/constants";
let active = false;

export function validateToken(t){
    if(!active && t === token){
      active = true;
    }else{
      console.log("Token validation failed")
      throw new Error("Invalid token")
    }
}