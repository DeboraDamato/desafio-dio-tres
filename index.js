class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque indefinido';
        }
        console.log(`O heroi com nome de ${this.nome} que tem ${this.idade} anos e é um ${this.tipo} atacou usando ${ataque}`);
    }
}
let oHeroi = new Heroi('Debora', 31, 'ninja');
oHeroi.atacar();