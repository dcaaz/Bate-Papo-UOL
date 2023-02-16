# Bate-Papo-UOL

- Esta foi minha terceira experiência com JavaScript, fiz a implementação de um bate-papo totalmente funcional, inspirado no saudoso Bate-Papo UOL. 

## Sobre

Alguns requisitos foram estabelecidos e cumpridos, como: 

- Ao entrar no site, carregar as mensagens do servidor e exibi-las 
- Existem 3 tipos de mensagem:
    - Mensagens de status (**Entrou** ou **Saiu** da sala)
    - Mensagens reservadas (**Reservadamente**)
    - Mensagens normais
- A cada 3 segundos o site re-carrega as mensagens do servidor para manter sempre atualizado
- O chat tem rolagem automática por padrão, ou seja, sempre que novas mensagens forem dicionadas ao final do chat ele scrolla para o final
- As mensagens com Reservadamente só são exibidas se o nome do destinatário for igual ao nome do usuário que está usando o chat (ou senão ele poderia ver as mensagens reservadas para outras pessoas)
- Ao entrar no site, o usuário deverá ser perguntado com um `prompt` seu lindo nome
- Após inserção do nome, este deve ser enviado para o servidor pra cadastrar o usuário
    - Caso o servidor responda com sucesso, o usuário poderá entrar na sala
    - Caso o servidor responda com erro, deve-se pedir para o usuário digitar outro nome, pois este já está em uso
- Enquanto o usuário estiver na sala, a cada 5 segundos o site avisa ao servidor que o usuário ainda está presente, ou senão será considerado que "saiu da sala"
- Ao enviar uma mensagem, esta é enviada para o servidor
        - Caso o servidor responda com sucesso, deve obter novamente as mensagens do servidor e atualizar o chat
        - Caso o servidor responda com erro, significa que esse usuário não está mais na sala e a página é atualizada (e com isso voltando pra etapa de pedir o nome)
- Nesse envio, é informado o remetente, o destinatário e se a mensagem é reservada ou não.


    