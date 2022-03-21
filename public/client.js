function ValidateFormRegister() {
    const password = document.getElementById('password').value;
    const password_confirme = document.getElementById('password-confirme').value;
    const container_login = document.getElementById('container_login');
    if (password != password_confirme) {
        console.log('Erro');
        const errorMessage = document.createElement('p');
        errorMessage.setAttribute('id', 'errorMessage');
        errorMessage.textContent = "Erro ao confirmar a senha";
        container_login.appendChild(errorMessage);
        return false;
    } else {
        const aproveMessage = document.createElement('p');
        aproveMessage.setAttribute('id', 'aproveMessage');
        aproveMessage.textContent = "Aprovado";
        container_login.appendChild(aproveMessage);
    }
};

window.ValidateLogin = async (req,resp) =>{
    const response = await fetch ('/login');
    const data = response.json();
    console.log(data);
    return false;
}


async function getDataValorant() {
    const current_url = window.location.href;
    if (current_url === 'http://localhost:4000/valorant.html') {
        
        const response = await fetch('/valorant');
        const data = await response.json();
        const container = document.createElement('div');
        container.setAttribute('id', 'container');
        document.body.appendChild(container);
        data.data.forEach(element => {

            if (element.displayName == 'Skye') {
                const img = document.createElement('img');
                img.setAttribute('id', 'imgSkye');
                img.src = element.fullPortrait;
                container.appendChild(img);
                container.innerHTML +=
                    `<p> Main character: ${element.displayName}</p>
                <p> Description: ${element.description}</p>
                <p> Abilities: ${element.abilities[0].displayName}, ${element.abilities[1].displayName}, ${element.abilities[2].displayName}, ${element.abilities[3].displayName}</p>
                <p> Rank: PLATINUM 1</p>`



            }
        });
    }
}
getDataValorant();