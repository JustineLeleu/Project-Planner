﻿import {tasks} from "./task.js";

function RefreshRemainingDays(){
    let tasksElements = document.querySelectorAll(".task");

    for(let element of tasksElements){

        //Find currentCard in js collection based on id     
        let task = GetCard(Number(element.id));
        
        //Display remaining Time in html
        DisplayRemainingDays(task.id,ComputeRemainingDays(task.dueDate));
    }
}

function GetCard(id){
    return tasks.find(t => t.id === id);
}

function ComputeRemainingDays(dueDate){

    return Math.floor(Math.abs(dueDate-Date.now()) / (1000 * 60 * 60 * 24));
  
}

function DisplayRemainingDays(taskId,time){
    
    let currentElement = document.getElementById(taskId);
    if(currentElement !== null && currentElement !== undefined){
        
        let remainingDaysElement = currentElement.querySelector(".remainingTime___Text");
        remainingDaysElement.innerText = `${time} remaining days`;        
    }
    
}

export {ComputeRemainingDays, RefreshRemainingDays};