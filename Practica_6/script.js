const pantalla = document.getElementById('pantalla');
let expresion = '';
document.querySelectorAll('[data-valor]').forEach(boton => {
    boton.addEventListener('click', () => {
        expresion += boton.dataset.valor;
        actualizarPantalla();
    });
});

document.querySelectorAll('[data-comando]').forEach(boton => {
    boton.addEventListener('click', () => {
        const accion = boton.dataset.comando;
        switch(accion) {
            case 'borrar':
                expresion = expresion.slice(0, -1);
                break;
            case 'borrarTodo':
                expresion = '';
                break;
            case 'calcular':
                try {
                    let calculo = expresion.replace('×', '*').replace('÷', '/');
                    const resultado = eval(calculo);
                    expresion = resultado.toString();
                } catch (error) {
                    expresion = 'Error';
                    setTimeout(() => expresion = '', 1500);
                }
                break;
        }
        actualizarPantalla();
    });
});

function actualizarPantalla() {
    pantalla.textContent = expresion || '00000000';
}
