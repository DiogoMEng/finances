import { Request, Response } from "express";
import { addExpense, addReceipt } from "../services/account.service";

export async function receipt(req: Request, res: Response): Promise<void> {
  const accountValue = req.body.accountValue;
  const receiptStatus = req.body.receiptStatus;

  const info = await addReceipt(accountValue, receiptStatus);

  res.json({ msg: "Recebimento Realizado", inputValues: info });
}

export async function expense(req: Request, res: Response): Promise<void> {
  const expense = req.body.expense;
  const expenseAmount = req.body.expenseAmount;
  const expenseStatus = req.body.expenseStatus;

  const info = await addExpense(expense, expenseAmount, expenseStatus);

  res.json({ msg: "Recebimento Realizado" });
}
