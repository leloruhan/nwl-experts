const perguntas = [
    {
        pergunta: "Qual é uma das principais desvantagens da tecnologia FDM em relação à SLA?",
        respostas: ["Custo mais alto", "Menor variedade de materiais", "Menor precisão"],
        correta: 2
    },
    {
        pergunta: "Em qual processo de impressão 3D são utilizados filamentos de material?",
        respostas: ["FDM", "SLA", "SLS"],
        correta: 0
    },
    {
        pergunta: "O que significa a sigla SLA na impressão 3D?",
        respostas: ["Síntese de Luz Avançada", "Sinterização de Laser Avançada", "Estereolitografia"],
        correta: 2
    },
    {
        pergunta: "Qual é a principal característica da tecnologia SLA?",
        respostas: ["Baixo custo", "Alta velocidade de impressão", "Alta precisão de detalhes"],
        correta: 2
    },
    {
        pergunta: "Como é chamado o processo de fusão de camadas de pó para criar objetos na impressão 3D?",
        respostas: ["Fusão por Laser", "Fusão Seletiva a Laser", "Fusão de Materiais"],
        correta: 1
    },
    {
        pergunta: "Qual é uma das principais limitações da tecnologia FDM em termos de precisão?",
        respostas: ["Baixa resolução de camadas", "Alta velocidade de impressão", "Variedade de materiais"],
        correta: 0
    },
    {
        pergunta: "Qual é um dos materiais mais comumente utilizados na tecnologia SLA?",
        respostas: ["Plástico ABS", "Resina fotossensível", "Nylon"],
        correta: 1
    },
    {
        pergunta: "Qual é uma das principais vantagens da tecnologia SLS em relação à FDM?",
        respostas: ["Maior precisão", "Custo mais baixo", "Possibilidade de uso de uma ampla gama de materiais"],
        correta: 2
    },
    {
        pergunta: "Qual é o principal benefício da tecnologia FDM em comparação com a SLA?",
        respostas: ["Alta precisão", "Baixo custo de manutenção", "Facilidade de uso"],
        correta: 1
    },
    {
        pergunta: "Qual é uma das principais desvantagens da tecnologia SLA?",
        respostas: ["Baixa resolução", "Alto custo de materiais", "Baixa velocidade de impressão"],
        correta: 1
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