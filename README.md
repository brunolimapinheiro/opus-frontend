<div align="center">

<code><img height="27" src="https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg" alt="react"></code>
<code><img height="27" src="https://github.com/tandpfun/skill-icons/raw/main/icons/TypeScript.svg" alt="typescript"></code>
<code><img height="27" src="https://github.com/tandpfun/skill-icons/raw/main/icons/Vite-Dark.svg" alt="vite"></code>
<code><img height="27" src="https://github.com/tandpfun/skill-icons/raw/main/icons/MaterialUI-Dark.svg" alt="material-ui"></code>
<code><img height="27" src="https://github.com/tandpfun/skill-icons/raw/main/icons/Docker.svg" alt="docker"></code>

<div align="center">
<h1>Opus Frontend</h1>
Documentação oficial do projeto "Opus Frontend", a interface responsável por conectar candidatos a empresas e serviços da região de Pedro II - PI.
<br></br>

<a href="https://opus-frontend-docs.vercel.app"><strong>Explore the docs »</strong></a>
<br></br>

<img width="100%" src="https://i.ibb.co/M1r1YSq/Group-2.png" alt="Opus Frontend Screenshot">
</div>

<div align="left">

## Em Desenvolvimento... ⚠

## Equipe de Desenvolvimento

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ruanvcg">
        <img src="https://avatars.githubusercontent.com/u/62728646?v=4" width="100px;" alt="Foto do Ruan Victor no GitHub"/><br>
        <sub>
          <b>Ruan Victor</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/brunolimapinheiro">
        <img src="https://avatars.githubusercontent.com/u/125039158?v=4" width="100px;" alt="Foto do Bruno Lima no GitHub"/><br>
        <sub>
          <b>Bruno Lima</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/KelySoare5">
        <img src="https://avatars.githubusercontent.com/u/111580529?v=4" width="100px;" alt="Foto de Kely Soares no GitHub"/><br>
        <sub>
          <b>Kely Soares</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hugoamadio">
        <img src="https://avatars.githubusercontent.com/u/146294243?v=4" width="100px;" alt="Foto do Hugo Amadio no GitHub"/><br>
        <sub>
          <b>Hugo Amadio</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jorgejesuscardoso">
        <img src="https://avatars.githubusercontent.com/u/133919477?v=4" width="100px;" alt="Foto do Jorge Jesus no GitHub"/><br>
        <sub>
          <b>Jorge Jesus</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Mtmozart">
        <img src="https://avatars.githubusercontent.com/u/108758897?v=4" width="100px;" alt="Foto do Matheus Mozart no GitHub"/><br>
        <sub>
          <b>Matheus Mozart</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JociS4">
        <img src="https://avatars.githubusercontent.com/u/107800194?v=4" width="100px;" alt="Foto do Jociel Andrade no GitHub"/><br>
        <sub>
          <b>Jociel Andrade</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/OMaskara310">
        <img src="https://avatars.githubusercontent.com/u/107417702?v=4" width="100px;" alt="Foto do João Carlos no GitHub"/><br>
        <sub>
          <b>João Carlos</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/AbdeIF">
        <img src="https://avatars.githubusercontent.com/u/126293962?v=4" width="100px;" alt="Foto do Abdenaide no GitHub"/><br>
        <sub>
          <b>Abdenaide Ribeiro</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
</div>
</div>

<br>

# Documentação
Esta documentação traz as informações necessárias para a utilização do frontend do projeto Opus. Nela você encontrará informações sobre a estrutura do projeto, as tecnologias utilizadas, os comandos para rodar o projeto e os testes.

### Tecnologias Utilizadas 

| Tecnologia         | Descrição                                         |
|--------------------|---------------------------------------------------|
| React              | Biblioteca JavaScript para construção de interfaces de usuário |
| TypeScript         | Superset de JavaScript com tipagem estática        |
| Vite               | Ferramenta de build rápida para frontend           |
| Material UI        | Biblioteca de componentes React para design consistente |
| Framer Motion      | Biblioteca para animações em React                 |
| Docker             | Contêinerização                                     |
| ESLint             | Ferramenta de linting para código JavaScript/TypeScript |
| Prettier           | Formatação de código                                |

## Instalação
O frontend do projeto está configurado para ser executado localmente usando Vite e Docker.

É altamente recomendável não modificar o arquivo `docker-compose.yml` para evitar problemas com a execução do projeto. Igualmente, não altere os scripts de execução do projeto no `package.json`.

Caso seja necessário alterar alguma configuração de porta, tenha certeza de fazer o bind corretamente no arquivo `docker-compose.yml` e nas configurações do frontend.

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/)

### Comandos para rodar o projeto

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/front-end.git
    cd front-end
    ```

2. **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

    Essas dependências são locais e são necessárias para poder fazer edições no projeto.

3. **Configuração do ambiente:**
    Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias. Um exemplo de `.env` pode ser encontrado no arquivo `.env.example`.

4. **Rodar o projeto:**
    ```bash
    npm run dev
    ```

    Este comando iniciará o servidor de desenvolvimento com Hot Module Replacement (HMR) ativo.

    Alternativamente, você pode usar Docker para rodar o frontend:
    ```bash
    docker-compose up # Roda o frontend em modo de visualização de logs
    docker-compose up -d # Roda o frontend em modo de background
    ```

    O Docker irá baixar as imagens e criar os containers automaticamente.

5. **Acessar o projeto:**
    Abra o navegador e vá para `http://localhost:3000` (ou a porta configurada) para ver o frontend em execução.

### Scripts Disponíveis

No `package.json`, os seguintes scripts estão disponíveis:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão otimizada para produção.
- `npm run preview`: Serve a versão de produção localmente.
- `npm run test`: Executa os testes.
- `npm run lint`: Executa o ESLint para verificar o código.
- `npm run format`: Formata o código usando Prettier.

### Adicionando Material UI, React Icons e Framer Motion

Para adicionar as bibliotecas usadas no projeto, os seguintes comandos foram utilizados:

- **Material UI:**
    ```bash
    npm install @mui/material @emotion/react @emotion/styled
    ```

- **Framer Motion:**
    ```bash
    npm install framer-motion
    ```

## Estrutura do Projeto

A estrutura do projeto segue as melhores práticas para aplicações React com TypeScript e Vite, organizada para facilitar a manutenção e escalabilidade.

