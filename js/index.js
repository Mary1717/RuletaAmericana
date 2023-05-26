//campos para el jugador número uno 
const monto1 = document.getElementById('monto1');
const opcion1 = document.getElementById('opcion1');
const resultado1 = document.getElementById('resultado1');
const numero1 = document.getElementById('numero1');
const saldo1 = document.getElementById('saldo1');

//campos para el jugador dos
const monto2 = document.getElementById('monto2');
const opcion2 = document.getElementById('opcion2');
const resultado2 = document.getElementById('resultado2');
const numero2 = document.getElementById('numero2');
const saldo2 = document.getElementById('saldo2');

//campos para el jugador 3
const monto3 = document.getElementById('monto3');
const opcion3 = document.getElementById('opcion3');
const girar = document.getElementById('girar');
const resultado3 = document.getElementById('resultado3');
const numero3 = document.getElementById('numero3');
const saldo3 = document.getElementById('saldo3');

//limpiar
const limpiar = document.getElementById('limpiar');
//ruleta
const imagenRuleta = document.getElementById('imagenRuleta');

//array de los posibles resultados de la ruleta
const resultados = [
    {
        "numero": 0,
        "color": "Verde",
        "minGrados": -4.736842105263158,
        "maxGrados": 4.736842105263158
    },
    {
        "numero": 2,
        "color": "Negro",
        "minGrados": 4.736842105263159,
        "maxGrados": 14.21052631578948
    },
    {
        "numero": 14,
        "color": "Rojo",
        "minGrados": 14.21052631578949,
        "maxGrados": 23.68421052631579
    },
    {
        "numero": 35,
        "color": "Negro",
        "minGrados": 23.68421052631580,
        "maxGrados": 33.15789473684211
    },
    {
        "numero": 23,
        "color": "Rojo",
        "minGrados": 33.15789473684212,
        "maxGrados": 42.63157894736842
    },
    {
        "numero": 4,
        "color": "Negro",
        "minGrados": 42.63157894736843,
        "maxGrados": 52.10526315789473
    },
    {
        "numero": 16,
        "color": "Rojo",
        "minGrados": 52.10526315789474,
        "maxGrados": 61.57894736842105
    },
    {
        "numero": 33,
        "color": "Negro",
        "minGrados": 61.57894736842106,
        "maxGrados": 71.05263157894737
    },
    {
        "numero": 21,
        "color": "Rojo",
        "minGrados": 71.05263157894738,
        "maxGrados": 80.52631578947368
    },
    {
        "numero": 6,
        "color": "Negro",
        "minGrados": 80.52631578947369,
        "maxGrados": 90
    },
    {
        "numero": 18,
        "color": "Rojo",
        "minGrados": 90.00000000000001,
        "maxGrados": 99.47368421052631
    },
    {
        "numero": 31,
        "color": "Negro",
        "minGrados": 99.47368421052632,
        "maxGrados": 108.94736842105263
    },
    {
        "numero": 19,
        "color": "Rojo",
        "minGrados": 108.94736842105264,
        "maxGrados": 118.42105263157895
    },
    {
        "numero": 8,
        "color": "Negro",
        "minGrados": 118.42105263157896,
        "maxGrados": 127.89473684210526
    },
    {
        "numero": 12,
        "color": "Rojo",
        "minGrados": 127.89473684210527,
        "maxGrados": 137.3684210526316
    },
    {
        "numero": 29,
        "color": "Negro",
        "minGrados": 137.36842105263162,
        "maxGrados": 146.8421052631579
    },
    {
        "numero": 25,
        "color": "Rojo",
        "minGrados": 146.84210526315792,
        "maxGrados": 156.31578947368422
    },
    {
        "numero": 10,
        "color": "Negro",
        "minGrados": 156.31578947368423,
        "maxGrados": 165.78947368421054
    },
    {
        "numero": 27,
        "color": "Rojo",
        "minGrados": 165.78947368421055,
        "maxGrados": 175.26315789473685
    },
    {
        "numero": 00,
        "color": "Verde",
        "minGrados": 175.26315789473686,
        "maxGrados": 184.73684210526318
    },
    {
        "numero": 1,
        "color": "Rojo",
        "minGrados": 184.7368421052632,
        "maxGrados": 194.2105263157895
    },
    {
        "numero": 13,
        "color": "Negro",
        "minGrados": 194.21052631578952,
        "maxGrados": 203.6842105263158
    },
    {
        "numero": 36,
        "color": "Rojo",
        "minGrados": 203.6842105263158,
        "maxGrados": 213.1578947368421
    },
    {
        "numero": 24,
        "color": "Negro",
        "minGrados": 213.1578947368421,
        "maxGrados": 222.63157894736843
    },
    {
        "numero": 3,
        "color": "Rojo",
        "minGrados": 222.63157894736844,
        "maxGrados": 232.10526315789474
    },
    {
        "numero": 15,
        "color": "Negro",
        "minGrados": 232.10526315789475,
        "maxGrados": 241.57894736842108
    },
    {
        "numero": 34,
        "color": "Rojo",
        "minGrados": 241.57894736842108,
        "maxGrados": 251.0526315789474
    },
    {
        "numero": 22,
        "color": "Negro",
        "minGrados": 251.0526315789474,
        "maxGrados": 260.5263157894737
    },
    {
        "numero": 5,
        "color": "Rojo",
        "minGrados": 260.5263157894737,
        "maxGrados": 270
    },
    {
        "numero": 17,
        "color": "Negro",
        "minGrados": 270.00000000000006,
        "maxGrados": 279.47368421052634
    },
    {
        "numero": 32,
        "color": "Rojo",
        "minGrados": 279.47368421052634,
        "maxGrados": 289.47368421052636
    },
    {
        "numero": 20,
        "color": "Negro",
        "minGrados": 289.4736842105264,
        "maxGrados": 298.9473684210527
    },
    {
        "numero": 7,
        "color": "Rojo",
        "minGrados": 298.9473684210527,
        "maxGrados": 308.421052631579
    },
    {
        "numero": 11,
        "color": "Negro",
        "minGrados": 308.421052631579,
        "maxGrados": 317.8947368421053
    },
    {
        "numero": 30,
        "color": "Rojo",
        "minGrados": 317.8947368421053,
        "maxGrados": 327.3684210526316
    },
    {
        "numero": 26,
        "color": "Negro",
        "minGrados": 327.3684210526316,
        "maxGrados": 336.8421052631579
    },
    {
        "numero": 9,
        "color": "Rojo",
        "minGrados": 336.8421052631579,
        "maxGrados": 346.3157894736842
    },
    {
        "numero": 28,
        "color": "Negro",
        "minGrados": 346.3157894736842,
        "maxGrados": 355.7894736842105
    }
]

