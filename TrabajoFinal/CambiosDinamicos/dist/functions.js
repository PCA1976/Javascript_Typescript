"use strict";
const boxes = document.querySelectorAll('.box');
function changeBoxText() {
    for (let i = 0; i < boxes.length; i++) {
        const caja = boxes[i];
        const texto = `Caja${i + 1}`;
        const nvotexto = `Nuevo texto para Caja${i + 1}`;
        if (!caja.innerHTML.includes('Nuevo'))
            caja.textContent = nvotexto;
        else
            caja.textContent = texto;
        /*        const accion = document.getElementById(caja.id);
                 if (accion != null)
                    accion.innerHTML=nvotexto;
                else console.log('Variable accion es nula'); */
    }
    ;
}
;
function changeBoxColor() {
    for (let i = 0; i < boxes.length; i++) {
        const caja = boxes[i];
        if ((caja.style.backgroundColor === 'lightgray') || caja.style.backgroundColor === '')
            caja.style.backgroundColor = 'lightblue';
        else
            caja.style.backgroundColor = 'lightgray';
    }
}
