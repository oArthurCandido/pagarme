# pagarme

Para rodar a aplicação utilize o comando $env:DEBUG='myapp:*'; npm start dentro do diretorio raiz.

Na pasta lib, o arquivo pagarme define as configurações das requisições.

Na pasta routes, o arquivo compras tem os scripts para envio das requisições.

Na pasta raiz o arquivo bodyCompras possui o corpo da requisição que será enviada através do postman.

No postman, com a aplicação rodando, cole o conteúdo do bodyCompras no body da requisição, e faça um POST para:
http://localhost:3000/ecommerce-api/v1/compras .

Você receberá um status ok, compra realizada e um ID, copie o id e faça um GET para: localhost:3000/ecommerce-api/v1/compras/coleoIDaqui/status não deixe de colar o ID.

