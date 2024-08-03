import express from "express";
import {
  account,
  accountExpenses,
} from "../controllers/accountInformation.controller";

const router = express.Router();

router.get("/accountinfo", account);
router.get("/accountinfo/expenses", accountExpenses);

export default router;
