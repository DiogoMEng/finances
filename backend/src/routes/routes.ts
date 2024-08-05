import express from "express";
import {
  account,
  accountCreditExpenses,
  accountExpenses,
} from "../controllers/accountInformation.controller";
import { expense, receipt } from "../controllers/accountMovement.controller";

const router = express.Router();

router.get("/accountinfo", account);
router.get("/accountinfo/expenses", accountExpenses);
router.get("/accountinfo/expenses/credit", accountCreditExpenses);

router.get("/account", receipt);
router.get("/account/expense", expense);

export default router;
