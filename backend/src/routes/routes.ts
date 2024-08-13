import express from "express";
import {
  account,
  accountCreditExpenses,
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
router.get("/account/expenses/credit", accountCreditExpenses);

// ENTRIES
router.post("/account", receipt);
router.post("/account/expense", expense);
router.post("/account/expense/credit", credit);

// EXITS
router.delete("/account/expense/:idExpense", deleteExpenseFromAccount);

export default router;
