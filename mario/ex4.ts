class Funcionario{

    nome: string;
    funcao: string;
    sexo: string;
    folga: boolean;

sinopse(){

console.log(`A lista de funcionários da empresa groovebass é:${ivan.nome}, ${ivan.funcao}, se encontra de folga? ${ivan.folga}, do sexo ${ivan.sexo}.`)
console.log(`${lucy.nome}, ${lucy.funcao}, se encontra de folga? ${lucy.folga}, do sexo ${lucy.sexo}.`)
console.log(`${pedro.nome}, ${pedro.funcao}, se encontra de folga? ${pedro.folga}, do sexo ${pedro.sexo}.`)  

}
}
const ivan = new Funcionario();
ivan.nome = " Ivan"
ivan.funcao = "Programador"
ivan.sexo = "Masculino"
ivan.folga = false

const lucy = new Funcionario();
lucy.nome = " Lucy"
lucy.funcao = "Empresária"
lucy.sexo = "Feminino"
lucy.folga = true

const pedro = new Funcionario();
pedro.nome = " Pedro"
pedro.funcao = "Balconista"
pedro.sexo = "Masculino"
pedro.folga = true

ivan.sinopse()