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
  const info = await expensesDetails();

  res.json(info);
}

export async function accountCreditExpenses(
  req: Request,
  res: Response
): Promise<void> {
  const info = await creditExpensesDetails();

  res.json(info);
}
