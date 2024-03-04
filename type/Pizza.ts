export class Pizza{
    sabor: string
    tamanho: number
    preco: number

    constructor(sabor: string, tamanho: number,preco: number){
        this.sabor = sabor
        this.tamanho = tamanho
        this.preco = preco

    }

    infoDosPedidos(){
        console.log(`Preço(R$): ${this.preco.toFixed(2)} \nTamanho(CM): ${this.tamanho} \nSabor: ${this.sabor}`);
        
    }
}

