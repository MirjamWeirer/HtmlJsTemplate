"use strict";
const input = document.getElementById("input");
input.addEventListener("focus", function(){
    document.getElementById("input").classList.add("selected"); 
});
const ul = document.getElementById("out");
let li = document.createElement("li");
input.addEventListener("keydown",function(event){
    if (event.keyCode == 13){
        const word = Array.from(input.value);
        word.toString().split('').forEach(element => {
           li.innerText = element;
           ul.appendChild(li.cloneNode(true));
        });
        document.getElementById("input").classList.remove("selected");
    }
})
document.getElementById("out").addEventListener("mouseover",function(event){
    const li = document.getElementsByTagName("li");
    let mkdir = [];
    for(let i = 0; i < li.length; i++){
        if(li[i].value == li[i+1].value){
            mkdir.push(li[i].value);
        }
    }
    
})