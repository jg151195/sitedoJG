function showNumber(num) {
    const numero = document.getElementById('tela');
   numero.innerHTML += num;
}


function resultado() {
    const parag = document.getElementById('tela');
    let texto = (parag.textContent);
    let resultado = eval(texto);
    parag.innerText = parseInt(resultado);
    return parag.innerText;
}

function clean() {
    const clear = document.getElementById('clear');
    const texto = document.getElementById('tela');
    texto.innerHTML = "";
}

function apaga() {
    const clear = document.getElementById('erase');
    const texto = document.getElementById('tela');
    toString(texto);
    texto.textContent = texto.textContent.slice(0, -1);
}