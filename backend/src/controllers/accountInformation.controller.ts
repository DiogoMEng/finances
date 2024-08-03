import { Request, Response } from "express";
import { accountDetails, expenses } from "../services/account.service";

export async function account(req: Request, res: Response): Promise<void> {
  const info = await accountDetails();

  res.json(info);
}

export async function accountExpenses(
  req: Request,
  res: Response
): Promise<void> {
  const info = await expenses();

  res.json(info);
}
