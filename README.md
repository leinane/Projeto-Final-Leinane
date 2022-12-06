<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png"alt="logo reprograma" width="500">
</h1>

## Projeto Final

Turma Online 18 - Todas em Tech | back-end | Semana 18 | 2022 | Aluna: Leinane Santos da Conceição

## USF SAJ

<div align="center">
  <img src="./assets/hospital.gif">
</div>

Mapeamento das unidade de saúde, da cidade de Santo Antônio de Jesus, Bahia. Neste projeto, irei desenvolver uma API para fazer o mapeamento dos postos de Saúde, da cidade de Santo Antônio de jesus, Bahia. Este projeto tem a finalidade de informar a população sobre o endereço dos postos de saúde atuantes na cidade, os atendimentos disponíveis, os médicos e enfermeiros que trabalham nnas unidades. Para a resolução deste projeto, irei desenvolver uma API RESt, que será conectada com o banco de dados mongobd, onde irá receber os dados dos postos, e de seus funcionários.

### Documentação

Para fazer o cadrastro do banco de dados, utilizei o CRUD.

#### `[GET]`/postos/buscar

Retorna todas unidades-de-saúde do banco de dados

> Resposta: HTTP 200 OK

```json
[
  {
    "_id": "638675e8b4f0e83792e1f68b",
    "nome": "USF Alto Santo Antônio",
    "cnpj": "010203",
    "telefone": "756315654",
    "isIniciativaPrivada": false,
    "medicos_atuantes": ["Dr.Marcos", "Dr.Daniel"],
    "enfermeiros_atuantes": ["Camila", "Marta", "Carol", "Lucas"],
    "serviços_Especializados": [
      "ATENCAO PRIMARIA",
      "IMUNIZACAO",
      "SERVICO DE ATENCAO AO PACIENTE COM TUBERCULOSE",
      "SERVICO DE ATENCAO AO PRE-NATAL, PARTO E NASCIMENTO",
      "SERVICO DE VIGILANCIA EM SAUDE",
      "TELECONSULTORIA"
    ],
    "pessoas_responsaveis": "Direitora Marcia",
    "id": "638675e9b4f0e83792e1f68c",
    "createdAt": "2022-11-29T21:13:13.396Z",
    "updatedAt": "2022-11-29T21:13:13.396Z",
    "__v": 0
  }
]
```

---

#### `[GET]`/postos/buscar/{id}

Rota que retorna uma unidade-de-saúde do id indicado

> Aceita como parâmetro de consulta

| Parâmetro | Descrição   |
| --------- | ----------- |
| id        | id do posto |

> Resposta: HTTP 200 OK

```json
[
  {
    "_id": "6386785eb4f0e83792e1f68e",
    "nome": "USF Urbis III",
    "cnpj": "010304",
    "telefone": "7536324710",
    "isIniciativaPrivada": false,
    "medicos_atuantes": ["Drª.Livia", "Drª.Diana"],
    "enfermeiros_atuantes": ["Ana", "Maria"],
    "serviços_Especializados": [
      "ATENCAO PRIMARIA",
      "IMUNIZACAO",
      "SERVICO DE ATENCAO AO PACIENTE COM TUBERCULOSE",
      "SERVICO DE ATENCAO AO PRE-NATAL, PARTO E NASCIMENTO",
      "SERVICO DE VIGILANCIA EM SAUDE",
      "TELECONSULTORIA"
    ],
    "endereco": {
      "cep": "44435428",
      "rua": "RUA A",
      "numero": "S/N",
      "complemento": " ",
      "referencia": "prox. da academia",
      "estado": "Bahia",
      "cidade": "Santo Antônio de Jesus",
      "bairro": "Urbis 3"
    },
    "instalações": {
      "tipo_Instalação": "Ambulatorial: ODONTOLOGIA, SALA DE CURATIVO, SALA DE IMUNIZACAO, SALA DE ENFERMAGEM (SERVICOS)",
      "descrição": "Clinicas Indiferenciado",
      "leitos": " 0",
      "salas": " 4"
    },
    "pessoas_responsaveis": "Diretora Ana",
    "id": "6386785eb4f0e83792e1f68f",
    "createdAt": "2022-11-29T21:23:42.345Z",
    "updatedAt": "2022-11-29T21:23:42.345Z",
    "__v": 0
  }
]
```

