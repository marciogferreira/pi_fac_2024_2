# HTTP Status Codes e Headers

Este documento fornece uma visão geral sobre os códigos de status HTTP e os headers HTTP, elementos essenciais para o funcionamento de APIs, sites e sistemas web.

---

## Tabela de Conteúdo
1. [O que são Códigos de Status HTTP?](#o-que-são-códigos-de-status-http)
2. [Principais Códigos de Status HTTP](#principais-códigos-de-status-http)
   - [Códigos de Sucesso (2xx)](#códigos-de-sucesso-2xx)
   - [Códigos de Redirecionamento (3xx)](#códigos-de-redirecionamento-3xx)
   - [Códigos de Erro do Cliente (4xx)](#códigos-de-erro-do-cliente-4xx)
   - [Códigos de Erro do Servidor (5xx)](#códigos-de-erro-do-servidor-5xx)
3. [O que são Headers HTTP?](#o-que-são-headers-http)
4. [Tipos de Headers HTTP](#tipos-de-headers-http)
   - [Headers de Requisição](#headers-de-requisição)
   - [Headers de Resposta](#headers-de-resposta)
   - [Headers Gerais](#headers-gerais)
5. [Exemplos Práticos](#exemplos-práticos)
6. [Referências](#referências)

---

## O que são Códigos de Status HTTP?

Códigos de status HTTP são números de três dígitos retornados pelo servidor em resposta a uma solicitação feita pelo cliente (por exemplo, navegador ou aplicação). Eles indicam se a requisição foi bem-sucedida, se ocorreu um erro ou se há uma ação adicional necessária.

### Principais Códigos de Status HTTP

#### Códigos de Sucesso (2xx)
- **200 OK**: Requisição bem-sucedida.
- **201 Created**: Requisição bem-sucedida e um novo recurso foi criado.
- **204 No Content**: Requisição bem-sucedida, mas sem conteúdo no corpo de resposta.

#### Códigos de Redirecionamento (3xx)
- **301 Moved Permanently**: O recurso foi movido permanentemente para uma nova URL.
- **302 Found**: O recurso foi temporariamente movido para outra URL.
- **304 Not Modified**: Indica que o recurso não foi modificado e pode ser carregado do cache.

#### Códigos de Erro do Cliente (4xx)
- **400 Bad Request**: Requisição inválida.
- **401 Unauthorized**: Autenticação necessária.
- **403 Forbidden**: Acesso ao recurso proibido.
- **404 Not Found**: Recurso não encontrado.

#### Códigos de Erro do Servidor (5xx)
- **500 Internal Server Error**: Erro no servidor.
- **502 Bad Gateway**: Resposta inválida recebida de um servidor intermediário.
- **503 Service Unavailable**: Serviço temporariamente indisponível.

---

## O que são Headers HTTP?

Headers HTTP são metadados incluídos em uma solicitação ou resposta HTTP que contém informações adicionais sobre a requisição ou a resposta. Eles fornecem instruções sobre como o cliente e o servidor devem se comunicar.

### Tipos de Headers HTTP

#### Headers de Requisição
Enviados pelo cliente ao servidor e incluem informações como autenticação e parâmetros específicos. Exemplos:
- **Authorization**: Informação de autenticação.
- **Content-Type**: Tipo de conteúdo da solicitação (por exemplo, `application/json`).
- **User-Agent**: Informações sobre o cliente que faz a requisição.

#### Headers de Resposta
Retornados pelo servidor ao cliente e incluem informações sobre a resposta. Exemplos:
- **Content-Type**: Tipo de conteúdo da resposta.
- **Set-Cookie**: Configurações de cookies.
- **Cache-Control**: Instruções de cache para o navegador.

#### Headers Gerais
Esses headers podem aparecer em qualquer solicitação ou resposta. Exemplos:
- **Date**: Data e hora da mensagem.
- **Connection**: Controle de conexão (ex: `keep-alive` ou `close`).

---

## Exemplos Práticos

### Exemplo 1: Requisição GET bem-sucedida (200 OK)
```http
GET /api/user/123 HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 200
Date: Wed, 31 Oct 2024 12:00:00 GMT
```

### Exemplo 2: Erro 404 - Recurso não encontrado
```http
GET /api/unknown HTTP/1.1
Host: api.example.com

HTTP/1.1 404 Not Found
Content-Type: application/json
Content-Length: 0
Date: Wed, 31 Oct 2024 12:00:00 GMT
```

---

## Referências
- [MDN Web Docs - HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [MDN Web Docs - HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
