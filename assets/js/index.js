const colorselect = document.querySelector('.selectcolor');
const btntotal = document.querySelector('.btntotal');
const cantidadselect = document.querySelector('#cantidad');

const colorinfo = document.querySelector('.color-info');
const cantidadinfo = document.querySelector('.cantidad-info');
const totalinfo = document.querySelector('.total-info');

btntotal.addEventListener('click', function() {
    const cantidad = cantidadselect.value;
    const color = colorselect.value;
    const total = calculartotal(cantidad);

    totalinfo.textContent = `Total: ${total}`;
    cantidadinfo.textContent = `Cantidad: ${cantidad}`;
    colorinfo.textContent = `Color: ${color}`;
});

function calculartotal(cantidad) {
    const preciounitario = 1000;
    return cantidad * preciounitario;
}