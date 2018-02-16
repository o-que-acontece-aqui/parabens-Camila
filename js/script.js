var alunos = [
    // INSERIR EM ORDEM ALFABETICA
    // USE O MODELO Q ESTA NO FIM DA ARRAY
    andrea = {
        nome: 'Andrea',
        texto: 'Parabéns pelo seu dia! Espero que essa pequena homenagem reflita uma parte de uma retribuição mais do que ' +
        'merecida a uma pessoa extremamente dedicada e preocupada em ajudar os outros. Tenho certeza de que todo o engajamento ' +
        'em nos fazer aprender de verdade só esconde uma personalidade incrível e uma pessoa muito boa! Parabéns por ser essa ' +
        'pessoa/professora! Não desista de ser assim :) E parabéns (mais uma vez) pelo seu dia!',
    },
    
    dani = {
        nome: 'Dani',
        texto: 'CAMILAAAAAA PARABÉINSSS MEUUUU &#9829;&#9829;&#9829; hahahahha' +
            'Espero que seu dia tenha sido tão incrível quanto a pessoa que vc é :) aaaa sou péssima pra escrever essas mensagens, ' +
            'mas de qualquer maneira preciso agradecer demaissss você ser nossa professora ! ' +
            'Não falo da boca pra fora quando digo que você é uma dentre os melhores professores que tive da vidaaaa, não somente em termos de didática e saber lecionar, ' +
            'mas são pouquíssimos com a paixão que você demonstra e preocupação em nos fazer entender de verdade. ' +
            'E mesmo fora esse aspecto, já te admiro demais como pessoa! Um mulherão da porra hahahahah não creio ainda que você trabalha, faz mestrado ' +
            'e ainda prepara nossas aulas aaaaa quero ser igual você quando crescer KKKKKKKKK' +
            'Sério, obrigada por ser essa referência feminina tão foda para nós nesse curso &#9829; e mesmo se der tudo errado no projeto final (hehe), '+
            'ter entrado no codeXP já terá valido a pena por ter te conhecido!'
    },

    flavia = {
        nome:'Flavia',
        texto:'Camila, feliz aniversário! Desejo a você saúde, alegrias e que você consiga realizar todos os seus sonhos. Parabéns! :)',
    },
    
    mara = {
        nome: 'Mara',
        texto: 'Professora daora aluno n chora! Eu queria agradecer muito ao apoio que vc tem dado em '+
        'minha vida, juntamente com o Edu é claro, que realmente superou minha expectativa com '+
        'relação a esse curso. Eu não esperava encontrar um exemplo feminino na área de tecnologia '+
        'tão forte e com um jeito tão bondoso e engraçado de lidar com as situações, a '+
        'competência em ensinar e saber a hora de seguir ou parar que me deixou impressionada '+
        'realmente, fora as atividades externas que realiza e isso parece n interferir. Parabéns!!! '+
        'Realmente hoje é um dia para ser comemorado!', 
    },
    // MODELO ABAIXO>>>
    aluno = {
        nome:'Lorem',
        texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit dolores minus optio ullam sit labore, incidunt harum illum. Beatae quae molestiae distinctio officiis asperiores id. Perferendis hic nulla veniam.',
    },
];

var secao = document.getElementById('agradecimentos');
var template = "";
for(var posicao = 0; posicao<alunos.length; posicao++){
    template +='<div class="agradecimento">'+
                    '<h1 class="agradecimento__titulo">document.getElementById('+alunos[posicao].nome+')</h1>'+
                    '<p class="agradecimento__texto">'+alunos[posicao].texto+'</p>'+
                '</div>';
    secao.innerHTML = template;
}