//evento clic al elemento girar
girar.addEventListener('click', () => {

    //métodos de validacion de apuestas
    if (!validarApuestaUno()) {
        return;
    }
    if (!validarApuestaDos()) {
        return;
    }
    if (!validarApuestaTres()) {
        return;
    }
    // Desactivar el botón 'girar' para evitar múltiples clics durante el giro de la ruleta
    girar.disabled = true;

    // Configurar la animación de la ruleta
    let vueltas = 5;
    let grados = Math.floor(Math.random() * 360) + 360 * vueltas;

    // Aplicar la rotación a la imagen de la ruleta
    imagenRuleta.style.transform = `rotate(${grados}deg)`;

    // Esperar un tiempo para detener la rotación y mostrar el resultado
    setTimeout(() => {
        // Calcular el resultado de la ruleta en base a los grados de la rotación
        let gradosResultado = grados % 360;

        // Obtener el color y número resultantes y mostrarlos en el primer resultado
        let resultadoRuleta = resultados.find(r => gradosResultado >= r.minGrados && gradosResultado <= r.maxGrados);
        let colorResultado = resultadoRuleta ? resultadoRuleta.color.toLowerCase() : 'desconocido';
        let numeroResultado = resultadoRuleta ? resultadoRuleta.numero : 'desconocido';

        resultado1.textContent = `Color: ${colorResultado}, Número: ${numeroResultado}, Grados: ${gradosResultado}`;

        let resultadoApuestaUno = calcularResultadoApuestaUno(resultadoRuleta);
        if (resultadoApuestaUno > 0) {
            resultado1.textContent += ` - Ganó $${resultadoApuestaUno.toFixed(2)}`;
            saldo1.textContent = parseInt(saldo1.textContent) + resultadoApuestaUno;
        } else {
            resultado1.textContent += ` - Perdió $${monto1.value}`;
            saldo1.textContent = parseInt(saldo1.textContent) - resultadoApuestaUno;
        }
        // Obtener el color y número resultantes y mostrarlos en el segundo resultado
        resultado2.textContent = `Color: ${colorResultado}, Número: ${numeroResultado}, Grados: ${gradosResultado}`;
        let resultadoApuestaDos = calcularResultadoApuestaDos(resultadoRuleta);
        if (resultadoApuestaDos > 0) {
            resultado2.textContent += ` - Ganó $${resultadoApuestaDos.toFixed(2)}`;
            saldo2.textContent = parseInt(saldo2.textContent) + resultadoApuestaDos;
        } else {
            resultado2.textContent += ` - Perdió $${monto2.value}`;
            saldo2.textContent = parseInt(saldo2.textContent) - resultadoApuestaDos;
        }

        // Obtener el color y número resultantes y mostrarlos en el tercer resultado
        resultado3.textContent = `Color: ${colorResultado}, Número: ${numeroResultado}, Grados: ${gradosResultado}`;
        let resultadoApuestaTres = calcularResultadoApuestaTres(resultadoRuleta);
        if (resultadoApuestaTres > 0) {
            resultado3.textContent += ` - Ganó $${resultadoApuestaTres.toFixed(2)}`;
            saldo3.textContent = parseInt(saldo3.textContent) + resultadoApuestaTres;
        } else {
            resultado3.textContent += ` - Perdió $${monto3.value}`;
            saldo3.textContent = parseInt(saldo3.textContent) - resultadoApuestaTres;
        }

        // Restablecer la rotación para el siguiente giro
        imagenRuleta.style.transition = 'none';
        imagenRuleta.style.transform = `rotate(${gradosResultado}deg)`;
        setTimeout(() => {
            imagenRuleta.style.transition = 'all 7s ease-out';
        }, 50);

        girar.disabled = false;
    }, 7000);
});
limpiar.addEventListener('click', () => {
    //limpiar primero
    saldo1.value="";
    numero1.value="";
    resultado1.value="";
    opcion1.value="";
    monto1.value="";

    //limpiar segundo
    saldo2.value="";
    numero2.value="";
    resultado2.value="";
    opcion2.value="";
    monto2.value="";

    //limpiar tercero
    saldo3.value="";
    numero3.value="";
    resultado3.value="";
    opcion3.value="";
    monto3.value="";

});

