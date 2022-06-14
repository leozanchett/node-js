console.log('Olá mundo');

const somar = function s(a, b) {
    return a + b;
}

var res = somar(1, 2);
console.log(res);

var nome = 'leo';
nome.toUpperCase();
console.log(nome);

let x = 0;
//console.log(x++); = 0
console.log(++x); // = 1


const inventores = [];
inventores.push('Ada Lovelace');
inventores.push('Grace Hopper');
inventores.push('Marie Curie');
inventores.push('Carl Friedrich Gauss');
inventores.push('Nikola Tesla');

inventores.forEach(function(inventor) {
   console.log(inventor);
});

const animais = [
    {
        "nome": "gato",
        "tamanho": "pequeno",
        "peso": 5
    },
    {
        "nome": "cachorro",
        "tamanho": "pequeno",
        "peso": 10
    },
    {
        "nome": "leão",
        "tamanho": "médio",
        "peso": 150
    },
    {
        "nome": "elefante",
        "tamanho": "grande",
        "peso": 5000
    }
]

let nomes_animais = animais.map((animal, index, animais) => {
    console.log(animal.nome);
    console.log(index);
    console.log(animais);
});
