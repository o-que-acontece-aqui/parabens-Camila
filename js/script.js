var alunos = [
    // INSERIR EM ORDEM ALFABETICA
    // USE O MODELO Q ESTA NO FIM DA ARRAY
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