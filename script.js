"use strict";

// create 40 random math problems 
for (let i = 1; i < 41; i++) {
    let id = "problem" + [i];
    let mathProblem = Math.floor(Math.random() * 10) + " + " + Math.floor(Math.random() * 10) + " = _____ ";
    //replaces text on site via id
    document.getElementById(id).innerHTML = mathProblem;
}



