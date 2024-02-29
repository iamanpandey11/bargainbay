import express from "express";
import { test, getLaptop } from "../controllers/laptop.controller.js";

const router = express.Router();

router.get("/test", test);
router.get("/get", getLaptop);

export default router;
