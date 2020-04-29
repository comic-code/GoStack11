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

    - 2-2 - [...](#2-2)
    - 2-3 - [...](#2-3)
    - 2-4 - [...](#2-4)

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

### **COnteúdo da requisiçãp**

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