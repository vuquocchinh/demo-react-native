import express from "express";
import { createWord, getAllWord, getWordType } from "../controllers/japaneseController.js";

const router = express.Router();

router.post("/create", createWord);
router.get("/all", getAllWord);
router.get("/getwordtype/:type", getWordType);

export default router;
