import { exec } from 'node:child_process';
import { containerstart, containerimage, containername } from "../util/constants.js";
import { commitImage, saveImage, startContainer, stopContainer } from '../client/docker.js';

export let status = "INIT"

export function startWorkspace(){
    console.log("Starting workspace");
    status = "STARTING";
    startContainer();
}
  
function stopWorkspace(){
    console.log("Killing workspace")
    stopContainer();
}
  
function ejectImage(){
    console.log("Ejecting image")
    commitImage();
    saveImage();
}

export function immolate(){
    console.log("Immolating workspace")
    stopWorkspace();
    ejectImage();
}
  
