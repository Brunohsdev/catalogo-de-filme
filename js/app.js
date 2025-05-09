//Aluno: Bruno Henrique Alves Santos; Turma: 93.313;

const corpo = document.getElementById('body');
const imagem = document.getElementById('imagem-filme');
const btOMacaco = document.getElementById('o_macaco_butao');
const btMinecraft = document.getElementById('minecraft_butao');
const btBabyGirl = document.getElementById('baby_girl_butao');
const btBadBoy = document.getElementById('badboy_butao');
const pDescricao = document.getElementById('texto-descricao-filme');

btOMacaco.onclick = () => {
    imagem.src = 'img/omacaco.jpg';
    pDescricao.textContent = 'O Macaco (2025), dirigido por Osgood Perkins e baseado no conto homônimo de Stephen King, é uma mistura de terror e comédia que explora o absurdo da morte e os traumas familiares. O filme acompanha os gêmeos Bill e Hal (interpretados por Theo James), que, após encontrarem um antigo macaco de brinquedo no sótão de seu pai, testemunham uma série de mortes bizarras e violentas. Tentando se livrar do brinquedo amaldiçoado, eles se afastam, mas o terror retorna décadas depois, forçando-os a confrontar o passado sombrio . A produção é marcada por um humor caótico e irreverente, misturado com cenas de violência extrema, criando um estilo único de "ter-rir" . O elenco também conta com Tatiana Maslany, Elijah Wood e Christian Convery. Lançado nos cinemas brasileiros em 6 de março de 2025, o filme tem duração de 1h38min e é classificado para maiores de 18 anos .';
}
btMinecraft.onclick = () =>{
    imagem.src = 'img/minecraft.jpg';
    pDescricao.textContent = 'A história acompanha quatro personagens — Garrett “The Garbage Man” Garrison (Jason Momoa), Henry (Sebastian Eugene Hansen), Natalie (Emma Myers) e Dawn (Danielle Brooks) — que, após atravessarem um portal misterioso, são transportados para o Overworld, um mundo cúbico e repleto de perigos como Piglins e Zumbis. Para retornarem ao mundo real, eles contam com a ajuda de Steve (Jack Black), um habilidoso construtor que os orienta em sua jornada.';
}
btBabyGirl.onclick = () => {
    imagem.src = 'img/babygirl.jpg';
    pDescricao.textContent = 'Romy Mathis (Nicole Kidman) é uma poderosa CEO que, insatisfeita com seu casamento, se envolve em um relacionamento extraconjugal com Samuel (Harris Dickinson), um estagiário muito mais jovem. À medida que o caso avança, Romy se vê dividida entre sua vida profissional, seu casamento com Jacob (Antonio Banderas) e os intensos desejos provocados pelo romance proibido. O filme aborda temas como poder, identidade e a busca por satisfação pessoal em uma sociedade que frequentemente limita a expressão sexual feminina.';
}
btBadBoy.onclick = () => {
    imagem.src = 'img/badboy.jpg';
    pDescricao.textContent = 'No novo capítulo, os detetives Mike Lowrey (Will Smith) e Marcus Burnett (Martin Lawrence) se veem na lista dos mais procurados do FBI após serem incriminados por um cartel de drogas. Agora, eles precisam unir forças para limpar seus nomes e proteger a reputação do capitão Howard .';
}
