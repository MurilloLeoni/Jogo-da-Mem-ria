//Variável tipo constante Array com emojis, que vão ser as figuras para encontrar os pares
const emojis = [
    "👌",
    "👌",
    "😜",
    "😜",
    "😂",
    "😂",
    "🎉",
    "🎉",
    "😎",
    "😎",
    "👀",
    "👀",
    "🤑",
    "🤑",
    "🤡",
    "🤡",
];
//Array das cartas que o usuário escolheu para virar
let openCards = [];

//Se o número gerado por Math.random() for maior que 0.5, retorne 2; caso contrário, retorne -1.Deixando as cartas embaralhadas
let randomCards = emojis.sort(()=>(Math.random() > 0.5) ? 2 : -1);


for(let i = 0; i < emojis.length; i++)
{
    let box = document.createElement("div");          //Criação dinamicamente de uma caixa "div"
    box.className = "item";                           //Associando "div" para a class = "item"
    box.innerHTML = randomCards[i];                   //Guarda os elementos da array na box aleatoriamente
    document.querySelector(".game").appendChild(box); //Pendurar box na div principal(game)
}

