const textarea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    if (textoEncriptado) { // Solo si hay un texto encriptado válido
        mensaje.value = textoEncriptado;
        textarea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    if (textoDesencriptado) { // Solo si hay un texto desencriptado válido
        textarea.value = textoDesencriptado;
        mensaje.value = "";
        mensaje.style.backgroundImage = "";
    }
}

function btnBorrar() {
    textarea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = ""; 

}
function encriptar(texto) {
    const regex = /^[a-z\s]+$/;

    
    if (!regex.test(texto)) {
        alert("El texto contiene caracteres no permitidos. Por favor, ingrese solo letras minúsculas y espacios.");
        return "";
    }

    let textoEncriptado = texto.toLowerCase();

    matrizCodigo.forEach(([letra, codigo]) => {
        textoEncriptado = textoEncriptado.replaceAll(letra, codigo);
    });

    return textoEncriptado;
}

function desencriptar(texto) {
    const regex = /^[a-z\s]+$/;

    
    if (!regex.test(texto)) {
        alert("El texto contiene caracteres no permitidos. Por favor, ingrese solo letras minúsculas y espacios.");
        return "";
    }

    let textoDesencriptado = texto.toLowerCase();

    matrizCodigo.forEach(([letra, codigo]) => {
        textoDesencriptado = textoDesencriptado.replaceAll(codigo, letra);
    });

    return textoDesencriptado;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
}

document.getElementById("btn_copiar").addEventListener("click", copiar);
