// Función lógica para calcular el factorial
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// Escuchar el evento clic del botón de la página
document.getElementById("calcularBtn").addEventListener("click", () => {
    const inputElement = document.getElementById("numeroInput");
    const resultadoBox = document.getElementById("resultadoBox");
    const entrada = inputElement.value.trim();

    // Resetear visualización de la caja de resultados
    resultadoBox.style.display = "none";
    resultadoBox.className = "result-box";

    // VALIDACIÓN: Comprobar si está vacío, si no es un número, si tiene decimales o si es negativo
    if (entrada === "" || isNaN(entrada) || Number(entrada) < 0 || !Number.isInteger(Number(entrada))) {
        // Mostrar error en el DOM
        resultadoBox.textContent = "Error: Por favor, ingresa un número entero válido y no negativo.";
        resultadoBox.classList.add("error");
        resultadoBox.style.display = "block";
        
        // Mensaje de error solicitado por consola
        console.error("Error: Entrada de datos inválida.");
        return;
    }

    const numero = Number(entrada);
    const resultado = calcularFactorial(numero);

    // Imprimir por consola solicitado
    console.log(`Entrada: ${numero}`);
    console.log(`Salida (Factorial): ${resultado}`);

    // Imprimir en el DOM de forma estilizada
    resultadoBox.innerHTML = `El factorial de <strong>${numero}</strong> es: <br><span style="font-size: 20px; font-weight: bold;">${resultado}</span>`;
    resultadoBox.classList.add("success");
    resultadoBox.style.display = "block";
});
