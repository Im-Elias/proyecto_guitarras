import express from "express";
import { fileUpload } from "express-fileupload";
import handlebars from "express-handlebars";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.engine("handlebars", handlebars({ extname: ".hbs" }));
app.set("view engine", "handlebars");
