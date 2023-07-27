import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import corsCustom from "./middlewares/cors";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { login, createUser, signOut } from "./controllers/user";
import { loginValidation, userValidation } from "./middlewares/validation";
import auth from "./middlewares/auth";
import { requestLogger, errorLogger } from "./middlewares/logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

mongoose.connect("mongodb://localhost:27017/test-kids-web");

app.use(corsCustom);

app.options("*", cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(requestLogger);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Сервер сейчас упадёт");
  }, 0);
});

app.post("/signin", loginValidation, login);
app.post("/signup", userValidation, createUser);
app.delete("/signout", signOut);

app.use(auth);

app.use("/users", require("./routes/users"));
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
