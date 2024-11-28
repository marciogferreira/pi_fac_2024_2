### O que é JWT?

JWT (**JSON Web Token**) é um padrão para autenticação e troca segura de informações entre diferentes partes. Ele é amplamente utilizado para autenticar usuários em sistemas baseados em APIs (como RESTful APIs). Um token JWT contém informações codificadas em formato **JSON**, que podem ser verificadas e confiáveis porque são assinadas digitalmente.

---

### Como funciona o JWT?

1. **Autenticação inicial**:
   - O cliente (ex.: frontend) envia as credenciais do usuário (como e-mail e senha) para o servidor.
   - O servidor valida essas credenciais e, se forem válidas, gera um JWT.

2. **Token JWT**:
   - O servidor envia o JWT ao cliente.
   - O cliente armazena o token, geralmente no **localStorage** ou em **cookies seguros**.

3. **Requisições autenticadas**:
   - O cliente inclui o token JWT no header `Authorization` (`Bearer <token>`) em todas as requisições subsequentes.
   - O servidor valida o token antes de permitir o acesso ao recurso solicitado.

---

### Estrutura de um JWT

Um token JWT é composto por três partes, separadas por pontos (`.`):

```
header.payload.signature
```

1. **Header**:
   - Contém informações sobre o tipo do token (JWT) e o algoritmo de assinatura.
   ```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   ```

2. **Payload**:
   - Contém as informações (ou **claims**) que queremos armazenar, como o ID do usuário.
   ```json
   {
     "sub": "1234567890",
     "name": "John Doe",
     "admin": true
   }
   ```

3. **Signature**:
   - É gerada a partir do header, payload e uma chave secreta. Garante que o token não foi adulterado.

---

### Exemplo prático em Node.js com Express e JWT

#### Instalar dependências

```bash
npm install express jsonwebtoken body-parser
```

#### Código

```javascript
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = "minha_chave_secreta"; // Use uma chave forte e secreta

// Endpoint para login e geração do JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Exemplo simplificado de autenticação
  if (username === "user" && password === "password") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Credenciais inválidas" });
});

// Middleware para verificar o JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token não fornecido" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    req.user = user;
    next();
  });
};

// Endpoint protegido
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Bem-vindo, ${req.user.username}!` });
});

// Inicia o servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
```

---

### Como funciona o código?

1. **Login**:
   - O usuário envia `username` e `password` para o endpoint `/login`.
   - O servidor valida as credenciais e gera um JWT assinado com a `SECRET_KEY`.

2. **Validação do Token**:
   - O middleware `verifyToken` extrai o token do header `Authorization` e valida sua assinatura.
   - Se o token for válido, o middleware permite o acesso ao próximo handler.

3. **Acesso protegido**:
   - O endpoint `/protected` só é acessível se o token for válido.

---

### Benefícios do JWT

- **Sem estado no servidor**:
  - O token é armazenado no cliente, eliminando a necessidade de sessões no servidor.
- **Escalabilidade**:
  - Ideal para sistemas distribuídos, já que as informações estão contidas no próprio token.
- **Flexibilidade**:
  - Pode ser usado para autenticação entre diferentes partes (ex.: frontend, backend, mobile).

### Cuidados importantes

- Use **HTTPS** para proteger os tokens contra ataques man-in-the-middle.
- Armazene tokens de forma segura (evite localStorage em aplicações críticas).
- Configure uma **expiração curta** para tokens e use mecanismos de renovação.

Se precisar de mais exemplos ou explicações, é só pedir! 🚀
