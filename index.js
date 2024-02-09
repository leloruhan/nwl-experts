const perguntas = [
    {
        pergunta: "Qual é uma das principais aplicações da impressão 3D na odontologia?",
        respostas: ["Produção de brinquedos", "Criação de modelos anatômicos", "Fabricação de roupas"],
        correta: 1
    },
    {
        pergunta: "Que tipo de material é comumente utilizado na impressão 3D de modelos dentários?",
        respostas: ["Resina fotossensível", "Madeira", "Metal"],
        correta: 0
    },
    {
        pergunta: "Qual é uma das vantagens da impressão 3D na odontologia em comparação com métodos tradicionais?",
        respostas: ["Maior tempo de produção", "Menor personalização", "Precisão e personalização"],
        correta: 2
    },
    {
        pergunta: "Como a impressão 3D pode ser utilizada na fabricação de próteses dentárias?",
        respostas: ["Para criar peças de baixa qualidade", "Para produzir peças padrão", "Para criar próteses personalizadas"],
        correta: 2
    },
    {
        pergunta: "Que tecnologia de impressão 3D é mais comumente utilizada na odontologia?",
        respostas: ["SLS", "SLA", "FDM"],
        correta: 1
    },
    {
        pergunta: "Qual é uma das principais limitações da impressão 3D na odontologia?",
        respostas: ["Alta precisão", "Restrições de materiais e cores", "Baixo custo"],
        correta: 1
    },
    {
        pergunta: "O que é um scanner intraoral na odontologia?",
        respostas: ["Um dispositivo para limpeza dos dentes", "Um equipamento para fazer radiografias", "Um aparelho para digitalizar a estrutura dos dentes"],
        correta: 2
    },
    {
        pergunta: "Qual é o principal benefício da digitalização de modelos dentários na impressão 3D?",
        respostas: ["Facilidade de armazenamento e reprodução", "Alta complexidade", "Baixa precisão"],
        correta: 0
    },
    {
        pergunta: "O que é um guia cirúrgico na odontologia?",
        respostas: ["Um instrumento para medir a pressão sanguínea", "Um dispositivo para monitorar os batimentos cardíacos", "Um auxiliar de precisão para cirurgias dentárias baseadas em modelo 3D"],
        correta: 2
    },
    {
        pergunta: "Qual é um dos desafios da impressão 3D na odontologia?",
        respostas: ["Baixa personalização", "Regulação e certificação", "Fácil acessibilidade"],
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