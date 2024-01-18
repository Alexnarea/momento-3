"use strict"

let phrase = 'La programación web es fundamental para el progreso';
let palabras = phrase.split(' ');

let palabrasMasTresLetras = palabras.filter(palabra => palabra.length > 3);

alert("Palabras que tienen mas de 3 letras:\n" + palabrasMasTresLetras.join(', '));


