console.log("hola mundo")

function eventoHTML(){
    document.querySelector("#info").innerHTML = "Esto es un evento directamente desde HTML"
    document.querySelector("#info").style.background = "blue";
    document.querySelector("#info").style.color = "white";
}
const btn1 = document.querySelector("#btn1")    


function eventoListener(){
    document.querySelector("#info").innerHTML= "Esto es un evento con listener"
    document.querySelector("#info").style.background = "green";
    document.querySelector("#info").style.color = "white";

}
const btn2 = document.querySelector("#btn2")

function eventoHandler(){
    document.querySelector("#info").innerHTML= "Esto es un evento con handler"
    document.querySelector("#info").style.background = "yellow";
    document.querySelector("#info").style.color = "white";

}
const btn3 = document.querySelector("#btn3")