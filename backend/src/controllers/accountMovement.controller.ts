import { Request, Response } from "express";
import { addCreditExpense, addExpense, addReceipt } from "../services/account.service";

export async function receipt(req: Request, res: Response): Promise<void> {
  const accountValue = req.body.accountValue;
  const receiptStatus = req.body.receiptStatus;

  const info = await addReceipt(accountValue, receiptStatus);

  res.json({ msg: "Recebimento Realizado", addedValues: { 
    accountValue: accountValue, 
    receiptStatus: receiptStatus, 
  }});
}

export async function expense(req: Request, res: Response): Promise<void> {
  const expense = req.body.expense;
  const expenseAmount = req.body.expenseAmount;
  const expenseStatus = req.body.expenseStatus;

  const info = await addExpense(expense, expenseAmount, expenseStatus);

  res.json({ msg: "Recebimento Realizado", addedValues: { 
    expense: expense, 
    expenseAmount: expenseAmount, 
    expenseStatus: expenseStatus 
  }});
}

export async function credit(req: Request, res: Response): Promise<void> {
  const creditExpense = req.body.creditExpense;
  const creditExpenseAmount = req.body.creditExpenseAmount;
  const description = req.body.description;

  const info = await addCreditExpense(creditExpense, creditExpenseAmount, description);

  res.json({ msg: "Recebimento Realizado", addedValues: { 
    creditExpense: creditExpense, 
    creditExpenseAmount: creditExpenseAmount, 
    description: description 
  }});
}