function validarApuestaUno() {
    //condicionales para las excepciones del juego del jugador numero 1
    //campos vacios
    if (monto1.value == "" || saldo1.value == "") {
        alert('Campos vacios del jugador 1, para empezar a jugar debe digitar todos los campos.');
        return false;
    }
    //monto válido para apostar
    else if (!monto1.value || monto1.value <= 0 || monto1.value <= 5000) {
        alert('Por favor, ingrese un monto válido para apostar, tiene que ser mayor a $5000.');
        return false;
        //numero válido para apostar
    } else if (numero1.value < 0 || numero1.value > 36) {
        alert('Por favor, ingrese un número válido para apostar, tenga en cuenta los valores que están en la ruleta.');
        return false;
        //condicion del saldo
    } else if (saldo1.value <= 5000 || saldo1.value < monto1.value) {
        monto1.value = 0;
        alert('Saldo insuficiente del jugador 1');
        return false;
        //maximo de dinero para realizar apuestas
    } else if (saldo1.value > 5000000 || monto1.value > 5000000) {
        alert('Solo se pueden realizar apuestas de máximo cinco millones de pesos');
        return false;
    }
    return true;

}

function validarApuestaDos() {
    //condicionales para las excepciones del juego del jugador numero 2
    //campos vacios
    if (monto2.value == "" || saldo2.value == "") {
        alert('Campos vacios del jugador 2, para empezar a jugar debe digitar todos los campos.');
        return false;
    }
    //monto válido para apostar
    else if (!monto2.value || monto2.value <= 0 || monto2.value <= 5000) {
        alert('Por favor, ingrese un monto válido para apostar, tiene que ser mayor a $5000.');
        return false;
        //numero válido para apostar
    } else if (numero2.value < 0 || numero2.value > 36) {
        alert('Por favor, ingrese un número válido para apostar, tenga en cuenta los valores que están en la ruleta.');
        return false;
        //condicion del saldo
    } else if (saldo2.value <= 5000 || saldo2.value < monto2.value) {
        monto2.value = 0;
        alert('Saldo insuficiente del jugador 2');
        return false;
        //maximo de dinero para realizar apuestas
    } else if (saldo2.value > 5000000 || monto2.value > 5000000) {
        alert('Solo se pueden realizar apuestas de máximo cinco millones de pesos');
        return false;
    }
    return true;
}

