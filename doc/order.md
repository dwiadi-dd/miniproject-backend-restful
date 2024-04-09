# Order API Spec

## Create Order

### Endpoint : POST /orders

Request Header:

```
Authorization : Bearer <jwt_token>
```

Request Body :

```json
{
  "order_id": 0
}
```

Response Body :

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

## Get All Order

### Endpoint Get /orders

Request Header:

```
Authorization : Bearer <jwt_token>
```

Response Body :

```json
{
  "data": [
    {
      "id": 0,
      "user_id": 0,
      "product_id": 0,
      "price": 0
    }
  ]
}
```

Response Body (error):

```json
{
  "error": "some error"
}
```
