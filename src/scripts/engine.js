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
        setTimeout(checkMatch, 500);
    }
    console.log(openCards);
}

//Função para verificar se os cards são iguais
function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){ //se são iguais é adicionado a classe = "boxMatch"
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");         //se não são iguais é removido a classe = "boxOpen"
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []; //resetar o vetor para passar denovo pela condição

    if(document.querySelectorAll(".boxMatch").length === emojis.length) //Seleciona todos que tem boxMatch e compara com tamanho de emojis, se for igual o usuário vence.
    {
        alert("Você venceu!");
        return;
    }
}

const state = {
    view: {
        timeLeft: document.querySelector("#time-left"),
    },
    values:{
        currentTime: 45,
    },
    actions:{
        countDownTimerId: setInterval(countDown, 1000),
    }
};

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0){
        alert("Game Over! Acabou o tempo");
    }
}

