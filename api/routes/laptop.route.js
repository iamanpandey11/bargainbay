import express from "express";
import { test, create } from "../controllers/laptop.controller.js";

const router = express.Router();

router.get("/test", test);
router.get("/create", create);

export default router;
