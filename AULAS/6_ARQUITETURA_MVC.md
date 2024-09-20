## O que é Arquitetura MVC?

**MVC** (Model-View-Controller) é um padrão de arquitetura de software que separa uma aplicação em três componentes principais: **Model** (Modelo), **View** (Visão) e **Controller** (Controlador). Esse padrão foi criado para organizar e modularizar o código, facilitando a manutenção e escalabilidade de sistemas complexos, especialmente aplicações web.

### Componentes da Arquitetura MVC

1. **Model (Modelo)**:
   - Representa a **lógica de dados** e as **regras de negócio** de uma aplicação.
   - O Model é responsável por acessar, modificar e armazenar os dados, geralmente interagindo com o banco de dados.
   - Ele não sabe nada sobre a interface de usuário (View) ou como os dados são exibidos.
   - Exemplo: Em uma aplicação de cadastro de usuários, o Model seria responsável por gerenciar os dados dos usuários (nome, email, senha) e realizar operações como salvar no banco de dados, consultar ou atualizar esses dados.

2. **View (Visão)**:
   - A View é responsável pela **interface com o usuário** (UI), exibindo os dados ao usuário de forma compreensível.
   - Ela só se preocupa com a apresentação da informação e não contém lógica de negócio.
   - A View recebe dados do Model e os apresenta de uma forma adequada (por exemplo, em uma página web, como HTML, CSS, etc.).
   - Exemplo: Uma página web que exibe uma lista de usuários em formato de tabela, sem qualquer lógica de manipulação de dados.

3. **Controller (Controlador)**:
   - O Controller atua como intermediário entre o **Model** e a **View**.
   - Ele recebe as **requisições** do usuário (via View), processa a lógica da aplicação e interage com o Model para manipular dados.
   - Após processar os dados, o Controller atualiza a View com as informações apropriadas.
   - Exemplo: Quando o usuário clica em "Salvar", o Controller recebe essa ação, chama o Model para salvar os dados no banco de dados e, em seguida, redireciona o usuário para a página de confirmação.

### Fluxo de Trabalho no MVC

1. **Usuário interage com a View**: O usuário faz uma requisição (por exemplo, ao preencher um formulário e clicar em “Enviar”).
   
2. **Controller processa a requisição**: O Controller captura essa requisição, processa a lógica necessária e decide quais dados do Model são necessários para atender à requisição.
   
3. **Model fornece ou manipula dados**: O Controller chama o Model para obter ou modificar dados (por exemplo, salvando um novo usuário no banco de dados).

4. **Controller atualiza a View**: O Controller envia os dados do Model de volta para a View, que então apresenta as informações ao usuário (por exemplo, exibindo uma página de confirmação).

Esse ciclo se repete sempre que uma interação do usuário ocorre.

### Vantagens da Arquitetura MVC

1. **Separação de Preocupações**: O MVC promove a separação da lógica da aplicação (Model) da interface com o usuário (View), com o Controller atuando como intermediário. Isso facilita a manutenção e organização do código.

2. **Modularidade**: Como cada componente tem responsabilidades claras, você pode alterar um componente (por exemplo, a View) sem afetar outros componentes (como o Model).

3. **Reutilização de Código**: O Model pode ser reutilizado em diferentes partes da aplicação ou até em diferentes aplicações, já que ele não está diretamente acoplado à interface (View).

4. **Facilidade de Testes**: Como a lógica de negócios está separada da interface de usuário, é mais fácil testar o código de maneira isolada (por exemplo, testar o Model sem se preocupar com a interface).

5. **Escalabilidade**: A arquitetura MVC facilita o crescimento da aplicação, uma vez que você pode adicionar ou modificar funcionalidades sem comprometer o sistema como um todo.

### Desvantagens da Arquitetura MVC

1. **Complexidade inicial**: Para pequenas aplicações, o uso de MVC pode parecer exagerado, já que requer a criação de três componentes separados para funcionalidades simples.

2. **Curva de aprendizado**: Para desenvolvedores que não estão familiarizados com o padrão, pode ser difícil inicialmente entender como os componentes interagem entre si.

3. **Dependência entre componentes**: Embora os componentes sejam separados, mudanças em um componente podem, em alguns casos, afetar outros, especialmente se a separação não for bem implementada.

### Exemplo de MVC com Express.js

Aqui está um exemplo básico de uma aplicação web usando o padrão **MVC** com **Express.js** (para Node.js):

#### Estrutura do Projeto

```
/projeto-mvc
   /controllers
       userController.js
   /models
       userModel.js
   /views
       userView.ejs
   /routes
       userRoutes.js
   app.js
```

#### 1. **Model (userModel.js)** – Gerencia os dados:

```javascript
// userModel.js
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static findById(id) {
    // Simulação de uma busca no "banco de dados"
    const users = [
      new User(1, 'Alice', 'alice@example.com'),
      new User(2, 'Bob', 'bob@example.com')
    ];
    return users.find(user => user.id === id);
  }
}

module.exports = User;
```

#### 2. **Controller (userController.js)** – Intermediário entre Model e View:

```javascript
// userController.js
const User = require('../models/userModel');

exports.getUser = (req, res) => {
  const userId = req.params.id;
  const user = User.findById(userId);
  if (!user) {
    return res.status(404).send('Usuário não encontrado');
  }
  res.render('userView', { user });
};
```

#### 3. **View (userView.ejs)** – Exibe os dados:

```html
<!-- userView.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>Perfil do Usuário</title>
</head>
<body>
  <h1>Perfil do Usuário</h1>
  <p>Nome: <%= user.name %></p>
  <p>Email: <%= user.email %></p>
</body>
</html>
```

#### 4. **Routes (userRoutes.js)** – Define as rotas:

```javascript
// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users/:id', userController.getUser);

module.exports = router;
```

#### 5. **App (app.js)** – Configura a aplicação:

```javascript
// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

### Conclusão

A arquitetura **MVC** é um padrão poderoso que ajuda a organizar e modularizar o código em aplicações, principalmente no desenvolvimento web. Ela divide a aplicação em três partes principais, o que facilita a manutenção, a escalabilidade e a reutilização de código. Ao seguir esse padrão, desenvolvedores conseguem criar aplicações mais limpas, organizadas e fáceis de manter, separando claramente a lógica de dados, a interface com o usuário e o controle da aplicação.