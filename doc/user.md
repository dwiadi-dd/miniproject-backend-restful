# User API Spec

## Register

### Endpoint POST /users/register

Request Body:

```json
{
  "email": "string",
  "password": "string",
  "name": "string"
}
```

Response Body:

```json
{
  "data": {
    "id": 0
  }
}
```

Response Body (error):

```json
{
  "error": "some error"
}
```

## Login

### Endpoint POST /users/login

Request Body:

```json
{
  "email": "string",
  "password": "string"
}
```

Response Body:

```json
{
  "data": {
    "token": "token"
  }
}
```

Response Body (error):

```json
{
  "error": "some error"
}
```
