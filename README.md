This project was bootstrapped with React, React Hooks, React-router-dom, Styled-components, axios, NodeJS and MongooseJs

## Installing Dependencies

In the project main directory

### `yarn install`

In the project client directory

### `yarn install`

## Available Scripts To Run The Projects

In the project root directory, if you want to run both projects server and client at the same time, you can run:

### `npm run dev`

In the project root directory, if you want to run just the server, you can run:

### `npm run server`

In the project root directory, if you want to run just the client, you can run:

### `npm run client`


## The Frontend

* You will find 3 Departments links for Department filter, if you select any Department link it will display all of the products within that department.<br />

* You will find a Switch toggle button for Promotion filter to filter products that have the entered promotion_code or to see All products if you switch the button again.<br />

* You will find a search input field to filter by text search based on product name.<br />

* You will find a paginated list of all products showing their name and price, and showing a products current promotion and discounted price if one is active, and if you want to load more products you have to scroll down or click Loading button

## The Backend

### API Route

`http://localhost:5000`

### API Endpoints

**`GET`** `/departments`
To see all avilable Deparments<br />

**`GET`** `/products?page=${page}&perPage=${perPage}&department_id=${department_id}`
To see all Products depends on queries<br />

**`POST`** `/departments`
Add a Deparment<br /><br />
sample:<br />

```
{
	"name": "Appliances"
}
```

**`POST`** `/products`
Add a Product<br /><br />
sample:<br />

```
{
	"name": "Encona Indian Hot Pepper Sauce - 220 Ml",
	"price": 64,
	"department_id": "5eb1d3ee9d5d9b3ffc975100",
	"promotions": ["5eb2023bfb8c3661785665e4"]
}
```
`promotions` is optional

**`POST`** `/promotions`
Add a Promotion<br /><br />
sample:<br />

```
{
	"code": "D",
	"active": false,
	"discount": 40
}
```


Thanks Trufla.