const express = require('express')
const app = express()


const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const { v4: uuidv4 } = require('uuid');

let db 
// this is a top-level await 
(async () => {
    // open the database
     db = await open({
      filename: './tmp/database.db',
      driver: sqlite3.Database
    })
})()




app.get('/products', async (req, res) => {

    const product = await db.all("Select * from products")

    const myproduct = res.status(300).json({product})
    console.log("PRODUCT", myproduct)
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


  app.get('/insert-products', async (req, res) => {
    // req.query
    try {

        // let objme = [
        //     {
        //      name: req.query.name, 
        //      price: req.query.price, 
        //      uuid: uuidv4() 
        //     }]


          await db.run('INSERT INTO `products` (UUID,name,price) VALUES (?,?,?)', 
          uuidv4(), 
          req.query.name, 
          req.query.price
          )

        res.status(200).json(req.query)
    } catch (error) {
        res.status(500).send(error)
    }
 
  })



app.listen(3000)


console.log("welcome")

