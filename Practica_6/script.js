const pantalla = document.getElementById('pantalla');
let expresion = '';

// Agregar valor a la expresión
document.querySelectorAll('[data-valor]').forEach(boton => {
    boton.addEventListener('click', () => {
        expresion += boton.dataset.valor;
        actualizarPantalla();
    });
});

// Funciones de control
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
                    // Reemplazar símbolos visuales por operadores válidos
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