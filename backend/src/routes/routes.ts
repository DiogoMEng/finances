import express from "express";
import {
  account,
  accountCreditExpenses,
  accountExpenses,
} from "../controllers/accountInformation.controller";
import { credit, expense, receipt } from "../controllers/accountMovement.controller";

const router = express.Router();

router.get("/account", account);
router.get("/account/expenses", accountExpenses);
router.get("/account/expenses/credit", accountCreditExpenses);

router.post("/account", receipt);
router.post("/account/expense", expense);
router.post("/account/expense/credit", credit);

export default router;