function validarApuestaTres() {
    //condicionales para las excepciones del juego del jugador numero 3
    //campos vacios
    if (monto3.value == "" || saldo3.value == "") {
        alert('Campos vacios del jugador 3, para empezar a jugar debe digitar todos los campos.');
        return false;
    }
    //monto válido para apostar
    else if (!monto3.value || monto3.value <= 0 || monto3.value <= 5000) {
        alert('Por favor, ingrese un monto válido para apostar, tiene que ser mayor a $5000.');
        return false;
        //numero válido para apostar
    } else if (numero3.value < 0 || numero3.value > 36) {
        alert('Por favor, ingrese un número válido para apostar, tenga en cuenta los valores que están en la ruleta.');
        return false;
        //numero válido para apostar
    } else if (saldo3.value <= 5000 || saldo3.value < monto3.value) {
        monto3.value = 0;
        alert('Saldo insuficiente del jugador 3');
        return false;
        //condicion del saldo
    } else if (saldo3.value > 5000000 || monto1.value > 5000000) {
        alert('Solo se pueden realizar apuestas de máximo cinco millones de pesos');
        return false;
    }
    return true;
}

function calcularResultadoApuestaUno(resultadoRuleta) {
    // Se obtienen los valores de las variables desde los elementos del formulario
    let apuestaSeleccionada = opcion1.value.toLowerCase();
    let montoApostado = parseFloat(monto1.value);
    let numeroApostado = parseInt(numero1.value);

    let colorApostado = null;
    // Si la apuesta seleccionada es 'rojo' o 'negro', se asigna el valor a la variable colorApostado
    if (apuestaSeleccionada === 'rojo' || apuestaSeleccionada === 'negro') {
        colorApostado = apuestaSeleccionada;
    }
    // Comprobación de diferentes condiciones para determinar el resultado de la apuesta
    // Si el resultado de la ruleta es verde y la apuesta seleccionada es verde, o si el número apostado coincide con el resultado de la ruleta
    // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 36
    if ((resultadoRuleta.color.toLowerCase() === 'verde' && apuestaSeleccionada === 'verde') || (resultadoRuleta.numero === numeroApostado)) {
        saldo1.value = parseFloat(saldo1.value) + (montoApostado * 36);
        return montoApostado * 36;
        // Si el número apostado coincide con el resultado de la ruleta y el color también coincide con el color apostado, o si el número es par y la apuesta es 'par' y coincide con el resultado de la ruleta,
        // o si el número es impar y la apuesta es 'impar' y coincide con el resultado de la ruleta
        // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 38

    } else if ((resultadoRuleta.numero == numeroApostado && resultadoRuleta.color.toLowerCase() == colorApostado) || (resultadoRuleta.numero % 2 == 0 && apuestaSeleccionada == 'par' && resultadoRuleta.numero === numeroApostado) ||
        (resultadoRuleta.numero % 2 !== 0 && apuestaSeleccionada == 'impar' && resultadoRuleta.numero === numeroApostado)) {
        saldo1.value = parseFloat(saldo1.value) + (montoApostado * 38);
        return montoApostado * 38;
        // Si el número es par y la apuesta es 'par' y el color no es verde, o si el número es impar y la apuesta es 'impar' y el color no es verde,
        // o si la apuesta es 'rojo' y el color es 'rojo', o si la apuesta es 'negro' y el color es 'negro'
        // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 2

    } else if ((resultadoRuleta.numero % 2 === 0 && apuestaSeleccionada === 'par' && resultadoRuleta.color.toLowerCase() != 'verde') ||
        (resultadoRuleta.numero % 2 !== 0 && apuestaSeleccionada === 'impar' && resultadoRuleta.color.toLowerCase() != 'verde') ||
        (apuestaSeleccionada === 'rojo' && resultadoRuleta.color.toLowerCase() === 'rojo') ||
        (apuestaSeleccionada === 'negro' && resultadoRuleta.color.toLowerCase() === 'negro')) {
        saldo1.value = parseFloat(saldo1.value) + (montoApostado * 2);
        return montoApostado * 2;
        //si el resultado de color de la ruleta corresponde a verde, y si la apuesta seleccionada es diferente a verde
        //el saldo se queda en ceros

    } else if (resultadoRuleta.color.toLowerCase() === 'verde' && apuestaSeleccionada !== 'verde') {
        saldo1.value = 0;
        monto1.value = 0;
        return 0;
        //si no se cumple ninguna de las anteriores, se resta el monto a apostado al saldo total del jugador.

    } else {
        saldo1.value = parseFloat(saldo1.value) - montoApostado;
        return 0;
    }
}

