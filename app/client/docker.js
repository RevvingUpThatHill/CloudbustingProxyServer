import { exec } from 'node:child_process';
import { containerstart, containerimage, containername } from "../util/constants.js";

export function startContainer(){
    exec(`${containerstart}`, (error, stdout, stderr)=>{console.log(error + stdout + stderr)});
}
  
export function stopContainer(){
    exec(`docker kill ${containername}`);
}
  
export function commitImage(){
    exec(`docker commit ${containerimage}`);
    
}

export function saveImage(){
    exec(`docker save ${containerimage} > ${containerimage}.tar`)
}
