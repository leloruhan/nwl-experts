const perguntas = [
    {
        pergunta: "Qual é o significado da sigla FDM em Impressão 3D?",
        respostas: ["Fabricação de Depósitos Fundidos", "Modelagem de Desenhos Físicos", "Filamento de Deposição Fundida"],
        correta: 2
    },
    {
        pergunta: "Qual é o processo principal utilizado na tecnologia FDM?",
        respostas: ["Sinterização a Laser", "Deposição de Material Fundido", "Estereolitografia"],
        correta: 1
    },
    {
        pergunta: "Que tipo de material é comumente utilizado na impressão 3D por FDM?",
        respostas: ["Resina líquida", "Plástico fundido", "Pó metálico"],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do processo utilizado na impressão 3D SLA?",
        respostas: ["Síntese de Luz Avançada", "Sinterização de Laser Avançada", "Estereolitografia"],
        correta: 2
    },
    {
        pergunta: "Qual é a principal diferença entre FDM e SLA em termos de processo?",
        respostas: ["A fonte de energia utilizada", "O tipo de material utilizado", "A temperatura de operação"],
        correta: 0
    },
    {
        pergunta: "Qual é uma desvantagem comum da tecnologia FDM em comparação com SLA?",
        respostas: ["Alta precisão", "Baixa velocidade de impressão", "Custo elevado"],
        correta: 1
    },
    {
        pergunta: "Qual é uma aplicação comum da tecnologia SLA?",
        respostas: ["Prototipagem rápida", "Impressão de objetos de grande escala", "Produção em massa"],
        correta: 0
    },
    {
        pergunta: "Qual é um benefício da tecnologia SLA em comparação com FDM?",
        respostas: ["Maior variedade de materiais utilizados", "Facilidade de operação", "Baixo consumo de energia"],
        correta: 0
    },
    {
        pergunta: "Qual é uma característica importante da tecnologia FDM?",
        respostas: ["Resolução extremamente alta", "Alta velocidade de impressão", "Camadas visíveis no produto final"],
        correta: 2
    },
    {
        pergunta: "Qual é uma desvantagem da tecnologia SLA em comparação com FDM?",
        respostas: ["Requer peças de suporte", "Baixa resolução", "Limitada variedade de materiais utilizados"],
        correta: 0
    }
];
    const quiz = document.querySelector('#quiz');
    const template = document.querySelector('template');
    const correta = new Set();
    const totalDePerguntas = perguntas.length;
    const mostraAcertos = document.querySelector('#acertos span');
    
    
    for (const p of perguntas){
        const quizP = template.content.cloneNode(true);
        quizP.querySelector('h3').textContent = p.pergunta; // seleciona o h3 e coloca o texto de pergunta no loop
        for(let resposta of p.respostas){
            const dt = quizP.querySelector('dl dt').cloneNode(true); // faça um clone novamente de dt 
            dt.querySelector('span').textContent = resposta; 
            // pegue esse clone e jogue a respostas dentro do span
            const inputSelecionado = dt.querySelector('input');
            
            inputSelecionado.setAttribute('name','pergunta-' + perguntas.indexOf(p)); //input seleciona o ultimo input que tem o mesmo name , 
            //fez isso para conseguir selecionar outras inputs e não desmarcar o que já foi marcado
    
            inputSelecionado.value = p.respostas.indexOf(resposta); // pega o valor de cada resposta para as perguntas por indice
    
            inputSelecionado.onchange = (event) => {
            const estaCorreta = event.target.value == p.correta; // faz uma comparação do valor que eu selecionei do input 
            //com o valor da resposta correta no meu array
    
            correta.delete(p);
            if(estaCorreta){
                correta.add(p);
            }
                mostraAcertos.textContent = correta.size + ' de ' + totalDePerguntas;
            }
            quizP.querySelector('dl').appendChild(dt); // selecione no template o dl e coloque as informações do dl dentro do dt
        }
        quizP.querySelector('dl dt').remove(); // Remove o primeiro input de seleção que apareceu junto com a copia
        //copia do template
        quiz.appendChild(quizP);
    }