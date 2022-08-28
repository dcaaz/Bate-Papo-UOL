var nome;

function mostrarResposta(resposta) {
    console.log(resposta);
}

function entrarNaSala() {
    nome = prompt("Qual seu nome?");
    const url = 'https://mock-api.driven.com.br/api/v6/uol/participants';
    const dados = { name: nome };
    const resposta = axios.post(url, dados);

    resposta.then((_) => {
        manterConexao();
        mostrarMensagens();
    });
}

function manterConexao() {
    const url = 'https://mock-api.driven.com.br/api/v6/uol/status';
    const dados = { name: nome };
    axios.post(url, dados);

    setTimeout(manterConexao, 5000);
}

function mostrarMensagens() {
    const url = 'https://mock-api.driven.com.br/api/v6/uol/messages';
    const resposta = axios.get(url);
    resposta.then(preencherCaixa);

    setTimeout(mostrarMensagens, 1000);
}

function preencherCaixa(resposta) {
    let mensagens = resposta.data;
    let caixa = document.querySelector('.caixa');

    caixa.innerHTML = '';

    for (let i = 0; i < mensagens.length; i++) {

        let mensagem = mensagens[i];
        let tipo = mensagem.type;

        if (tipo === 'status') {
            caixa.innerHTML += `
                <li class="caixa-dialogo entrar-sair">
                <span class="tempo">(${mensagem.time})</span>
                <b>${mensagem.from}</b>
                ${mensagem.text}
                </li>
            `;
        } else if (tipo === 'message') {
            caixa.innerHTML += `
                <li class="caixa-dialogo">
                <span class="tempo">(${mensagem.time})</span>
                <b>${mensagem.from}</b> para <b>${mensagem.to}</b>:
                ${mensagem.text}
                </li>
            `;
        } else if (tipo === 'private_message') {
            caixa.innerHTML += `
                <li class="caixa-dialogo privado">
                <span class="tempo">(${mensagem.time})</span>
                <b>${mensagem.from}</b> reservadamente para <b>${mensagem.to}</b>:
                ${mensagem.text}
                </li>
            `;
        }
    }
}

function enviarMensagens() {
    let text = document.querySelector('.input').value;
    document.querySelector('.input').value = '';
    const url = 'https://mock-api.driven.com.br/api/v6/uol/messages';
    const dados = {
        from: nome,
        to: 'Todos',
        text: text,
        type: "message",
    };
    const resposta = axios.post(url, dados);
}

entrarNaSala();