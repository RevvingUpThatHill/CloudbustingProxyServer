import { exec } from 'node:child_process';
import { containerstart, containerimage, containername } from "../util/constants.js";

export let status = "INIT";

export function startContainer(){
    console.log("Starting container");
    status = "STARTING";
    exec(`${containerstart}`, (error, stdout, stderr)=>{console.log(error + stdout + stderr)});
}

export function immolate(){
    status = "KILLING"
    stopContainer();
    ejectImage();
    status = "DEAD"
}
  
function stopContainer(){
    console.log("Killing container")
    exec(`docker kill ${containername}`);
}
  
function ejectImage(){
    console.log("Ejecting image")
    exec(`docker commit ${containerimage}`);
    exec(`docker save ${containerimage} > ${containerimage}.tar`)
}
  
