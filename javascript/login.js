const input = document.querySelector ('.login-input');
const button = document.querySelector ('.login-button');
const form = document.querySelector ('.login-form')

const validateInput = ({ target}) => {
    if(target.value.length > 2) {/*target = o evento que está disparando o input, lenght = tamanho, quantidade de caractere*/ 
        button.removeAttribute('disabled'); // se o input tiver mais de 2 caracteres dele remove o atributo disable
        return; //quando se add o return ele termina a função e não passa para as linhas de baixo
    }
    
    button.setAttribute('disabled', ''); // add o atributo disabled, tem add o atributo e o valor, ms o disabled não preisa de valor
}

const handleSubmit = (event) => {
    event.preventDefault(); //previne comportamento padrão de recarregar a página

    localStorage.setItem('palyer', input.value); // vai salvar no local store o valor que a pessoa digitou no input
    window.location = "pages/game.html"; //  depois direciona a pessoa para outra pagina
}

input.addEventListener('input', validateInput); 
form.addEventListener('submit', handleSubmit); //quando der submit ele ativa a função handleSubmit