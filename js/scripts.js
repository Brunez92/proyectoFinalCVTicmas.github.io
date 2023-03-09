
let nuevo_perfil = document.getElementById('nuevo_perfil');
nuevo_perfil.addEventListener('click', function () {
    location.reload();
});

let formulario = document.getElementById('formul');
formulario.addEventListener('submit', function () {
    formulario.reset();
});


let tarjeta_nodelist = document.querySelectorAll('.tarjeta');
let i = 1;
for (i; i <= 10; i++) {
    tarjeta_nodelist[i].addEventListener('mouseenter', function (event) {
        this.style.background = 'var(--gris_claro';
    })
    tarjeta_nodelist[i].addEventListener('mouseleave', function (event) {
        this.style.background = 'linear-gradient(to right, #ffffff 0%, #f6f6f6 47%, var(--gris_claro) 100%)';
    })
}