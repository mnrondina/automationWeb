/* Capturar por ID: */

const titulo_modificado = document.getElementById("titulo-principal");

titulo_modificado.textContent = "Titulo Modificado: Nueva CALCULADORA";

/* Capturar por CLASS */

const botones = document.getElementsByClassName("botones"); // Captura los dos botones por class

/* Capturar por NAME */

const numeros = document.getElementsByName("num1");

/* Capturar por TAG (etiqueta) */

const tag = document.getElementsByTagName("p")[0]; // Accede al primer párrafo de la lista

// ********************* METODOS MODERNOS DE SELECTORES *********************

// QuerySelector: Devuelve el primer elemento que coincide o null.

const boron = document.querySelector('btnenviar');