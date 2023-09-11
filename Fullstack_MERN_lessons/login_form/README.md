## create two folder:-

### 1:- frontend

### 2:- backend

## for backend install following packages:-

### express(npm i express)

### mongoose (npm i mongoose)

### cors(npm i cors)

### express validator (npm install express-validator)

## create module folder which have 3 files:-

### login.js

### register.js

```python
import { Schema, model } from "mongoose";

const registerSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const Register = model("Register", registerSchema);
export default Register;


```

### fakedata.js

## create routes folder which have three sub files:-

### loginRoute.js

### registerRoute.js

### fakeRoute.js

---

## in frontend folder create react app:-

npx create-react-app my-app
cd my-app
npm start

### create a folder Container which have three subfolder:-

### Login:-index.js

### :-style.css

### Register:-index.js

### :-style.css

### MainPage:-index.js

### :-style.css

### install following packages:-

react router dom
