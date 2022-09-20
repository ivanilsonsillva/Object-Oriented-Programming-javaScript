class Eletronico{

    nome: string;
    garantia: number;
    modelo: string;
    preco: number;

sinopse(){

console.log(`o eletrônico selecionado:${iphone.nome}, modelo: ${iphone.modelo}, preço: ${iphone.preco} reais, com garantia de ${iphone.garantia} meses.`)   

}
}
const iphone = new Eletronico();
iphone.nome = " Iphone"
iphone.garantia = 6
iphone.modelo = "13 pro max"
iphone.preco = 5500


iphone.sinopse()