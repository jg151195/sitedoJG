function getNumber(id) {
    return Number(id);
}

var botao = document.getElementById('calc').addEventListener('click', (ev) => {
    ev.preventDefault();
    var sexo = document.getElementById('sexo').value;
    var idade = document.getElementById('idade').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var nivelTrabalho = document.getElementById('nivel_trabalho').value;
    var textoTrabalho = document.getElementById('nivel_trabalho').name;
    var resultado = document.getElementById('form');
    var cal = 0;
    if(idade == "" || peso == "" || altura == ""){
        console.log("erro");
    }
    else{
    sexo === "mulher" ? cal = 655 + (9.6 * getNumber(peso)) + (1.8 * Math.round(Math.round(getNumber(altura)))) - (4.7 * getNumber(idade)) : cal = 66 + (13.7 * getNumber(peso)) + (5 * getNumber(altura)) - (6.8 * getNumber(idade));
    
    console.log(idade);

    function nivTrabalho() {
        switch (getNumber(nivelTrabalho)) {
            case 1.2:
                cal = cal * 1.2;
                break;
            case 1.375:
                cal = cal * 1.375;
                break;
            case 1.55:
                cal = cal * 1.55;
                break;
            case 1.725:
                cal = cal * 1.725;
                break;
            case 1.9:
                cal = cal * 1.9;
                break;
        }
        return Math.round(cal);
    }
    resultado.innerHTML += `<div id="resultado">
    <p>Metabolismo Basal: ${Math.round(cal)}</p><br> <p> Calorias necessárias para manter o peso: ${nivTrabalho()}
    </div>
    
   `
   document.querySelector('form').reset();
}
})