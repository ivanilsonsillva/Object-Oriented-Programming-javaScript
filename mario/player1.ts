/*o que eu tenho? atributos
que coisas eu faço? metodos - comportamento
como eu estou agr? estado

class Player{
    //definindo padrao atributos

    nome: string;
    vidas: number;
    invencivel: boolean;
    crush: Player;
 criando métodos

sinopse(){
 definir estado
console.log(O protagonista do jogo é o ${Mario.nome}
que tem como objetivo salvar a princesa ${peach.nome} )
console.log(A crush do ${Mario.nome}
é a  ${Mario.crush.nome} ) 
console.log(`O protagonista do jogo é o ${Mario.nome}
que tem como objetivo salvar a princesa ${peach.nome} das mãos do ${donkey.nome} `)

}
}
const Mario = new Player();
Mario.nome = " Mario"
Mario.vidas = 3;
Mario.invencivel = true;

const peach = new Player();
peach.nome = "Peach";
peach.vidas = 3;
peach.invencivel = false;
Mario.crush = peach;

const donkey = new Player();
donkey.nome = "Donkey";
donkey.vidas = 3;
donkey.invencivel = false;
donkey.crush = Mario;



Mario.sinopse()
*/