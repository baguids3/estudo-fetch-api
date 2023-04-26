### Fetch API Study

Estudo dos conceitos básicos de fetch API e requisições HTTP

O Website possui um formulário com três elementos <input>(nome, email e senha), e ao preencher e clicar no botão "Submit", os dados do formulário são enviados no corpo de uma requisição http para uma API RestFul(https://localhost:7777/signup), onde é gerado um id(cuuid) e a criptografia da senha(bcrypt). Então os dados(id, nome, email e a senha criptografada são retornados na resposta da requisição http, onde são exibidos no site.

**Tecnologias usadas:**

- HTML, CSS and JavaScript para o website
- Node.js, Typescript and Fastify para a API

**Instalação:**

Para rodar a aplicação, clone o projeto usando o seguinte comando no console:
```
git clone https://github.com/baguids3/estudo-fetch-api
```
Então, adentre a pasta do projeto usando o comando:
```
cd estudo-fetch-api

cd api
```

E para instalar os pacotes node, use o comando:
```
npm install
```
E então para rodar o servidor, digite o seguinte comando:
```
npm run dev
```

Prontin, agora abra o arquivo ``ìndex.html`` na raiz do projeto e teste a aplicação 😁
