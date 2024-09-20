## Sobre o Projeto

Este projeto é uma aplicação web que segue a arquitetura de **Frontend** e **Backend** com a comunicação via uma **API RESTful**. Ele foi desenvolvido para demonstrar a separação de responsabilidades entre a interface do usuário (Frontend) e a lógica de negócio e gerenciamento de dados (Backend), além de implementar boas práticas no desenvolvimento de APIs RESTful.

### Frontend

O **Frontend** é a parte do projeto que os usuários interagem diretamente. Ele é responsável pela interface gráfica e pela experiência do usuário, utilizando tecnologias como:

- **HTML**: Estrutura do conteúdo.
- **CSS**: Estilização e layout da página.
- **JavaScript**: Comportamento dinâmico e interatividade.
- **Frameworks/Libraries**:
  - **React**: (ou outro framework como Vue.js, Angular) foi usado para construir componentes reutilizáveis e manter a interface do usuário sincronizada com o estado da aplicação.

#### Como executar o Frontend

1. Acesse a pasta `frontend`.
2. Execute o comando `npm install` para instalar as dependências.
3. Use `npm start` para rodar a aplicação localmente.

### Backend

O **Backend** é responsável pela lógica de negócios, manipulação de dados e comunicação com o banco de dados. Ele fornece dados e serviços ao Frontend através de uma API. As tecnologias utilizadas no Backend incluem:

- **Node.js** (ou outro ambiente de execução)
- **Express.js**: Framework para lidar com rotas e requisições HTTP.
- **Banco de dados**: Pode ser **MongoDB**, **PostgreSQL**, ou outro sistema de banco de dados, dependendo das necessidades do projeto.

#### Como executar o Backend

1. Acesse a pasta `backend`.
2. Execute `npm install` para instalar as dependências.
3. Configure as variáveis de ambiente, como a URL do banco de dados, no arquivo `.env`.
4. Inicie o servidor com `npm run dev`.

### API RESTful

A API do projeto segue os princípios REST, sendo responsável por permitir a comunicação entre o Frontend e o Backend. Principais características da API:

- **Stateless**: Cada requisição da API é independente, contendo todas as informações necessárias para ser processada.
- **Métodos HTTP**: 
  - **GET**: Para obter dados.
  - **POST**: Para enviar novos dados.
  - **PUT**: Para atualizar dados existentes.
  - **DELETE**: Para remover dados.
- **URIs claras**: A estrutura de endpoints é simples e intuitiva, seguindo boas práticas de nomeação.
  - Exemplo de endpoint: `/api/users` (para operações com usuários).
  
### Estrutura dos Endpoints

- **/api/users** (GET, POST): Operações para criação e listagem de usuários.
- **/api/users/{id}** (GET, PUT, DELETE): Operações para um usuário específico.
- **/api/products** (GET, POST): Operações para criação e listagem de produtos.
- **/api/products/{id}** (GET, PUT, DELETE): Operações para um produto específico.

### Como testar a API

- Utilize o **Postman** ou **Insomnia** para enviar requisições HTTP para a API.
- Ou, se preferir, você pode utilizar `curl` no terminal:
  ```bash
  curl -X GET http://localhost:3000/api/users
  ```

### Conclusão

Este projeto exemplifica uma aplicação full-stack simples com uma arquitetura escalável, separando Frontend, Backend e uma API RESTful para facilitar o desenvolvimento, manutenção e expansão de funcionalidades.
