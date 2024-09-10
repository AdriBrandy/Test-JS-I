// Asincronia y Stack

// ESTA TAREA NO TIENE TEST AUTOMATICOS INCORPORADORS
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? Piensa primero cual será el resultado y escribelo. Luego prueba ver la respuesta usando la siguiente pagina: https://jsconsole.com/  y presioná enter, asi obtendras el resultado automaticamente)

function imprimir() {
    console.log(1);
    setTimeout (function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log (4);
}

imprimir();

//RESULTADO: 

// 1
// 4
// 3
// 2

//console.log(1);: Se ejecuta inmediatamente y muestra 1.
//setTimeout(function() { console.log(2); }, 1000);: Programa una función para que se ejecute después de 1 segundo (1000 milisegundos). Sin embargo, no se ejecuta inmediatamente, solo se agenda.
// setTimeout(function() { console.log(3); }, 0);: Programa otra función para ejecutarse lo antes posible (después de 0 milisegundos). Aunque el tiempo es 0, debido a la naturaleza asíncrona del setTimeout, esta función se colocará en la cola de tareas, y se ejecutará después de que el código síncrono actual termine.
// console.log(4);: Se ejecuta inmediatamente después y muestra