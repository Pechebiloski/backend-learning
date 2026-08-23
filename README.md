<div align="center">

# ୨୧ Estudos de Backend

*registro de evolução e prática em desenvolvimento server-side*

⊹ ˚₊ ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ ₊˚ ⊹

![Node.js](https://img.shields.io/badge/Node.js-F2E5D5?style=flat&logo=node.js&logoColor=5B7065)
![JavaScript](https://img.shields.io/badge/JavaScript-FCE1E4?style=flat&logo=javascript&logoColor=5B7065)
![MongoDB](https://img.shields.io/badge/MongoDB-E8F0FE?style=flat&logo=mongodb&logoColor=5B7065)
![Prisma](https://img.shields.io/badge/Prisma-E8DFF5?style=flat&logo=prisma&logoColor=5B7065)

</div>

<br>

### ⊹ Sobre o Repositório

Este espaço funciona como uma coleção de registros do meu aprendizado em **Desenvolvimento Backend**. Como estudante de Ciência da Computação, utilizo este repositório para transformar conceitos teóricos em pequenos experimentos e mini projetos práticos.

Cada pasta representa um estudo ou módulo independente, registrando a evolução contínua da lógica de programação, arquitetura e integração com banco de dados.

<br>

### ୨୧ Estrutura de Pastas

```text
estudos-backend/
├── estudo-01/          # CRUD com Node.js, MongoDB e Prisma ORM
├── estudo-02/          # [Em breve]
└── README.md
```

<div align="center">

# ୨୧ [Estudo 01 — CRUD com Node.js](./estudos-01)

*Integração de API REST com MongoDB via Prisma ORM*

⊹ ˚₊ ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ ₊˚ ⊹

![Node.js](https://img.shields.io/badge/Node.js-F2E5D5?style=flat&logo=node.js&logoColor=5B7065)
![MongoDB](https://img.shields.io/badge/MongoDB-E8F0FE?style=flat&logo=mongodb&logoColor=5B7065)
![Prisma](https://img.shields.io/badge/Prisma_6.19-E8DFF5?style=flat&logo=prisma&logoColor=5B7065)
![HTTP](https://img.shields.io/badge/REST_API-FCE1E4?style=flat&logoColor=5B7065)

</div>

<br>

### ⊹ Objetivo

Entender na prática o fluxo de comunicação de uma API Backend: o recebimento de requisições HTTP, a execução das rotas com parâmetros/filtros e a persistência de dados em um banco NoSQL.

<br>

### ୨୧ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução Backend.
* **JavaScript**: Linguagem base para desenvolvimento da API.
* **MongoDB**: Banco de dados NoSQL para armazenamento dos usuários.
* **Prisma ORM (v6.19)**: Mapeamento de dados e consultas ao banco.
* **Git & GitHub**: Controle de versão e documentação.

<br>

### ⌁ O que foi Desenvolvido

Foi criada uma API funcional com suporte aos quatro métodos HTTP fundamentais para gerenciamento de usuários:

* `GET /usuarios` — Consulta e listagem de usuários, com suporte a filtros de busca.
* `POST /usuarios` — Criação de novos registros de usuários no banco de dados.
* `PUT /usuarios/:id` — Atualização das informações de um usuário existente pelo ID.
* `DELETE /usuarios/:id` — Remoção de um registro de usuário do banco.

<br>

### ˚₊ Conceitos Praticados

- [x] Estruturação básica de rotas em um projeto Node.js.
- [x] Mapeamento de verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`).
- [x] Manipulação de parâmetros de rota (`req.params`) e query params (`req.query`).
- [x] Integração e operações de CRUD usando Prisma ORM.
- [x] Conexão e persistência de dados no MongoDB.

<br>

### ♡ Decisões Técnicas Importantes

> **Ajuste de versão do Prisma ORM:**  
> Durante a configuração inicial do projeto, identificou-se uma incompatibilidade técnica entre a versão `7.x` do Prisma e o MongoDB dentro do ambiente de execução do estudo. A solução adotada foi utilizar explicitamente o **Prisma na versão 6.19**, garantindo a estabilidade e a execução correta de todas as consultas ao banco.

<br>

### ⊹ O que Aprendi

Entendi como os dados trafegam desde o cliente através dos verbos HTTP até chegarem ao banco de dados por meio da abstração de um ORM. A resolução do problema de compatibilidade com a versão do Prisma também contribuiu para compreender a importância do gerenciamento correto de dependências em projetos Node.js.

<br>

### ୨୧ Possíveis Melhorias Futuras

* Implementar validação de dados de entrada nas rotas.
* Adicionar tratamento global de erros para respostas HTTP mais amigáveis.
* Estruturar o projeto seguindo padrões de arquitetura (como Controller e Service).

<br>

---

<div align="center">

*Projeto educacional de estudo individual ♡*

</div>
