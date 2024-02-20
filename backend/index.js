const express = require('express')
const app = express()


const sqlite3 = require('sqlite3')
const { open } = require('sqlite')


let db 
// this is a top-level await 
(async () => {
    // open the database
     db = await open({
      filename: './tmp/database.db',
      driver: sqlite3.Database
    })
})()




app.get('/products', function (req, res) {
  res.status(300).send('Hello World')
})

app.get('/init-products', async (req, res) => {

    try {

        await db.exec('CREATE TABLE products (name TEXT, price REAL)') 

        const product  = [
            {
                name: 'Shoes', 
                price: 10000
            },
            {
                name: 'bag', 
                price: 12000
            }]
    
            for (const product_item of product) {
                await db.run('INSERT INTO `products` (name,price) VALUES (?,?)', 
                product_item.name, 
                product_item.price)
            }
        
        res.status(200).json({message: 'Data executed'})
    } catch (error) {
        res.status(500).send(error)
    }
 
  })


app.listen(3000)


console.log("welcome")