//segunda
function calcularResultadoApuestaDos(resultadoRuleta) {
    // Se obtienen los valores de las variables desde los elementos del formulario
    let apuestaSeleccionada = opcion2.value.toLowerCase();
    let montoApostado = parseFloat(monto2.value);
    let numeroApostado = parseInt(numero2.value);

    let colorApostado = null;
    // Si la apuesta seleccionada es 'rojo' o 'negro', se asigna el valor a la variable colorApostado
    if (apuestaSeleccionada === 'rojo' || apuestaSeleccionada === 'negro') {
        colorApostado = apuestaSeleccionada;
    }
    // Comprobación de diferentes condiciones para determinar el resultado de la apuesta
    // Si el resultado de la ruleta es verde y la apuesta seleccionada es verde, o si el número apostado coincide con el resultado de la ruleta
    // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 36
    if ((resultadoRuleta.color.toLowerCase() === 'verde' && apuestaSeleccionada === 'verde') || (resultadoRuleta.numero === numeroApostado)) {
        saldo2.value = parseFloat(saldo2.value) + (montoApostado * 36);
        return montoApostado * 36;
        // Si el número apostado coincide con el resultado de la ruleta y el color también coincide con el color apostado, o si el número es par y la apuesta es 'par' y coincide con el resultado de la ruleta,
        // o si el número es impar y la apuesta es 'impar' y coincide con el resultado de la ruleta
        // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 38

    } else if ((resultadoRuleta.numero == numeroApostado && resultadoRuleta.color.toLowerCase() == colorApostado) || (resultadoRuleta.numero % 2 == 0 && apuestaSeleccionada == 'par' && resultadoRuleta.numero === numeroApostado) ||
        (resultadoRuleta.numero % 2 !== 0 && apuestaSeleccionada == 'impar' && resultadoRuleta.numero === numeroApostado)) {
        saldo2.value = parseFloat(saldo2.value) + (montoApostado * 38);
        return montoApostado * 38;
        // Si el número es par y la apuesta es 'par' y el color no es verde, o si el número es impar y la apuesta es 'impar' y el color no es verde,
        // o si la apuesta es 'rojo' y el color es 'rojo', o si la apuesta es 'negro' y el color es 'negro'
        // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 2

    } else if ((resultadoRuleta.numero % 2 === 0 && apuestaSeleccionada === 'par' && resultadoRuleta.color.toLowerCase() != 'verde') ||
        (resultadoRuleta.numero % 2 !== 0 && apuestaSeleccionada === 'impar' && resultadoRuleta.color.toLowerCase() != 'verde') ||
        (apuestaSeleccionada === 'rojo' && resultadoRuleta.color.toLowerCase() === 'rojo') ||
        (apuestaSeleccionada === 'negro' && resultadoRuleta.color.toLowerCase() === 'negro')) {
        saldo2.value = parseFloat(saldo2.value) + (montoApostado * 2);
        return montoApostado * 2;
        //si el resultado de color de la ruleta corresponde a verde, y si la apuesta seleccionada es diferente a verde
        //el saldo se queda en ceros

    } else if (resultadoRuleta.color.toLowerCase() === 'verde' && apuestaSeleccionada !== 'verde') {
        saldo2.value = 0;
        monto2.value = 0;
        return 0;
        //si no se cumple ninguna de las anteriores, se resta el monto a apostado al saldo total del jugador.
    } else {
        saldo2.value = parseFloat(saldo2.value) - montoApostado;
        return 0;
    }
}

