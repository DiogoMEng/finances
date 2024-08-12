import express from "express";
import {
  account,
  accountExpenses,
} from "../controllers/accountInformation.controller";
import {
  credit,
  deleteExpenseFromAccount,
  expense,
  receipt,
} from "../controllers/accountMovement.controller";

const router = express.Router();

// VIEWS
router.get("/account", account);
router.get("/account/expenses", accountExpenses);

// ENTRIES
router.post("/account", receipt);
router.post("/account/expense", expense);
router.post("/account/expense/credit", credit);

// EXITS
router.delete("/account/expense/:idExpense", deleteExpenseFromAccount);

export default router;
