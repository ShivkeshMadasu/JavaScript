let button = document.getElementById("button");
let button1 = document.getElementById("button1");

button.addEventListener("click",localStorageHandler)
button1.addEventListener("click",sessionStorageHandler)

if(!localStorage.getItem("LocalCount"))
    localStorage.setItem("LocalCount",0);
if(!sessionStorage.getItem("sessionCount"))
    sessionStorage.setItem("sessionCount",0);

let localText = document.getElementById("localcount");
localText.innerHTML = localStorage.getItem("LocalCount");
let sessionText = document.getElementById("sessioncount");
sessionText.innerHTML = sessionStorage.getItem("sessionCount"); 

function localStorageHandler(){
    let count = localStorage.getItem("LocalCount");
    count = parseInt(count)+1;
    localStorage.setItem("LocalCount",count)
    localText.innerHTML = localStorage.getItem("LocalCount");
}        

function sessionStorageHandler(){
    let count = sessionStorage.getItem("sessionCount");
    count = parseInt(count)+1;
    sessionStorage.setItem("sessionCount",count);
    sessionText.innerHTML = sessionStorage.getItem("sessionCount");
}