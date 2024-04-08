# Product API Spec

## Get All Products

Endpoint : GET /products

Response Body (success) :

```json
{
  "data": [
    {
      "id": 1,
      "name": "string",
      "price": 1
    },
    {
      "id": 2,
      "name": "string",
      "price": 2
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

## Create Product

Endpoint: POST /products

Request Body:

```json
{
  "name": "string",
  "stocks": 0,
  "price": 0
}
```

Response Body:

```json
{
  "data": {
    "product_id": 0
  }
}
```

Response Body (error):

```json
{
  "error": "some error"
}
```
