const relatorio = document.querySelector(".page-relatorio")
const chat = document.querySelector(".chat-assistente")
const openExplicacao = document.querySelector(".open-explicacao")
const msgChat = document.querySelector(".chat");

console.log(msgChat)

function abrirExplicacao(el) {
    const div = el.parentNode;
    const open = div.nextElementSibling;
    return open;
}

function criaDiv() {
    const div = document.createElement('div');
    return div;
}

function criaImg() {
    const img = document.createElement('img');
    return img;
}

function criaSection() {
    const section = document.createElement('section');
    return section;
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function criaH5() {
    const h5 = document.createElement('h5');
    return h5;
}

function limpaChat() {
    while(msgChat.firstChild) {
        msgChat.removeChild(msgChat.firstChild);
    }
}   

function msgAssistenteDicas() {
    const img = criaImg();
    const h5 = criaH5();
    const p = criaP();
    const section = criaSection();
    const div = criaDiv();

    h5.innerText='Olá, Francisco!'
    p.innerText = `Sabemos que você tem uma hamburgueria e, com o Dia das Crianças chegando, queremos te ajudar a bombar nas vendas! Aqui vão algumas dicas que podem fazer a diferença:
    
    1 - Crie um Combo Infantil Irresistível: Monte um combo especial para as crianças, com um hambúrguer menor, batata frita, suco ou refrigerante, e um brinde surpresa. Dá para incluir algo temático, como um brinquedo ou adesivo, para deixar a criançada animada.

    2 -  Decoração Divertida: Que tal dar uma cara nova à sua hamburgueria nesse dia? Use balões, cartazes coloridos e coloque uma playlist animada. Um ambiente festivo pode atrair ainda mais famílias.

    3 - Ofereça Atividades para Entreter: Disponibilize materiais para colorir, jogos de mesa ou até organize uma pequena área com pintura facial. Isso transforma a visita à sua hamburgueria em uma experiência completa para as crianças.

    4 - Promoções Exclusivas: Pense em ofertas especiais, como "Na compra de 2 combos adultos, o combo infantil sai com 50% de desconto" ou "Na compra de 3 combos, a sobremesa é por nossa conta!".

    5 - Parceria com Escolas ou Eventos Locais: Se possível, faça parcerias com escolas ou eventos infantis na sua cidade. Ofereça cupons de desconto ou brindes exclusivos para quem vier da escola ou evento parceiro.

    Aproveite essa data para criar momentos especiais na sua hamburgueria e encantar ainda mais seus clientes!`;

    img.classList.add('foto');
    img.setAttribute('src', '../img/icon-assistant.svg');

    div.classList.add('mensagem');
    div.classList.add('recebida');
    section.classList.add('msg-opcoes');


    div.appendChild(h5);
    div.appendChild(p);

    section.appendChild(img);
    section.appendChild(div);

    msgChat.appendChild(section);
}

function msgAssistente() {
    msgChat.innerHTML = `
             <section class="msg-opcoes ">
                <img class="foto" src="../img/icon-assistant.svg" alt="assistente">
                <div class="mensagem recebida">
                    <p>Olá! Como posso te ajudar hoje?</p>
                    <div class="opcoes">
                        <div class="opcao">Relatorio</div>
                        <div class="opcao">Gerenciamento</div>
                    </div>
                </div>
            </section>
            `
}

function msgUserBoolean() {
    const img = criaImg();

    img.classList.add('foto');
    img.setAttribute('src', '../img/icon-assistant.svg');
    
}

function msgUserRelatorio() {
    const img = criaImg();

    img.classList.add('foto');
    img.setAttribute('src', '../img/icon-assistant.svg');
    
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
            limpaChat();
            msgAssistente();
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

    if(el.classList.contains('assistente-tonia-dicas')) {
        if(chat.classList.contains('active')) {
            chat.classList.remove('active');
            limpaChat();
            msgAssistenteDicas();
        }
    }
})