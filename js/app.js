const relatorio = document.querySelector(".page-relatorio")
const chat = document.querySelector(".chat-assistente")
const openExplicacao = document.querySelector(".open-explicacao")

function criaDiv() {
    const div = document.createElement('div');
    return div;
}

function abrirExplicacao(el) {
    const div = el.parentNode;
    const open = div.nextElementSibling;
    return open;
}

document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;

    if(el.classList.contains('relatorio')) {
        if(relatorio.classList.contains('active')) {
            relatorio.classList.remove('active');

        } else {
            relatorio.classList.add('active');
        }
    }

    if(el.classList.contains('assistente-tonia')) {
        if(chat.classList.contains('active')) {
            chat.classList.remove('active');
            relatorio.classList.add('active');
        } else {
            chat.classList.add('active');
        }
    }

    if(el.classList.contains('open-explicacao')) {
        const open = abrirExplicacao(el);

        if(open.classList.contains('active')) {
            open.classList.remove('active');
        } else {
            open.classList.add('active');  
        }
    }
})