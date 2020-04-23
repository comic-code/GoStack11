# GoStack11
*Anotações e possíveis devaneios sobre o curso GoStack 11.0 da Rocketseat :)*

## <a name="i">Índice</a>

02. [Fase 2](#2)
    - 2-1 - [Node.js](#2-1)
        - 2-1-1 [Conceitos Node.js](#2-1-1)
        - 2-1-2 [Conceitos API REST](#2-1-2)
        - 2-1-3 [HTTP Codes](#2-1-3)
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