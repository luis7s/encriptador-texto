const resultadoImagen = document.getElementById('resultadoImagen');
const mensajePlaceholder = document.getElementById('mensajePlaceholder');


function resetearEstado() 
{
    let texto = document.getElementById('textIncriptar').value;

    if (!texto) {
        resultadoImagen.src = "./assets/muñeco.png"
        resultadoImagen.style.display = 'block';
        mensajePlaceholder.style.display = 'block';
    }
}

document.getElementById('textIncriptar').addEventListener('input', resetearEstado);



function validarTexto(texto) 
{
    const regex = /^[a-z\s]+$/;
    return regex.test(texto); 
}

function encriptar() 
{

    let texto = document.getElementById('textIncriptar').value;
    let textoEncriptado = "";
    
    if (!validarTexto(texto)) {
        alert("El texto solo puede contener letras minúsculas sin acentos y sin caracteres especiales.");
        return;
    }

    
    for (let i = 0; i < texto.length; i++) {

        if (texto[i] === "e") {
            textoEncriptado += "enter";
        } else if (texto[i] === "i") {
            textoEncriptado += "imes";
        } else if (texto[i] === "a") {
            textoEncriptado += "ai";
        } else if (texto[i] === "o") {
            textoEncriptado += "ober";
        } else if (texto[i] === "u") {
            textoEncriptado += "ufat";
        } else {
            
            textoEncriptado += texto[i];
        }
    }


    document.getElementById('textResultado').value = textoEncriptado;
    if (textoEncriptado)
    {
        resultadoImagen.src = "./assets/muñecoCorrecto.png";
        mensajePlaceholder.style.display = "none";
    }

}

function desencriptar() 
{

    let texto = document.getElementById('textIncriptar').value;
    let textoDesencriptado = texto;

    if (!validarTexto(texto)) {
        alert("El texto solo puede contener letras minúsculas sin acentos y sin caracteres especiales.");
        return;
    }

    
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    document.getElementById('textResultado').value = textoDesencriptado;
    if (textoEncriptado)
        {
            resultadoImagen.src = "./assets/muñecoCorrecto.png";
        }

}

function copiarTexto() 
{
    let texto = document.getElementById('textResultado').value;

    navigator.clipboard.writeText(texto);

    alert("Texto copiado al portapapeles");
}