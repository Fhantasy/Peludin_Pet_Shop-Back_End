## Projeto Peludin Pet Shop - Back End

Esse é o front end do projeto de estudo no qual criei um site de Pet Shop com um front end feito com Next.js e um back end separado usando Node.js e um banco de dados PostgreSQL.

## Notas

FEITO COM PROPÓSITO DE ESTUDO

Não há implementado metodos de pagamento, conexão com banco ou correios

Uso Typescript e para estilização Bootstrap e Sass

Feito com Node.js

Utilizando AdminJS para fazer o painel do administrador
Bcrypt para criptografar as senhas de usuários no banco de dados
Json Web Token para gerar um token de autentificação
Nodemailer para envio de email de contato

## Tabelas

![](public/images/peludinTable.png)

## Rotas

POST /auth/register - Registrar usuário
POST /auth/login - Logar usuário gerendo um token de autentificação

GET /categories - Obtem todas as categorias
GET /categories/:id - Obtem uma categoria pelo id

GET /products/featured - Obtem os produtos em destaque
GET /products/all - Obtem todos os produtos
GET /products/search - Obtem os produtos pesquisados
GET /products/:id - Obtem um produto pelo id

GET /users/current - Obtem o usuário atual
PUT /users/current - Altera dados do usuário
PUT /users/current/password - Altera a senha do usuário

GET /users/current/adress - Obtem o endereço do usuário
POST /users/current/adress - Cria o endereço do usuário
PUT /users/current/adress - Altera o endereço do usuário

POST /purchases - Cria uma compra
GET /purchases/all - Obtem todas as compras do usuário
GET /purchases/:id - Obtem uma compra pelo id

POST /contact/send-email - Envia um email de contato
