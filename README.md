# GoStack11
*Anotações e possíveis devaneios sobre o curso GoStack 11.0 da Rocketseat :)*

## <a name="i">Índice</a>

02. [Fase 2](#2)
    - 2-1 - [Node.js](#2-1)
        - 2-1-1 [Conceitos Node.js](#2-1-1)
        - 2-1-2 [Conceitos API REST](#2-1-2)
        - 2-1-3 [HTTP Codes](#2-1-3)
        - 2-1-4 [Criando projeto Node](#2-1-4)
        - 2-1-5 [Aplicação Funcional](#2-1-5)
        - 2-1-6 [Middlewares](#2-1-6)

    - 2-2 - [React](#2-2)
        - 2-2-1 [Conceitos React](#2-2-1)
        - 2-2-2 [Configurando Projeto React do zero](#2-2-2)
        - 2-2-3 [Componentização](#2-2-3)
        - 2-2-4 [Propriedades](#2-2-4)
        - 2-2-5 [Estado e Imutabilidade](#2-2-5)
        - 2-2-6 [Importando CSS e Imagens](#2-2-6)
        - 2-2-7 [Listando projetos da API](#2-2-7)
        - 2-2-8 [Cadastrando projetos](#2-2-8)

    - 2-3 - [React Native](#2-3)
    - 2-4 - [TypeScript](#2-4)

****
# <a name="2">Fase 2</a>

## <a name="2-1-1">O que é Node.js?</a>

- **JavaScript** no back-end;
    - Não lidamos com eventos do usuário final;
    - Rotas e integrações;
    - Plataforma (não linguagem);
    - Construído em cima da V8;
    - COmparável a PHP / Ruby / Python / Go;

### **O que é o NPM?**

- Instala bibliotecas de terceiros;
- Fornece bibliotecas;
- Comparáveis:
    - Composer do PHP;
    - Gems do Ruby;
    - PIP do Python;

### **Características do Node**

- Arquitetura Event-Loop
    - Baseada em Eventos (Rotas);
    - Call Stack (Pilha de Eventos);
- Node Single-Thread;
    - C++ por trás com libuv;
    - Background Threads;
- Non-Blocking I/O;

### **Frameworks**

- ExpressJS como base;
    - Estrutura aberta;
    - Ótimo para iniciar (microframework);
    - Micro-serviços;

- Frameworks opinados (produtivo);
    - **AdonisJS**;
    - NestJS;

****

## <a name="2-1-2">Conceitos API REST</a>

### **Como funciona?**

- Fluxo da requisição e resposta;
    - Requisição feita por um cliente;
    - Reposta retornada através de uma estrutura de dados;
    - Cliente recebe resposta e processa resultado;
- As rotas utilizam métodos HTTP:
    - GET - http://api.com/*users*
    - POST - http://api.com/*users* 
    - PUT - http://api.com/*users*/**1**
    - DELETE - http://api.com/*users*/**1**

> Método HTTP  
> Recurso / Rota  
> Parâmetro

### **Benefícios**
- Múltiplos Clientes (front-end), mesmo back-end;
- Protocolo de comunicação padronizado;
    - Mesma estrutura para web / mobile / API púbica;
    - Comunicação com serviços externos;

### **JSON (Estrutura GLOBAL)**

```json
{
    "user": {
        "name": "Fábio José",
        "senha": "password",
        "email": "email@gmail.com"
    }
}
```

### **Conteúdo da requisição**

GET http://api.com/*company*/**1**/*users* **?page=2**

**company e users** - Route  
**1** - Route Params  
**?page=2** - Query Params

***

POST http://api.com/*company*/**1**/*users*

```json
{
    "user": {
        "name": "Fábio José",
        "senha": "password"
    }
}

{
    "Locale": "pt_BR"
}
```

**Body** (Apenas POST/PUT)  
**Headers** (Ex: Locale) - Informações adicionais

> Ultilizamos Body ao invés dos Query Params para não poluir a URL e não mostrar campos sensíveis.

****

## <a name="2-1-3">HTTP Codes</a>

- **1xx** - Informativo;

- **2xx** - Sucesso;
    - **200** - SUCCESS;
    - **201** - CREATED;

- **3xx** - Redirecionamento;
    - **301** - MOVED PERMANENTLY;
    - **302** - MOVED;

- **4xx** - Erros do Cliente;
    - **400** - BAD REQUEST;
    - **401** - UNAUTHORIZED;
    - **404** - NOT FOUND; 

- **5xx** - Erros do Servidor;
    - **500** - INTERNAL SERVER ERROR;


[Voltar para o índice](#i)

****

## <a name="#2-1-4">Criando projeto Node</a>

```console
yarn init -y
```

### Express

É um conjunto de ferramentas para trabalhar com rotas.

```console
yarn add express
```
> Um servidor HTTP consegue ouvir requisições e retornar respostas.

### Métodos HTTP

- **GET** - Buscar informações do back-end
- **POST** - Criar uma informação no back-end
- **PUT/PATCH** - Alterar uma informação no back-end(PATCH = Especifico)
- **DELETE** - - Deletar uma informação no back-end

```js
app.get('/projects', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

// Mesmo recurso 'projects'
app.post('/projects', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

// Utilizado um id
app.put('/projects/:id', (req, res) => {
    return res.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

// Também utiliza um id
app.delete('/projects/:id', (req, res) => {
    return res.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});
```

### Tipos de parâmetros

São formas do front-end enviar algum tipo de informação.

## **Query Params** - Filtros e paginação.
> /projects?title=React&dev=Fabio

```js
const query = req.query;
```
**Desestruturando**:
```js
const { title, dev } = req.query
```

## **Route Params** - Identificar recursos (Atualizar/Deletar)

> /projects/:id
```js
const params = req.params;
```
**Desestruturando**
```js
const { id } = req.params;
```

## **Request Body** - Conteúdo na hora de criar ou editar um recurso
> Vem através de JSON

```js
const body = req.body;
```
Por padrão o express não interpreta JSON, é preciso configurar isso.
```js
app.use(express.json());
```
> É necessário que isso venha antes das rotas

## <a name="2-1-5">Aplicação Funcional</a>

Usaremos **uuidv4** para criar um id universal:

```console
yarn install uuidv4
```
importamos e utilizamos no POST:
```js
const { uuid } = require('uuidv4');
const projects = [];
...
app.post('/projects', (req, res) => {

    const { title, owner } = req.body;
    const project = { id: uuid(), title, owner };

    // Enviamos para o array de projetos    
    projects.push(project);

    return res.json(project);
});
```
 
 **PUT:**
```js
app.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title, owner } = req.body;
    
    // Verificando se o projeto existe
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return res.status(400).json({ error: 'Project not found' });

    }

    // Objeto com novas informações
    const project = {
        id,
        title,
        owner,
    }

    // Substituindo
    projects[projectIndex] = project;

    return res.json(project);
});
```

**DELETE**
```js
app.delete('/projects/:id', (req, res) => {
    const { id } = req.params;

    // Verificando se o projeto existe
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return res.status(400).json({ error: 'Project not found' });
    }

    // Removendo
    projects.splice(projectIndex, 1);
    
    return res.status(204).send();
});
```
****
## <a name="2-1-6">Middlewares</a>

É um **interceptador** de requisições e pode:

- Interromper totalmente a requisição;
- Alterar dados da requisição;

```js
function logRequests(req, res, next) {
    const { method, url } = req;

    const logLabel = `[${method.toUpperCase()}] ${url}`

    console.log(logLabel);
}

app.use(logRequests); // Aplica em todas as rotas
```
>Interrompe totalmente a requisição, pois não foi utilizado o next

```js
return next(); // Próximo middleware
```

Caso você queira utilizar apenas em uma rota:
```js
app.get('/projects', logRequests,(req, res) => {
```
> Você também pode utilizar quantos middlewares quiser, adicionando em sequência

Middlewares são bem utilizados para validações, para verificar se os dados mandados estão no formato correto:

```js
const { uuid, isUuid } = require('uuidv4');
...
function validadeProjectId(req, res, next) {
    const { id } = req.params;
    
    if(!isUuid(id)) {
        return res.status(400).json({ erro: 'Invalid project ID.' })
    }
    
    return next();
}
...
app.put('/projects/:id', validadeProjectId, (req, res) => {
    ...
}
```

E por ultimo a ultima forma de usar Middlewares:
```js
app.use('/projects/:id', validadeProjectId);
```
>Todas as rotas com o recurso acima passará por esse middleware.

[Voltar para o índice](#i)

****

# <a name="2-2-1">O que é React?</a>

- Biblioteca para construção de interfaces;
- Utilizado para construção de Single-Page Applications;
- Todo ecosistema é sim um framework;
- Tudo fica dentro do JavaScript;
****
- **React** - Se refere a biblioteca de construção de interfaces, que é utilizada tanto no RJS quanto no RN.
- **ReactJS** - Se refere ao comportamento do React no Browser;
- **React Native** -  Soma do React com outra biblioteca que lida com elementos nativos;

## Vantagens:

- Organização do código;
    - Componentização - Dividir partes do códigos em componentes qu etem funcionalidades especificas;
- Divisão de responsabilidades;
    - Back-end: Regra de negócio;
    - Front-end: Inteface;
- Uma API, múltiplos clientes;
- Programação declarativa;

## JSX
JavaScript com XML:

- Escrever HTML dentro do JavaScript;
- Com React podemos criar nossos próprios elementos;

## Babel / Webpack

- Browser não entende esse código;
- O Babel converte nosso código JS de uma forma que o browser entenda;
****
- Webpack possui várias funções:
    - Criação do bundle, arquivo com todo código da aplicação;
    - Ensina ao JavaScript como importar arquivos CSS, imagens e etc;
    - Live reaload com Webpack Dev Server;

****

# <a name="2-2-2">Configurando projeto Reactjs do zero</a>

## Configurando Babel

```console
yarn add react react-dom
```
>React-dom é o react para web.

- Babel - Transpilar (converter) código do React para um código que o browser entenda.
- Webpack - Para cada tipo de arquivo (.js .css .png) será convertido o código de maneira diferente.
****
- Loaders - Babel-loader, CSS-loader, Image-loader, etc;

```console
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
```  

Na raiz do projeto será criado um arquivo chamado **babel.config.js**:

```js
module.exports = {
    presets: [
        '@babel/preset-env',   //Converte o código de um JS modero para um JS mais antigo, caso necessário;
        '@babel/preset-react'  //Adiciona funcionalidades do React nessa conversão
    ]
}
```
> Essa configuração é padrão e pode ser utilizada em todo projeto React;
****

```console
yarn add @babel/cli
```
> É uma interface de terminal para "converter" JS moderno

## Configurando Webpack

Em **webpack.config.js** será configurando o primeiro arquivo da aplicação e alguns loaders



```js
const path = require('path'); // Para não ter conflito de caminho (windows usa a barra invertida por exemplo)

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [ // Cada um desses objetos represeta um loader diferente
            {
                test: /\.js$/,
                exclude: /node_modules/, //Não passará pelo processo do Babel
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```
> Em resumo: Sempre que for precisar de um arquivo js, que não estiver na pasta node_modules, será transpilado pelo babel-loader.

```console
yarn add babel-loader
```


```console
yarn add webpack-dev-server -D
```

```js
...
devServer: {
    contentBase: path.resolve(__dirname, 'public')
},
...
```
Diz para o webpack onde está localidado os arquivos públicos da aplicação

```console
yarn webpack-dev-server --mode development
```
> Deixa a aplicação rodando e atualiza automaticamente

****

## <a name="2-2-3">Componentização</a>

É dividir pedaços da aplicação em componentes, botões, cabeçalhos etc, que conseguem ser aproveitados diversas vezes.

**JSX** - HTML dentro do JavaScript:

```js
import React from 'react';
import { render } from 'react-dom';

render(<h1>Hello Friend!</h1>, document.getElementById('app'));
```
****

Arquivos JS que contenham componentes tem a letra maiúscula.

App.js:
```js
import React from 'react';

function App() {
    return <h1>Hello World</h1>
}

export default App;
```

index.js:
```js
import React from 'react';
import { render } from 'react-dom';

import App from './App';

render(<App />, document.getElementById('app'));
```

### Sempre que tiver código JSX será necessário importar o React

### No React não é possível ter um elemento abaixo do outro sem que exista algo ao redor:

Conceito de fragment é basicamente um element HTML sem nada, para que não interfira na DOM:

```js
<>
    <Header />   
    <Header />
</>
```

****

## <a name="2-2-4">Propriedades</a>

É alguma informação que podemos passar de um componente pai para um componente filho.
> Tanto faz o nome da propriedade

```js
<Header title="Homepage" />   
<Header title="Projects" />
```

```js
export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}
```
Repare em *props* que foi utilizado para recuperar a propriedade title.
> Sempre que precisamos usar JS novamtente dentro do HTML basta utilizar chaves

Também é possível fazer um ***Desestruturação*** do código:

```js
export default function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}
```

### A propriedade **children**:

```js
return (
    <>
        <Header title="Homepage">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </Header>
           
        <Header title="Projects">
            <ul>
                <li>3</li>
                <li>2</li>
                <li>1</li>
            </ul>
        </Header>
    </>
)
```
****
```js
export default function Header({ title, children }) {
    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    );
}
```
> Sempre que usar o children será acessado o conteúdo dentro do componente.

## <a name="2-2-5">Estado e Imutabilidade</a>


*.map()* - Percorre todo o objeto e retorna alguma coisa.
```js
<ul>
    {projects.map(project => <li key={project}>{project}</li>)}
</ul>
```

Quando fazemos uma interação no React, percorrendo uma array por exemplo e mostrando os itens em tela, o React precisa que você identifique no **elemento maior nível** uma propriedade chamada ***key***, no nosso caso usaremos o próprio título do projeto, por enquanto.
****

### **Estado**

```js
import React, { useState } from 'react';
```

useState retorna um array com 2 posiçoes:

- 1 - A variável com o seu valor inicial;
- 2 - Função para atualizarmos esse valor;

```js
const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
```

### **Imutabilidade**

Precisamos sempre recriar a informação com as alterações que queremos.

```js
function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`)
    
    // Percorre todo array e copia
    setProjects([...projects, `Novo projeto ${Date.now()}`])

    console.log(projects);
}
```

****

## <a name="2-2-6">Importando CSS e imagens</a>

```console
yarn add style-loader css-loader
```

Será necessário criar uma nova regra para um loader no webpack.config.js:
```js
{
    test: /\.css$/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
    ]
}
```

Por que utilizar 2 loaders?

- **css-loader** - Irá ler o arquivo css e interpretar suas importações (imagens, etc)
- **style-loader** - Injeta o css no html

Para importar o arquivos css:
```js
import './App.css';
```

****

```console
yarn add file-loader
```
O file loader será utilizado por carregar arquivos para nossa aplicação.

Criando a regra no webpack.config.js:

```js
{
    test: /.*\.(gif|png|jpe?g)$/i,
}
```
O **i** vem insensitive

>Vale lembrar que toda configuração feita no webpack.config.js será necessário um reset no servidor.

Importando e chamando a imagem:
```js
import backgroundImage from './assets/bc.jpg';
...
<img src={backgroundImage} width={500} />
```
## <a name="2-2-7">Listando projetos da API</a>

```console
yarn add axios
```

O axios será responsável por chamadas de API, por conectar o front-end com o back-end.
```js
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3333"
});

export default api;
```
Exportando:
```js
import api from './services/api';
```

### useEffect

Usaremos sempre que uma informação for **alterada** ou apenas para disparar funções quando o componente for exibido em tela.

```js
import React, { useState, useEffect } from 'react';
...
useEffect(() => {
    api.get('projects').then(res => {
        console.log(res);
    });
}, []);
```
> Vale lembrar que async await não funciona no useEffect

### CORS

Toda vez que o front-end vai se conectar com o back-end, temos algumas técnicas de segurança para evitar que front-ends não autorizados se conectem com o mesmo para obter esses dados, então no back-end:

```console
yarn add cors
```

Importando e utilizando:
```js
const cors = require('cors');
app.use(cors()); // Irá permitir que qualquer front-end se conecte ao nosso front-end
```

### De volta ao front-end
```js
const [projects, setProjects] = useState([ ]);
useEffect(() => {
    api.get('projects').then(res => {
        setProjects(res.data);
    });
}, []);

...
<ul>
    {projects.map(project => <li key={project.id}>{project.title}</li>)}
</ul>
```
****

## <a name="2-2-8">Cadastrando projetos</a>

```js
function handleAddProject() {
    api.post('projects', {
        title: `Novo projeto ${Date.now()}`,
        owner: 'Fábio José'
    });
}
```

Agora será necessário atualizar a listagem.
```js
async function handleAddProject() {
     
    const res = await api.post('projects', {
        title: `Novo projeto ${Date.now()}`,
        owner: 'Fábio José'
    });

    const project = res.data;

    setProjects([...projects, project]);

    }
```

Será necessário instalar um plugin no babel para que o **async await** funcione:

```console
yarn add @babel/plugin-transform-runtime -D
```

E no babel.config.js:
```js
module.exports = {
    presets: [
        '@babel/preset-env',   //Converte o código de um JS modero para um JS mais antigo, caso necessário;
        '@babel/preset-react'  //Adiciona funcionalidades do React nessa conversão
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}
```

****

[Volte ao indice](#indice)

****