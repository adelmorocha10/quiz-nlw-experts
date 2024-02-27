// criando um array com todas as perguntas e colocando na Const perguntas
const perguntas = [
    {
        pergunta: "Qual é a função principal do JavaScript?",
        respostas: [
            "Executar consultas SQL",
            "Estilizar páginas HTML",
            "Controlar o comportamento da página no lado do cliente",
            "Gerenciar bancos de dados",
            "Criar animações em CSS"
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma variável em JavaScript?",
        respostas: [
            "Uma função",
            "Um operador",
            "Um tipo de dado",
            "Um valor constante",
            "Um identificador para armazenar dados"
        ],
        correta: 4
    },
    {
        pergunta: "Como se declara uma função em JavaScript?",
        respostas: [
            "definirFuncao()",
            "function minhaFuncao()",
            "nova Funcao()",
            "criarFuncao()",
            "declarar.funcao()"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "Um modelo de objeto",
            "Uma função embutida",
            "Um formato de arquivo",
            "Uma ferramenta de depuração"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' ao declarar variáveis?",
        respostas: [
            "Nenhuma, são sinônimos",
            "let é para variáveis globais, const é para variáveis locais",
            "const é imutável, let pode ser alterada",
            "let é apenas para números, const é para strings",
            "const é obsoleta, let é preferido"
        ],
        correta: 3
    },
    {
        pergunta: "O que é uma closure em JavaScript?",
        respostas: [
            "Uma animação CSS",
            "Uma variável global",
            "Uma função aninhada que tem acesso às variáveis de sua função pai",
            "Um tipo de loop",
            "Uma propriedade do objeto Math"
        ],
        correta: 3
    },
    {
        pergunta: "Como você faz um loop 'for' em JavaScript?",
        respostas: [
            "loopPara()",
            "paraCadaItem()",
            "repetir()",
            "for (inicialização; condição; incremento)",
            "executarVezes()"
        ],
        correta: 4
    },
    {
        pergunta: "O que é JSON em JavaScript?",
        respostas: [
            "Um tipo de dado para armazenar imagens",
            "Uma linguagem de programação",
            "Um formato de dados que é fácil de ler e escrever para humanos e fácil de interpretar e gerar para máquinas",
            "Um método de ordenação de arrays",
            "Uma função para executar consultas SQL"
        ],
        correta: 3
    },
    {
        pergunta: "O que é AJAX em JavaScript?",
        respostas: [
            "Uma biblioteca de animações",
            "Um método de manipulação de strings",
            "Uma técnica assíncrona para enviar e receber dados do servidor sem recarregar a página",
            "Um tipo de variável",
            "Um framework para construção de interfaces gráficas"
        ],
        correta: 3
    },
    {
        pergunta: "O que é o método 'addEventListener' usado para fazer em JavaScript?",
        respostas: [
            "Adicionar uma nova propriedade a um objeto",
            "Criar uma nova variável",
            "Anexar um manipulador de eventos a um elemento HTML",
            "Remover um elemento do DOM",
            "Executar uma consulta SQL"
        ],
        correta: 3
    },
];

//selecionando todo o documento HTML e colocando na const quiz
const quiz = document.querySelector('#quiz');

//selecionando a tag template que e filha da const document e colocando na const template
const template = document.querySelector('template');

const corretas = new Set()

//para saber o total de perguntas que tem
const totalDePerguntas = perguntas.length;

//para vereificar os acertos
const mostrarTotal = document.querySelector('#acertos span');

//mudar o texto do span
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;


//loope ou laco de repeticao
for(const item of perguntas) {

    //selecionando o conteudo da const template e clonando para a const quisItem
    const quizItem = template.content.cloneNode(true);

    //selecionando e mudando o texto da tag <h3> dentro do quizItem pelo texto item.pergunta
    quizItem.querySelector('h3').textContent = item.pergunta;
    
    //outro laco pra criar as alternativas
    for (const resposta of item.respostas){
        //clonando a tag <dt> e atribuindo a const dt
        const dt = quizItem.querySelector('dl dt').cloneNode(true);

        //selecionando e alterando o texto da tag <span> para o primeiro array de item.respostas primeira alternativa, 
        dt.querySelector('span').textContent = resposta;

        //Muda o atibuto name do input para que cada pergunta tenha sua bolinha de selecao 
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));

        //muda o atributo value 
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        //verifica se a input selecionado da correto
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            //Para atualizar o contador
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }


        //criando um filho dentro da tag <dl> com a const dt com o texto alterado para a prineira alternativa
        quizItem.querySelector('dl').appendChild(dt);
    };

    //removendo a tag dt que tem o texto "resposta A"
    quizItem.querySelector('dl dt').remove();

    //coloca a pergunta na tela
    quiz.appendChild(quizItem);
};
