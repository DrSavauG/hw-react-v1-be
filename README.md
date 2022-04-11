# 1. netflix/roulette BE

Task: https://github.com/DrSavauG/hw-react-v1

# Run app:

 ```
 npm i
 npm start
 ```

## Usage guide
**POST /roulette/registration** register email as username  
**GET /roulette/activate/:link** activation email  
**POST /roulette/login** login by login & password  
**GET /roulette/refresh** refresh access token  
**POST /roulette/logout** logout  
**GET /roulette/users** returns all registered users from DB  
**GET /roulette/films** returns all films from DB  
**GET /roulette/films?(page=1&limit=10)** returns all films with pagination  
**GET /roulette/films/:id** return one film by id  
**POST /roulette/films** creates a film  
**PUT /roulette/films/:id** edit film by id  
**DELETE /roulette/films/:id** deletes film by id  


Your POST request should include:


    {
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    genre: {
        type: Array,
        required: true,
    },
    release_date: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    runtime: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    _deletedAt: {
        type: String,
        default: null,
    }
    }
