# DiverSaúde-api
NESTJS


O Nest é uma estrutura para a criação de API, eficientes e escalaveis. Utilizando o JavaScript e construido com o suporte TypeScript.

COMANDOS UTILIZADOS

$ npm i -g @nestjs/cli
$ nest new project-name

COMANDOS PARA RODAR O APP

$ npm run start
$ npm run start:dev

*Implementação do banco e dados PostgreSQL
Postgres é um sistema de gerenciamento de banco de dados objeto-relacional. Sua função principal é armazenar dados de forma segura, para depois recupera-las conforme for solicitado por outros aplicativos de softaware. 

COMANDOS UTILIZADOS

$ npm install --save typeorm pg

*Iniciando uma instância do Postgres no Docker 
Docker é um conjunto de produtos de plataforma que usa virtualização de sistema operacional para entregar pacotes chamados conteineres.

COMANDO UTIIZADO
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

*Autenticação
O recurso de autenticação é pensando como uma miniestrutura em si. Abstraindo o processo em algumas etapas que sera personalizado com base no que for implementado na aplicação.

COMANDOS UTILIZADOS:
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local


*Instalando o Heroku
Sendo uma platarforma de nuvem o Heroku permite implantar, executar e gerenciar aplicativos. 


COMANDOS UTILIZADOS:

$ npm install -g heroku
$ heroku --version
$ heroku login

DEPLOY GIT/HEROKU

COMANDOS UTILIZADOS:

$ git add .
$ git commit -m ""
$ git push heroku main

----------------------

GUIA API DIVERSAUDE

O usuário deve criar um role_id
POST > https://diversaude-api.herokuapp.com/api/v1/role

Fazer o cadastro
POST > https://diversaude-api.herokuapp.com/api/v1/users
passando o role_id criado anteriormente

Logar na aplicação 
POST > https://diversaude-api.herokuapp.com/api/v1/auth/login
Recebendo um Token_acess para consumir as demais rotas

Demais rotas utilizadas 

GET > https://diversaude-api.herokuapp.com/api/v1/users

GET > https://diversaude-api.herokuapp.com/api/v1/role

PATCH > https://diversaude-api.herokuapp.com/api/v1/users

DELETE > https://diversaude-api.herokuapp.com/api/v1/users/ (PASSAR ID USUÁRIO)

GET ONE > https://diversaude-api.herokuapp.com/api/v1/users/ (PASSAR ID USUÁRIO)

Para utilizar o Filtro de busca Profissional, o usuário deve passar a rota GET inserindo os demais campos
GET > https://diversaude-api.herokuapp.com/api/v1/users/?specialty=psicologo&city=Belo horizonte&gender=trans

O usuário que for fazer avaliação do Profissional, deve acessar a rota colocando o id do profissional e a nota no qual escolheu para avaliar
PATCH > https://diversaude-api.herokuapp.com/api/v1/users/evaluate