console.log("form on")
"use strict";

/**
 * // feedback de validación de formulario
 */

//estados
let estadoNombre = 0;
let estadoEmail = 0;
let estadoMensaje = 0;
let estadoAsunto = 0;

// elementos
const nombre = document.getElementById('nombre');
const nombreSpan = document.getElementById('nombre-span');
const email = document.getElementById('email');
const emailSpan = document.getElementById('email-span');
const mensaje = document.getElementById('mensaje');
const mensajeSpan = document.getElementById('mensaje-span');
const asunto = document.getElementById('asunto');
const asuntoSpan = document.getElementById('asunto-span');

/**
 * nombre
 * 
 */
 nombre.addEventListener('input', (event) => {
    if(nombre.validity.valid && estadoNombre === 1) { 
        nombreSpan.innerHTML = "👌";  
        nombreSpan.classList.add('show');
        nombreSpan.setAttribute('aria-label', 'okey');
        nombreSpan.setAttribute('role', 'image');
    }

    if(!nombre.validity.valid && estadoNombre === 1) { 
        nombreSpan.innerHTML = "⚠️";
        nombreSpan.setAttribute('aria-label', 'atención, corrija el campo de Nombre');
        nombreSpan.setAttribute('role', 'image');
    }
})

// si pierde el focus, aplicar estilo de validación
nombre.addEventListener('focusout', (event)=> {
    estadoNombre = 1;

    nombre.classList.add('edited');
    nombreSpan.classList.add('show');

    if(nombre.validity.valid) {
        nombreSpan.innerHTML = "👌";  
        nombreSpan.setAttribute('aria-label', 'okey');
        nombreSpan.setAttribute('role', 'image');
    } else {
        nombreSpan.innerHTML = "⚠️";
        nombreSpan.setAttribute('aria-label', 'atención, corrija el campo de Email');
        nombreSpan.setAttribute('role', 'image');
    }
});



/**
 * email
 * 
 */
email.addEventListener('input', (event) => {
    if(email.validity.valid && estadoEmail === 1) { 
        emailSpan.classList.add('show');
        emailSpan.innerHTML = "👌";  
        emailSpan.setAttribute('aria-label', 'okey');
        emailSpan.setAttribute('role', 'image');
    }

    if(!email.validity.valid && estadoEmail === 1) { 
        emailSpan.innerHTML = "⚠️";
        emailSpan.setAttribute('aria-label', 'atención, corrija el campo de Email');
        emailSpan.setAttribute('role', 'image');
    }
})

email.addEventListener('focusout', (event)=> {
    estadoEmail = 1;

    email.classList.add('edited');
    emailSpan.classList.add('show');

    if(email.validity.valid) {
        emailSpan.innerHTML = "👌";  
        emailSpan.setAttribute('aria-label', 'okey');
        emailSpan.setAttribute('role', 'image');
    } else {
        emailSpan.innerHTML = "⚠️";
        emailSpan.setAttribute('aria-label', 'atención, corrija el campo de Email');
        emailSpan.setAttribute('role', 'image');
    }
});

/**
 * mensaje
 * 
 */
 mensaje.addEventListener('input', (event) => {
    if(mensaje.validity.valid && estadoMensaje === 1) { 
        mensajeSpan.innerHTML = "👌";  
        mensajeSpan.classList.add('show');
        mensajeSpan.setAttribute('aria-label', 'okey');
        mensajeSpan.setAttribute('role', 'image');
    }

    if(!mensaje.validity.valid && estadoMensaje === 1) { 
        mensajeSpan.innerHTML = "⚠️";
        mensajeSpan.setAttribute('aria-label', 'atención, corrija el campo de Mensaje');
        mensajeSpan.setAttribute('role', 'image');
    }
})

// si pierde el focus, aplicar estilo de validación
mensaje.addEventListener('focusout', (event)=> {
    estadoMensaje = 1;

    mensaje.classList.add('edited');
    mensajeSpan.classList.add('show');

    if(mensaje.validity.valid) {
        mensajeSpan.innerHTML = "👌";  
        mensajeSpan.setAttribute('aria-label', 'okey');
        mensajeSpan.setAttribute('role', 'image');
    } else {
        mensajeSpan.innerHTML = "⚠️";
        mensajeSpan.setAttribute('aria-label', 'atención, corrija el campo de Mensaje');
        mensajeSpan.setAttribute('role', 'image');
    }
});

/**
 * asunto
 * 
 */
 asunto.addEventListener('input', (event) => {
    if(asunto.validity.valid && estadoAsunto === 1) { 
        asuntoSpan.innerHTML = "👌";  
        asuntoSpan.classList.add('show');
        asuntoSpan.setAttribute('aria-label', 'okey');
        asuntoSpan.setAttribute('role', 'image');
    }

    if(!asunto.validity.valid && estadoAsunto === 1) { 
        asuntoSpan.innerHTML = "⚠️";
        asuntoSpan.setAttribute('aria-label', 'atención, corrija el campo de Nombre');
        asuntoSpan.setAttribute('role', 'image');
    }
})

// si pierde el focus, aplicar estilo de validación
asunto.addEventListener('focusout', (event)=> {
    estadoAsunto = 1;

    asunto.classList.add('edited');
    asuntoSpan.classList.add('show');

    if(asunto.validity.valid) {
        asuntoSpan.innerHTML = "👌";  
        asuntoSpan.setAttribute('aria-label', 'okey');
        asuntoSpan.setAttribute('role', 'image');
    } else {
        asuntoSpan.innerHTML = "⚠️";
        asuntoSpan.setAttribute('aria-label', 'atención, corrija el campo de Asunto');
        asuntoSpan.setAttribute('role', 'image');
    }
});

 