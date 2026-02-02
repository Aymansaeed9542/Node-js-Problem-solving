const express = require('express');
const app = express();
const mysql = require('mysql2')
app.use(express.json())


const connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password:"",
    database:"store"
})
connection.connect((err)=>{
    if (err) {
        console.log(err);
        
    }
    console.log("database connected");
})

// create suppliers table
// connection.query(`create table suppliers(
// supplier_id int PRIMARY KEY AUTO_INCREMENT,
//     supplierName varchar(255),
//     contact_number varchar(255)
// )`)


// create products table
// connection.query(`create TABLE Products(
// product_id int PRIMARY KEY AUTO_INCREMENT,
//     product_name varchar(255) ,
//     price decimal(10,2),
//     Stock_Quantity int ,
//     Supplier_id int ,
//     CONSTRAINT fk_supplier FOREIGN KEY (Supplier_id) REFERENCES suppliers (supplier_id)
 
// )`)

// create sales table
// connection.query(`create TABLE Sales(
// sale_id int PRIMARY KEY AUTO_INCREMENT,
//     product_id int ,
// quantity_sold int ,
//     CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products (product_id)
 
// )`)

// add category column
// connection.query(`ALTER TABLE products ADD COLUMN category varchar(255)`)


// remove category column
// connection.query(`ALTER TABLE products DROP COLUMN category;`)

// change Change “ContactNumber” column in Suppliers to VARCHAR (15)
// connection.query(`ALTER TABLE suppliers MODIFY COLUMN contact_number VARCHAR(15);
// `)

// Add a NOT NULL constraint to ProductName. 
// connection.query(`ALTER TABLE products 
// MODIFY COLUMN product_name VARCHAR(255) NOT NULL;
// `)

// Add a supplier with the name 'FreshFoods' and contact number '01001234567'.
// connection.query(`INSERT INTO suppliers (supplierName, contact_number)
// VALUES ('FreshFoods', '01001234567');`)


// Insert the following three products, all provided by 'FreshFoods':
// connection.query(
//   "SELECT supplier_id FROM suppliers WHERE supplierName = 'FreshFoods'",
//   (err, results) => {
//     if (err) throw err;

//     const supplierId = results[0].supplier_id;

//     connection.query(
//       `INSERT INTO products (product_name, price, Stock_Quantity, Supplier_id)
//        VALUES 
//        ('Milk', 15.00, 50, ${supplierId}),
//        ('Bread', 10.00, 30, ${supplierId}),
//        ('Eggs', 20.00, 40, ${supplierId})`,
//       (err, results) => {
//         if (err) throw err;
//         console.log("Products added successfully!");
        
//       }
//     );
//   }
// );


// - Update the price of 'Bread' to 25.00.
// connection.query(
//   `UPDATE products SET price = ? WHERE product_name = ?`,
//   [25.00, 'Bread'],
//   (err, results) => {
//     if (err) throw err;
//     console.log("Price of Bread updated successfully!");
//   }
// );


// 8- Delete the product 'Eggs'
// connection.query(
//   "DELETE FROM products WHERE product_name = ?",
//   ['Eggs'],
//   (err, results) => {
//     if (err) throw err;
//     console.log("Product 'Eggs' deleted successfully!");
//   }
// );


// 9- Retrieve the total quantity sold for each product
// connection.query(`SELECT p.product_name, SUM(s.quantity_sold) AS total_quantity_sold
// FROM sales s
// INNER JOIN products p
// ON s.product_id = p.product_id
// GROUP BY p.product_name;`,  (err, results) => {
//     if (err) throw err;
//     console.log(results);
//   })

// 10-Get the product with the highest stock.
// connection.query(
//   `SELECT product_name, stock_quantity
//    FROM products
//    ORDER BY stock_quantity DESC
//    LIMIT 1;`,
//   (err, results) => {
//     if (err) throw err;
//     console.log("Product with highest stock:", results);
//   }
// );

// 11-Find suppliers with names starting with 'F'. 
// connection.query(
//   `SELECT * FROM suppliers WHERE supplierName LIKE 'F%';`,
//   (err, results) => {
//     if (err) throw err;
//     console.log("Suppliers starting with F:", results);
//   }
// );

// 12
// connection.query(
//   `SELECT p.product_name
//    FROM products p
//    LEFT JOIN sales s
//    ON p.product_id = s.product_id
//    WHERE s.product_id IS NULL;`,
//   (err, results) => {
//     if (err) throw err;
//     console.log("Products never sold:", results);
//   }
// );

// 13
// connection.query(
//   `SELECT s.sale_id, p.product_name, s.quantity_sold
//    FROM sales s
//    INNER JOIN products p
//    ON s.product_id = p.product_id;`,
//   (err, results) => {
//     if (err) throw err;
//     console.log("Sales with product name and date:", results);
//   }
// );

// 14
    //   connection.query(
    //     `CREATE USER 'store_manager'@'localhost' IDENTIFIED BY 'password123';`,
    //     (err, result) => {
    //       if (err) throw err;
    //       console.log("User store_manager created");

    //       connection.query(
    //         `GRANT SELECT, INSERT, UPDATE ON store.products TO 'store_manager'@'localhost';`,
    //         (err, result) => {
    //           if (err) throw err;
    //           console.log("Permissions granted on products");

    //           connection.query(
    //             `GRANT SELECT, INSERT, UPDATE ON store.sales TO 'store_manager'@'localhost';`,
    //             (err, result) => {
    //               if (err) throw err;
    //               console.log("Permissions granted on sales");

    //               connection.query(
    //                 `FLUSH PRIVILEGES;`,
    //                 (err, result) => {
    //                   if (err) throw err;
    //                   console.log("Privileges flushed");
    //                   connection.end();
    //                 }
    //               );
    //             }
    //           );
    //         }
    //       );
    //     }
    //   );
    // بيطلعلي الايرور دا Error: Table '.\mysql\db' is marked as crashed and last (automatic?) repair failed

// 15





app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});