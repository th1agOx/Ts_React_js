styled components também são componenets então precisão ter a interface do ts


buttonvariant é ua variante de tipagem 

Configuração de Temas :

No css tradicional a existencia de variaveis permitem o cadastro de cores, e etc. Como no arquivo css global 

No styled componenest também, porém controlado por javaScript -> Variavel no default dentro das pastas - styles - themes

Dentro da estilização do styled components (Button.styled.ts) É possível acessar variaveis controladas pelo javascript <- OLHAR LÁ 

O css e a importação das variaveis com as cores ocorrem no javascript

A variavel está envolto de um objeto sendo exportado 
E o css em si dentro também dentro de um objeto exportado, com a referência do arquivo styled-components trazendo a TAG em HTML que 
a estilizaçõa ocorre mais o TypeScript entre <>

Já essa variavel é importada atravel dos elementos css setados indicando que a importação ocorre dentro de uma arrow function 

e alterar esse componenete no APP 

OLHAR A VARIAVEL EM DEFALT
OLHAR O CSS EM BUTTON.TS

-> TIPAGENS DE TEMAS

Com o TS o projeto tem a possibilidade de criar arquivos personalizados 

- @types - styles.d.ts ( SOMENTE codigos em typeScript) arquivo só com tipagem 

-> CSS GLOBAL 

Também não vai ficar com css puro, mas sim envolto ao typescript 

* Lembrando que, esse css in js fica envolto do componente ThemeProvier no APP, componenete importado do styled-components 

declare module cria uma tipagem , para o elemento que for importado nele 

* eslint - padronização de código 

React Router DOM é uma biblioteca aonde cria-se rotas de acesso ao endereço tentado pelo cliente 

Pra cada página da aplicação, uma rota 

* Verificar package.json

    Dependências: Sempre verifique se todas as dependências necessárias estão listadas no package.json. Se uma dependência estiver faltando, você pode adicionar manualmente e depois executar npm install

* Se você encontrar problemas estranhos com dependências, limpar o cache pode ajudar (npm cache clean --force

* é preciso envolver toda a aplicação em react com o componenet teamprovider e com o browserouter

LAYOUTS DE ROTAS

No layout criado - Header - permanecerá fixo nas páginas, todos os componenetes receberam esse layout de rotas

* componente outlet provido do router dom -> é um espaço a ser inserido um conteúdo. Com ele será armazenado cada conteúdo especifico de cada página 

No componente de rota <Route><Route/>, a propriedade path'/' é uma forma de parametro que sujere que todos os outros componentes com esse path sigam o mesmo layout de rota
Ou, também o componenete pode até receber um outro valor dentro de path, seguindo assim um encadeiamento dos layouts de rotas 
Rota pai > rota filha

No react router cada router recebe um caminho path e o component elemente que deve ser renderizado quando esse caminho é acessado .

O caso do index foi uma alternativa para dizer que , ao acessar o caminho da rota pai, as outra rotas devem ser acessadas , ou seja quando acessar a rota pai o componenete Hoem deve ser exibido 

* Lembrete rápido - index arquivo de componenete * style arquivo de estilização 


O diretório node_modules é onde todas as dependências do seu projeto são instaladas. Ele é essencial para qualquer projeto que use Node.js, npm ou yarn, e é particularmente comum em aplicações JavaScript e TypeScript

O arquivo de estilo ( styleed conponents ) Precisa estar separada do arquivo de estrutura do html 

* Como trazer uma lista de susgestão como hover no input, que siga uma linha de parametros de projetos já setados anteriormente 

RESPOSTA = <datalist> que seria uma lista de sugetões para o input com a adição de um list um parametro dentro do input para receber as <options> dentro do <datalist> 