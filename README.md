# taskOrganizerAPI

## Sobre

taskOrganizerAPi é uma aplicação simples na qual é possivel criar, deletar ou editar tarefas e definir um usuario para a mesma. A API foi desenvolvida inteiramente em TypeScript.

## Como rodar a aplicação?

1. Clone esse repositório
2. Instale todas as dependências

```bash
npm i
```

3. Crie um banco de dados no PostgreSQL com o nome que desejar.
4. Configure o arquivo `.env` usando, como exemplo, o arquivo `.env.example` 

5. Alimente o banco de dados criado com o `dump.sql`

6. Rode o back-end em ambiente de desenvolvimento:

```bash
npm run start
```

## Documentação da API

#### Retorna todas as tasks

```http
  GET /task
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da task |
| `task`      | `string` | **Obrigatório**. Titulo da task |
| `description`      | `string` |  Descrição da task |
| `day`      | `string` | **Obrigatório**. Dia da tarefa (AAAA-MM-DD) |
| `responsible`      | `string` | **Obrigatório**. nome do responsavel |
| `isComplete`      | `boolean` | **Obrigatório**. Booleano para marcar como completa |
| `createdAt`      | `date` | **Obrigatório**. data de criação |

#### Retorna a task buscada

```http
  GET /task?id=${id-da-task}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da task |
| `task`      | `string` | **Obrigatório**. Titulo da task |
| `description`      | `string` |  Descrição da task |
| `day`      | `string` | **Obrigatório**. Dia da tarefa (AAAA-MM-DD) |
| `responsible`      | `string` | **Obrigatório**. nome do responsavel |
| `isComplete`      | `boolean` | **Obrigatório**. Booleano para marcar como completa |
| `createdAt`      | `date` | **Obrigatório**. data de criação |

#### Criar uma nova task

```http
  POST /task
```
Exemplo do body da criação das task:
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `task`      | `string` | **Obrigatório**. Titulo da task |
| `description`      | `string` |  Descrição da task |
| `day`      | `string` | **Obrigatório**. Dia da tarefa (AAAA-MM-DD) |
| `responsible`      | `string` | **Obrigatório**. iD do responsavel |

#### Atualiazar informações da task ja criada

```http
  PUT /task/${id-da-task}
```
Exemplo do body para atualiazar uma task:
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `task`      | `string` | **Obrigatório**. Titulo da task |
| `description`      | `string` |  Descrição da task |
| `day`      | `string` | **Obrigatório**. Dia da tarefa (AAAA-MM-DD) |
| `responsible`      | `string` | **Obrigatório**. iD do responsavel |

#### Atualiazar isComplete de uma task

```http
  PATCH /statusUpdate/${id-da-task}
```
A enviar a requisição para a rota o parametro isComplete sera alterado para true ou false dependendo do seu estado atual.

#### Deletar uma task

```http
  DELETE /deleteTask/${id-da-task}
```
A enviar a requisição para a rota a task com o id enviado sera ddeletada.

#### Retorna todos os usuarios

```http
  GET /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do usuario |
| `name`      | `string` | **Obrigatório**. nome do usuario |
| `createdAt`      | `date` | **Obrigatório**. data de criação|


#### Retorna o usuario buscado

```http
  GET /users?id=${id-o-usuario}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do usuario  |
| `name`      | `string` | **Obrigatório**. Nome do usuario |
| `createdAt`      | `date` | **Obrigatório**. data de criação |


#### Criar um novo usuario

```http
  POST /users
```
Exemplo do body da criação do usuario:
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do usuario |

