
const contadorCarrito = document.getElementById('contador-carrito');
let carrito = JSON.parse(localStorage.getItem('carritoTech')) || [];


function actualizarTodo() {
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    contadorCarrito.textContent = total > 0 ? total : '0';

    document.querySelectorAll('.boton-carrito').forEach(boton => {
        const id = boton.getAttribute('data-id');
        if (!id) return;

        const item = carrito.find(p => p.id === id);

        if (item && item.cantidad > 0) {
            boton.textContent = 'Eliminar del carrito';
            boton.classList.add('en-carrito');
        } else {
            boton.textContent = 'Añadir al carrito';
            boton.classList.remove('en-carrito');
        }
    });
}


function guardarCarrito() {
    localStorage.setItem('carritoTech', JSON.stringify(carrito));
}


document.querySelectorAll('.boton-carrito').forEach(boton => {
    boton.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute('data-id');
        if (!id) return;

        const nombre = this.closest('.tarjeta-producto')?.querySelector('h3')?.textContent || '';
        const precio = this.closest('.tarjeta-producto')?.querySelector('.precio-actual')?.textContent || '';

        const existente = carrito.find(item => item.id === id);

        if (existente) {

            existente.cantidad--;
            if (existente.cantidad <= 0) {
                carrito = carrito.filter(item => item.id !== id);
            }
            this.textContent = 'Añadir al carrito';
            this.classList.remove('en-carrito');
        } else {

            carrito.push({ id, nombre, precio, cantidad: 1 });
            this.textContent = 'Eliminar del carrito';
            this.classList.add('en-carrito');
        }


        const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        contadorCarrito.textContent = total > 0 ? total : '0';


        guardarCarrito();
        contadorCarrito.classList.add('actualizado');
        setTimeout(() => contadorCarrito.classList.remove('actualizado'), 300);
    });
});

window.addEventListener('load', actualizarTodo);

const btnUsuario = document.getElementById('btn-usuario');
const menuUsuario = document.getElementById('menu-usuario');
if (btnUsuario && menuUsuario) {
    btnUsuario.addEventListener('click', e => { e.preventDefault(); menuUsuario.classList.toggle('mostrar'); });
    document.addEventListener('click', e => {
        if (!e.target.closest('.usuario-contenedor')) menuUsuario.classList.remove('mostrar');
    });
}

const inputBusqueda = document.getElementById('input-busqueda');
if (inputBusqueda) {
    inputBusqueda.addEventListener('input', () => {
        const texto = inputBusqueda.value.toLowerCase().trim();
        document.querySelectorAll('.tarjeta-producto').forEach(tarjeta => {
            const titulo = tarjeta.querySelector('h3').textContent.toLowerCase();
            tarjeta.style.display = titulo.includes(texto) || texto === '' ? 'block' : 'none';
        });
    });
    document.querySelector('.btn')?.addEventListener('click', () => inputBusqueda.focus());
}