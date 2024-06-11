import { Router } from "express";
import {
  home,
  about,
  contact,
  addGuitarForm,
} from "../controllers/controller.js";

const router = Router();

router.get("/", home);

router.get("/about", about);

router.get("/contact", contact);

router.get("/addGuitar", addGuitarForm);

export default router;
