# Data Lovers

## Índice


* [1. Resumo do projeto](#2-resumo-do-projeto)
* [2. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [3. Considerações gerais](#4-considerações-gerais)
* [4. Critérios mínimos de aceitação do
  projeto](#5-critérios-mínimos-de-aceitação-do-projeto)


***




## 1. Resumo do projeto


Neste projeto, construimos uma página web para visualizar um conjunto (set) de dados que se adeque às necessidades de seu usuário.
Temos uma página web que permite visualizar dados, filtrá-los, ordená-los e fazer algum cálculo agregado. Por cálculo agregado nos referimos aos diversos cálculos que podem ser feitos com os dados para mostrar a informação mais relevante para os usuários (médias, valores máximos e mínimos, etc).

Tudo isso utilizando HTML semântico, CSS responsivo e JavaScript puro.

Neste projeto você **construirá uma _página web_ para visualizar um _conjunto
(set) de dados_** que se adeque às necessidades de seu usuário.

Como entregável final terá uma página web que permita **visualizar dados,
filtrá-los, ordená-los e fazer algum cálculo agregado**. Por cálculo agregado
nos referimos aos diversos cálculos que podem ser feitos com os dados para
mostrar a informação mais relevante para os usuários (médias, valores máximos e
mínimos, etc).

Para este projeto trazemos uma série de dados de _temáticas diferentes_ para que
você explore e decida com qual delas deseja trabalhar. Escolhemos
especificamente estes conjuntos de dados porque cremos que se adequem bem a esta
etapa de sua aprendizagem.

Uma vez que você defina sua área de interesse, busque entender quem é seu
usuário e o que exatamente ele necessita saber ou ver, para que assim possa
construir a interface que o ajude a interagir e entender melhor os dados.

Este são os dados que propomos:

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json): Este
  conjunto mostra a lista de campeões do jogo League of Legends
  (LoL).
  - [Pesquisa com jogadores de LoL](src/data/lol/README.pt-BR.md)


## 3. Objetivos de aprendizagem

Etapas iniciais para o desenvolvimento da interface
Pesquisa com usuários
Foram realizadas pesquisas com jogadores de LOL, utilizando as mesmas perguntas expostas no readme da Laboratória. Que foram:

Quem são os usuários principais do produto? Usuários que pretendem começar a jogar e não possuem informações sobre as regas e personagens, também usuários jogadores do LOL e que desejam informações sobre os campeões, para que possam escolher melhor com qual deles jogar. ‌

Quais são os objetivos dos usuários com relação ao produto? Apresentar informações sobre as características dos campeões, que podem ser filtrados por tipo (lutador, assassino, mago, atirador e suporte), fornecer a classificação de acordo com o nível de ataque/defesa/magia/dificuldade, por grupo ou todos (de acordo com o interesse do usuário). ‌

Quais são os dados mais relevantes que querem ver na interface e por quê? Filtragem por tipo de campeão e classificação do poder. Para que o usuário conheça os personagens e possa escolher de acordo com sua preferência.

Quando utilizam ou utilizariam o produto? Antes de iniciar sua partida no jogo.

##Protótipo

##FIGMA: https://www.figma.com/file/pqvbFZD8qBVOlUvfKwasMb/Data-Lovers---LOL?type=design&node-id=112-2&mode=design&t=QuZpvlhhrxi7wpDl-0


##Desenvolvemos o protótipo de baixa fidelidade para telas de computadores e tablets utilizando as ferramentas do figma
![image](https://github.com/emilainesantos/SAP011-data-lovers-LOL/assets/84165229/140f6a9b-ba9a-4f41-9f73-878b976cf525)


## PROTOTIPO  - WEB

![image](https://github.com/emilainesantos/SAP011-data-lovers-LOL/assets/84165229/3533b62b-3d31-4321-b3fe-3193ba9d6079)
![image](https://github.com/emilainesantos/SAP011-data-lovers-LOL/assets/84165229/3bfb5f02-b8e4-4071-b478-8e43aec19e85)


## PROTOTIPO - APP

![image](https://github.com/emilainesantos/SAP011-data-lovers-LOL/assets/84165229/0173aed5-b598-460a-aeb6-b9ef8bca327a)
<br>
![image](https://github.com/emilainesantos/SAP011-data-lovers-LOL/assets/84165229/6939d853-7378-4002-8fba-99e53c60646c)
<br>
![image](https://github.com/emilainesantos/SAP011-data-lovers-LOL/assets/84165229/27031494-cc98-44d2-8582-800b04274368)









## 4. Considerações gerais

A lógica do projeto foi implementada somente em JavaScript (ES6), HTML e CSS. Estas funções são [puras], assim, através de funções puras e independentes do DOM que foram usadas a partir do arquivo src/main.js, ao carregar a página e a cada vez que o usuário interage com a interface (cliques, seleções, filtros, ordenação, etc).

Implementação da interface de usuário (HTML/CSS/JS)
A implementação contém:

Exibição dos dados em interface em cards;
Permite ao usuário interagir com a interface para obter as informações que necessita, através de filtros de buscas por nome ou tipo do campeão, bem como por classificação dos poderes.
É responsiva, ou seja, deve ser visualizada sem problemas a partir de diversos tamanhos de tela: celulares, tablets, notebooks, etc.
src/main.js
Utilizamos src/main.js para inserir todos os códigos relacionados a exibição dos dados na tela, utilizando a estrutura condicional switch  para tradução de palavras da API, templade string e o método map() para obter dados da API. Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos

Para carregar a fonte de dados da API:

import lolData from "./data/lol/lol.js"
Assim, criamos a variável lolData disponível em src/main.js.

Para carregar os filtros:

import { buscaTag, buscaNome, ordenarCampeoes, calculoAgragado } from "./data.js"
src/data.js
O coração deste projeto é a manipulação de dados através de arrays e objetos.

Utilizamos este arquivo para armazenar toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):

function buscaTag: esta função recebe os dados e nos retorna os campeões filtrados por tipo (assassinos, lutadores, magos, atiradores, suportes, tanques ou todos eles), no processamento dos dados utilizamos o método filter.

function buscaNome: esta função retorna ao usuário o nome do campeão digitado, com auxilio do método filter.

function ordenarCampeoes: responsável por ordenar os campeões de acordo com nível de ataque, defesa, magia e dificuldade, que podem ser ordenados de forma crescente ou descrecente Para esta função utilizamos o método sort.

function calculoAgragado: realiza o cálculo percentual do tipo de campeão selecionado pelo usuário (assassinos, lutadores, magos, atiradores, suportes)

src/data
A API do projeto foi extraída desta pasta, onde estão os dados de diferentes fontes. Utilizamos o arquivo com a extensão .js.

Testes unitários
Os teste unitários das funções implementadas no arquivo /test/data.spec.js, cobriram 100% dos statements, functions e lines e branches.

Ferramentas
Git
GitHub
GitHub Pages
Node.js
Organização do trabalho
Para a organização do projeto utilizamos o Trello para a construção de um roadmap, fracionando cada etapa, definindo metas e prioridades.

No planejamento de sprint foram definidas as metas a serem atingidas para a próxima sprint, enquanto na daily eram definidas as prioridades das tarefas para o dia.
