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
    box.onclick = handleClick;                        //Quando usuário clicar em algum card chama a função
    document.querySelector(".game").appendChild(box); //Pendurar box na div principal(game)
}

//Função para verificar, se o usário selecionou somente dois cards
function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen"); //Quando card for clicado é criado uma classe = "boxOpen"
        openCards.push(this);
    }
    if(openCards.length == 2){         //Condição para checar se os cards são iguais
        settimeout(checkMatch,500);
    }
}

function checkMatch(){}

