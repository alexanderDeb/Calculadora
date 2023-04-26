const screen = document.querySelector("#screen-display");
const btnList = document.querySelector("#btn-list");

// declarar las variables para el funcionamiento basico
let numero_1 = "";
let numero_2 = "";
let operador = "";
let resultado;
let interruptor = 0;

// lista de numeros para comparacion con el event.target.textContent
const list_numeros = "0123456789";
// lista de operadores para comparacion con el event.target.textContent
const list_operadores = "+-*/";

// Funcion que realiza la operacion entre numero a y b dependiendo del
// operador
const makeOperation = (numA, numB, oper) => {
  switch (oper) {
    case "+":
      return parseFloat(numA) + parseFloat(numB);
    case "-":
      return parseFloat(numA) - parseFloat(numB);
    case "*":
      return parseFloat(numA) * parseFloat(numB);
    case "/":
      return parseFloat(numA) / parseFloat(numB);
    default:
      if (numA !== undefined && numB == undefined) {
        return numA;
      } else if (numA == undefined && numB == undefined) {
        return "Error";
      }
  }
};

// fucion para el boton AC
const clearScreen = () => {
  // limpiar la pantalla
  screen.value = "";
  // resetear todas las variables
  numero_1 = "";
  numero_2 = "";
  operador = "";
  resultado = "";
  interruptor = 0;
};

// añadir evento de click a todo el contenedor de botones
btnList.addEventListener("click", (event) => {
  // validar si dentro de la lista de botones
  // esta el contenido del boton
  if (list_numeros.indexOf(event.target.textContent) >= 0) {
    // si el interruptor es uno, almancenar en la variable numero 2
    if (interruptor === 1) {
      // asignar contenido de la pantalla a la variable
      numero_2 += event.target.textContent;
      // por el contrario almancear en la variable 1
    } else {
      // asignar contenido de la pantalla a la variable
      numero_1 += event.target.textContent;
    }
    // añadir ese valor a la pantalla
    screen.value += event.target.textContent;
    // sino el valor proveniente del texto del evento
    // no esta en el arreglo de numeros
    // buscarlo en el arreglo de operadores
  } else if (list_operadores.indexOf(event.target.textContent) >= 0) {
    // validar si el interruptor esta en cero
    // para que sea una operacion exitosa
    if (interruptor === 0) {
      // añadir valor a la pantalla
      screen.value += event.target.textContent;
      // activar interruptor para trabajar con el numero 2
      interruptor = 1;
      // añadir operador para realizar la operacion
      operador += event.target.textContent;
      // sino, mostrar un error
    } else {
      alert("Error");
    }
    // si el boton = es clickeado entonces hacer la operacion
    // y ponerlo en la pantalla
  } else if (event.target.textContent === "=") {
    // hacer la operacion
    resultado = makeOperation(numero_1, numero_2, operador);
    // poner el resultado en pantalla
    screen.value = resultado;
    // si el boton clickeado es el AC entonces limpiar la pantalla
  } else if (event.target.textContent === "AC") {
    clearScreen();
  }
});