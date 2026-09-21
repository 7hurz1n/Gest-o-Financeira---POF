let btnVisao = document.querySelector(".menu-topo a")
let contador = 0

btnVisao.onclick = function visaoGeral(){
    document.querySelector("a.active").classList.remove("active")
    
    if(contador < 2){
        contador = contador + 1
    }else{
        contador = 0
    }

    btnVisao[contador].classList.add("active")
}
