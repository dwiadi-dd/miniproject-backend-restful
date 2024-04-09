import express from "express";
import { mysqlConnection } from "./lib/database";
import { ProductController } from "./controllers/product-controller";
import { ProductService } from "./services/product-service";
import { ProductRepository } from "./repositories/product-repository";
import { UserRepository } from "./repositories/user-repository";
import { UserService } from "./services/user-service";
import { UserController } from "./controllers/user-controller";

const startServer = async () => {
  try {
    const db = await mysqlConnection();

    const productRepository = new ProductRepository(db);
    const productService = new ProductService(productRepository);
    const productController = new ProductController(productService);

    const userRepository = new UserRepository(db);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);

    const app = express();

    app.use(express.json());

    app.post("/users/register", userController.register);
    app.post("/users/login", userController.login);

    app.get("/products", productController.getAll);
    app.post("/products", productController.create);

    app.listen(8082, () => {
      console.log("server is running on port 8082");
    });
  } catch (err) {
    console.error("failed to start server", err);
    process.exit(1);
  }
};

startServer();