---

#### `[POST]` /postos/create

Cadastra uma unidade-de-saúde

> Resposta: HTTP 201 OK

Exemplo:

```json
{
  "nome": "Urbis 4",
  "cnpj": "010607",
  "telefone": "7",
  "isIniciativaPrivada": false,
  "endereco": {
    "cep": "",
    "rua": "",
    "numero": "S/N",
    "complemento": " ",
    "referencia": "prox. da praça",
    "estado": "Bahia",
    "cidade": "Santo Antônio de Jesus",
    "bairro": "Irma Dulce"
  },
  "medicos_atuantes": ["Dr. Valter", "Dr.Manuel"],
  "enfermeiros_atuantes": ["Aline", "Fernanda", "Antônio"],
  "horario_de_Atendimento": {
    "Segunda-Feira": "08:00 às 17:00 horas",
    "Terça-Feira": "08:00 às 17:00 horas",
    "Quarta-Feira": "08:00 às 17:00 horas",
    "Quinta-Feira": "08:00 às 17:00 horas",
    "Sexta-Feira": "08:00 às 17:00 horas"
  },
  "serviços_Especializados": [
    "ATENCAO PRIMARIA",
    "IMUNIZACAO",
    "SERVICO DE ATENCAO AO PACIENTE COM TUBERCULOSE",
    "SERVICO DE ATENCAO AO PRE-NATAL, PARTO E NASCIMENTO",
    "SERVICO DE VIGILANCIA EM SAUDE",
    "TELECONSULTORIA"
  ],
  "pessoas_responsaveis": "Diretor Pedro",
  "instalações": {
    "tipo_Instalação": "AMBULATORIAL:  ODONTOLOGIA, SALA DE CURATIVO,CLINICAS BASICAS, SALA DE IMUNIZACAO, SALA DE ENFERMAGEM (SERVICOS)",
    "descrição": "CONSULTORIOS MEDICOS",
    "leitos": " 0",
    "salas": " 6"
  }
}
```

---

#### `[PUT]`/postos/atualizar/{id}

Atualiza uma unidade-de-saúde

> Resposta: HTTP 200 OK

```json
[
  {
    "nome": " CentroSaj",
    "cnpj": "093546728",
    "telefone": "75936321256"
  }
]
```

---

#### `[DELETE]`/postos/deletar/ {id}

Deleta uma unidade-de-saude

> É necessário o id da unidade-de-saúde

| Parâmetro | Descricão   |
| --------- | ----------- |
| id        | id do Posto |

> Resposta: HTTP 204 NO CONTENT

```json
{}
```

---

### Arquitetura do projeto - MVC

```
Projeto-Final
📂 API
├─ 📂 src
│  ├─ 📂 controllers
│  │  └─ UsfController.js
│  │  └─ authfController.js
│  │  └─ userController.js
│  ├─ 📂 models
│  │  └─ UsfModel.js
│  │  └─ userSchema.js
|  ├─ 📂 middlewares
│  │  └─ auth.js
│  ├─ 📂 database
│  │  └─ mongoConfig.js
│  ├─ 📂 routes
│  │  └─ UsfRouter.js
│  │  └─ userRoutes.js
│  │  └─ indexRoutes.js
│  └─ app.js
├─ package-lock.json
|_ .env
├─ .env.example
├─ package.json
├─ .gitignore
├─ README.md
├─ vercel.json
└─ server.js

```

### Dependências

| Dependência | Versão |
| ----------- | ------ |
| NodeJs      | >= 14x |
| NPM         | >= 8x  |
| Express     | -      |
| Nodemon     | -      |
| Cors        | -      |
