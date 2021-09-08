## NPM Scripts:

run server:

    npm run server

run client:

    npm run client`

run both:

    npm run dev

<br>

seed for import

    npm run DATA:import

delete all data

    npm run DATA:delete

 <br>

reinstalls node_modules

    npm run fresh

<br>

## Endpoints Postman

| Schema | METHOD | Description | Endpoints |
| :-- | :-- | :-- | :-- |
|  | GET | `'/'` test | http://localhost:5000/ |
| USERS |  |  |  |
| ?? | GET | Get all users | http://localhost:5000/api/users |
|  | POST | Login User | http://localhost:5000/api/users/login |
|  | POST | Register User | http://localhost:5000/api/users |
|  | DELETE | Delete User | http://localhost:5000/api/users/:id |
| PRODUCTS |  |  |  |
|  | GET | Get all Products | http://localhost:5000/api/products |
|  | GET | Get Product by id | http://localhost:5000/api/products/:id |
|  | DELETE | Delete Product | http://localhost:5000/api/products/:id |
|  | POST | Create new Product | http://localhost:5000/api/products |
