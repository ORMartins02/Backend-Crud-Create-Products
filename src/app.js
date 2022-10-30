import categoriesRouter from "./routes/categories.routes";
import productsRouter from "./routes/products.routes";
import startDatabase from "./database";
import "dotenv/config";
import express from "express";


const app = express();
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
  startDatabase();
  console.log("Server running \u{1F680}");
  console.log("Database conected \u{1F4C5}");
});

export default app;