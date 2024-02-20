import express from "express";
import { test, getMobile } from "../controllers/mobile.controller.js";

const router = express.Router();

router.get("/test", test);
router.get("/get", getMobile);

export default router;