//tercera
function calcularResultadoApuestaTres(resultadoRuleta) {
    // Se obtienen los valores de las variables desde los elementos del formulario
    let apuestaSeleccionada = opcion3.value.toLowerCase();
    let montoApostado = parseFloat(monto3.value);
    let numeroApostado = parseInt(numero3.value);

    let colorApostado = null;
    // Si la apuesta seleccionada es 'rojo' o 'negro', se asigna el valor a la variable colorApostado
    if (apuestaSeleccionada === 'rojo' || apuestaSeleccionada === 'negro') {
        colorApostado = apuestaSeleccionada;
    }
    // Comprobación de diferentes condiciones para determinar el resultado de la apuesta
    // Si el resultado de la ruleta es verde y la apuesta seleccionada es verde, o si el número apostado coincide con el resultado de la ruleta
    // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 36

    if ((resultadoRuleta.color.toLowerCase() === 'verde' && apuestaSeleccionada === 'verde') || (resultadoRuleta.numero === numeroApostado)) {
        saldo3.value = parseFloat(saldo3.value) + (montoApostado * 36);
        return montoApostado * 36;
        // Si el número apostado coincide con el resultado de la ruleta y el color también coincide con el color apostado, o si el número es par y la apuesta es 'par' y coincide con el resultado de la ruleta,
        // o si el número es impar y la apuesta es 'impar' y coincide con el resultado de la ruleta
        // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 38

    } else if ((resultadoRuleta.numero == numeroApostado && resultadoRuleta.color.toLowerCase() == colorApostado) || (resultadoRuleta.numero % 2 == 0 && apuestaSeleccionada == 'par' && resultadoRuleta.numero === numeroApostado) ||
        (resultadoRuleta.numero % 2 !== 0 && apuestaSeleccionada == 'impar' && resultadoRuleta.numero === numeroApostado)) {
        saldo3.value = parseFloat(saldo3.value) + (montoApostado * 38);
        return montoApostado * 38;
        // Si el número es par y la apuesta es 'par' y el color no es verde, o si el número es impar y la apuesta es 'impar' y el color no es verde,
        // o si la apuesta es 'rojo' y el color es 'rojo', o si la apuesta es 'negro' y el color es 'negro'
        // Se incrementa el saldo y se devuelve el monto apostado multiplicado por 2

    } else if ((resultadoRuleta.numero % 2 === 0 && apuestaSeleccionada === 'par' && resultadoRuleta.color.toLowerCase() != 'verde') ||
        (resultadoRuleta.numero % 2 !== 0 && apuestaSeleccionada === 'impar' && resultadoRuleta.color.toLowerCase() != 'verde') ||
        (apuestaSeleccionada === 'rojo' && resultadoRuleta.color.toLowerCase() === 'rojo') ||
        (apuestaSeleccionada === 'negro' && resultadoRuleta.color.toLowerCase() === 'negro')) {
        saldo3.value = parseFloat(saldo3.value) + (montoApostado * 2);
        return montoApostado * 2;
        //si el resultado de color de la ruleta corresponde a verde, y si la apuesta seleccionada es diferente a verde
        //el saldo se queda en ceros

    } else if (resultadoRuleta.color.toLowerCase() === 'verde' && apuestaSeleccionada !== 'verde') {
        saldo3.value = 0;
        monto3.value = 0;
        return 0;
        //si no se cumple ninguna de las anteriores, se resta el monto a apostado al saldo total del jugador.

    } else {
        saldo3.value = parseFloat(saldo3.value) - montoApostado;
        return 0;
    }
}