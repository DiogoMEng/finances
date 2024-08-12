import { Request, Response } from "express";
import {
  accountDetails,
  creditExpensesDetails,
  expensesDetails,
} from "../services/account.service";

export async function account(req: Request, res: Response): Promise<void> {
  const info = await accountDetails();

  res.json(info);
}

export async function accountExpenses(
  req: Request,
  res: Response
): Promise<void> {
  const infoExpenses = await expensesDetails();
  const infoCredit = await creditExpensesDetails();

  infoCredit.forEach(data => infoExpenses.push(data));

  res.json(infoExpenses);
}
