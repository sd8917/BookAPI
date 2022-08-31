# BookAPI
This is simple crud API for book using MERN

### GET : http://localhost:4000/api/books 
> Get all the books

### POST : http://localhost:4000/api/books 
> Create a new books

### GET :  http://localhost:4000/api/books/:id 
> Get a specific book by id

### DELETE : http://localhost:4000/api/books/:id 
> Delete a specific book by id


## Package we are using
- Express
- mongoose
- mongodb
- nodemon

## DB setting

```
const url = "mongodb://localhost/BookAPI"
mongoose.connect(url)

const con = mongoose.connection

con.on('open' , ()=>{
  console.log("Connected !")
})

Note : https://mongoosejs.com/
```
