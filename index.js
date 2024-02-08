const perguntas = [
    {
        pergunta: "Qual é o nome do mapa principal em League of Legends?",
        respostas: ["Rift do Invocador", "Acampamento Inimigo", "Arena das Batalhas"],
        correta: 0
    },
    {
        pergunta: "Quantos jogadores estão em cada time em uma partida padrão de League of Legends?",
        respostas: ["4", "5", "6"],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do recurso usado para comprar itens durante uma partida?",
        respostas: ["Ouro", "Diamantes", "Gold"],
        correta: 0
    },
    {
        pergunta: "Quem é conhecido como o 'Coração de Freljord' em League of Legends?",
        respostas: ["Ashe", "Braum", "Lissandra"],
        correta: 1
    },
    {
        pergunta: "Qual é a rota que geralmente é defendida por um único campeão em League of Legends?",
        respostas: ["Meio", "Topo", "Selva"],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do evento anual de campeonato mundial de League of Legends?",
        respostas: ["Challenger Series", "Worlds", "All-Stars"],
        correta: 1
    },
    {
        pergunta: "Qual é o objetivo principal de cada equipe em League of Legends?",
        respostas: ["Destruir a base inimiga", "Matar campeões inimigos", "Coletar buffs"],
        correta: 0
    },
    {
        pergunta: "Quem é conhecido como o 'Exemplar da Luz' em League of Legends?",
        respostas: ["Lux", "Garen", "Jarvan IV"],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do monstro épico que aparece na selva em League of Legends?",
        respostas: ["Baron Nashor", "Dragão Ancião", "Herald"],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do estúdio responsável pelo desenvolvimento de League of Legends?",
        respostas: ["Blizzard Entertainment", "Riot Games", "Valve Corporation"],
        correta: 1
    },
    {
        pergunta: "Qual é a sintaxe correta para comentários em JavaScript?",
        respostas: ["// Este é um comentário", "/* Este é um comentário */", "<!-- Este é um comentário -->"],
        correta: 1
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: ["let", "var", "variable"],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: ["print()", "console.log()", "echo()"],
        correta: 1
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: ["function = myFunction()", "function:myFunction()", "function myFunction()"],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para comparar igualdade em JavaScript?",
        respostas: ["==", "===", "!=",],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um condicional em JavaScript?",
        respostas: ["if i = 5 then", "if (i == 5)", "if i == 5"],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: ["push()", "append()", "addToEnd()"],
        correta: 0
    },
    {
        pergunta: "Como você acessa o último elemento de um array chamado 'myArray'?",
        respostas: ["myArray[last]", "myArray.pop()", "myArray[myArray.length - 1]"],
        correta: 2
    },
    {
        pergunta: "Qual é a saída do código: console.log(typeof([]))?",
        respostas: ["array", "object", "string"],
        correta: 1
    },
    {
        pergunta: "O que o método 'toUpperCase()' faz em JavaScript?",
        respostas: ["Converte uma string para minúsculas", "Converte uma string para maiúsculas", "Inverte uma string"],
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