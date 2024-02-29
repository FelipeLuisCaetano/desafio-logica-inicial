class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch(this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = '';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

let mago = new Heroi('merlim', 30, 'mago');
mago.atacar();

let guerreiro = new Heroi('konan', 25, 'guerreiro');
guerreiro.atacar();

let monge  = new Heroi('avatar', 35, 'monge');
monge.atacar();

let ninja  = new Heroi('naruto', 18, 'ninja');
ninja.atacar();