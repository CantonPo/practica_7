console.log("hola mundo")

function eventoHTML(){
        document.querySelector("#info").innerHTML = "Esto es un evento directamente desde HTML"
     }
const btn1 = document.querySelector("#btn1")    

function eventoListener(){
    document.querySelector("#info").innerHTML= "Esto es un evento con listener"

}
const btn2 = document.querySelector("#btn2")

function eventoHandler(){
    document.querySelector("#info").innerHTML= "Esto es un evento con handler"

}
const btn3 = document.querySelector("#btn3")