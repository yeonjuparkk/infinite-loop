// const {

//   } = require("./");
//   const client = require("./client");

async function dropTables() {
  try {
    console.log("Dropping All Tables...");
    // drop all tables, in the correct order
    await client.query(`
      DROP TABLE IF EXISTS products_orders;
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS reviews;
      DROP TABLE IF EXISTS users;
      `);
    console.log("Finished dropping tables...");
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");
    // create all tables, in the correct order

    await client.query(`
        CREATE TABLE users(
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          "isAdmin" BOOLEAN DEFAULT false,
        );
        
        CREATE TABLE reviews (
          id SERIAL PRIMARY KEY,
          "productId" INTEGER REFERENCES products(id) NOT NULL,
          "userId" INTEGER REFERENCES users(id) NOT NULL,
          rating INTEGER NOT NULL,
          description TEXT NOT NULL
        );

        CREATE TABLE orders (
          id SERIAL PRIMARY KEY,
          "userId" INTEGER REFERENCES users(id) NOT NULL,
          address VARCHAR(255) NOT NULL
        );

        CREATE TABLE products ( 
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          category VARCHAR(255),
          price DECIMAL,
          photo VARCHAR(2048),
        );

        CREATE TABLE products_orders (
          id SERIAL PRIMARY KEY,
          "orderId" INTEGER REFERENCES orders(id) NOT NULL,
          "productId" INTEGER REFERENCES products(id) NOT NULL,
          quantity INTEGER NOT NULL
        );
      `);

    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

module.exports = {
  rebuildDB,
};
