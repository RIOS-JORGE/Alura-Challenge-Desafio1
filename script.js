// variables

let input = document.getElementById("text");
let botonEncriptar = document.querySelector(".botonEncriptar");
let botonDesencriptar = document.querySelector(".botonDesencriptar");
let mensajeEncontrado = document.querySelector(".mensajeEncontrado");
let muñeco = document.querySelector(".muñeco");
let ingresaTexto = document.querySelector(".ingresaTexto");
let botonCopiar = document.querySelector(".botonCopiar");

let letraA = "ai";
let letraE = "enter";
let letraI = "imes";
let letraO = "ober";
let letraU = "ufat";


// funciones

let encriptar = function () {
  if (input.value == "") {
    mensajeEncontrado.textContent = "Ingrese un texto";
    mensajeEncontrado.className = "mensajeEncontrado";
    ingresaTexto.textContent =
      "Ingresa el texto que deceas encriptar o desencriptar";
    muñeco.style.display = "inherit";
    botonCopiar.style.display = "none";
    input.focus();
  } else {
    let textoEncriptado = input.value;

    textoEncriptado = textoEncriptado.replace(/e/gi, letraE);
    textoEncriptado = textoEncriptado.replace(/i/gi, letraI);
    textoEncriptado = textoEncriptado.replace(/a/gi, letraA);
    textoEncriptado = textoEncriptado.replace(/o/gi, letraO);
    textoEncriptado = textoEncriptado.replace(/u/gi, letraU);

    mensajeEncontrado.textContent = textoEncriptado;
    mensajeEncontrado.className = "mensajeEncriptado";
    ingresaTexto.textContent = "Texto encriptado";
    muñeco.style.display = "none";
    botonCopiar.style.display = "inherit";
    input.value = "";
    input.focus();

    console.log(textoEncriptado);
  }
};

let desencriptar = function () {
  if (input.value == "") {
    mensajeEncontrado.textContent = "Ingrese un texto";
    mensajeEncontrado.className = "mensajeEncontrado";
    ingresaTexto.textContent =
      "Ingresa el texto que deceas encriptar o desencriptar";
    muñeco.style.display = "inherit";
    botonCopiar.style.display = "none";
    input.focus();
  } else {
    let textoDesencriptado = input.value;

    textoDesencriptado = textoDesencriptado.replace(/enter/gi, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/gi, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/gi, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/gi, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/gi, "u");

    mensajeEncontrado.textContent = textoDesencriptado;
    mensajeEncontrado.className = "mensajeEncriptado";
    ingresaTexto.textContent = "Texto desencriptado";
    muñeco.style.display = "none";
    botonCopiar.style.display = "inherit";
    input.value = "";
    input.focus();

    console.log(textoDesencriptado);
  }
};

let copiar = function () {
  navigator.clipboard.writeText(mensajeEncontrado.innerText);
};


// listeners

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);
