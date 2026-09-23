const btnV = document.querySelector("#visao")
const btnC = document.querySelector("#contas")
const btnT = document.querySelector("#trs")

btnV.addEventListener('click', function() {
    btnV.classList.add('active');

    btnC.classList.remove('active');
    btnT.classList.remove('active');

});

btnC.addEventListener('click', function() {
    btnC.classList.add('active');

    btnV.classList.remove('active');
    btnT.classList.remove('active');
});

btnT.addEventListener('click', function() {
    btnT.classList.add('active');

    btnV.classList.remove('active');
    btnC.classList.remove('active');
});


const btnTd= document.querySelector("#todos")
const btnPJ = document.querySelector("#PJ")
const btnPF = document.querySelector("#PF")

btnTd.addEventListener('click', function() {
    btnTd.classList.add('active');

    btnPJ.classList.remove('active');
    btnPF.classList.remove('active');

});

btnPJ.addEventListener('click', function() {
    btnPJ.classList.add('active');

    btnTd.classList.remove('active');
    btnPF.classList.remove('active');
});

btnPF.addEventListener('click', function() {
    btnPF.classList.add('active');

    btnPJ.classList.remove('active');
    btnPF.classList.remove('active');
});
