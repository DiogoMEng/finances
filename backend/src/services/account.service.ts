import { format, QueryResult } from "mysql2";
import pool from "../db/connection";
import { formattedDate } from "../utils/formattedDate";

// ACCOUNT VIEWS
export async function accountDetails(): Promise<QueryResult> {
  const conn = await pool.getConnection();

  const details_data = await conn.query(
    "SELECT c.dt_recebimento, c.valor_conta, c.status_recebimento FROM conta c"
  );
  const details = details_data[0];

  //   console.log("sem nada aqui", details);

  conn.release();

  return details;
}

export async function expenses(): Promise<QueryResult> {
  const conn = await pool.getConnection();

  const details_data = await conn.query(
    "SELECT d.dt_despesa, d.despesa, d.valor_despesa, d.status_despesa FROM despesas d"
  );
  const details = details_data[0];

  conn.release();

  return details;
}

export async function creditExpenses(): Promise<QueryResult> {
  const conn = await pool.getConnection();

  const details_data = await conn.query(
    "SELECT dc.dt_despesa_credito, dc.despesa_credito, dc.valor, dc.descricao FROM despesas_credito dc"
  );
  const details = details_data[0];

  conn.release();

  return details;
}

// ACCOUNT MOVEMENTS
export async function addReceipt(
  accountValue: number,
  receiptStatus: boolean
): Promise<QueryResult> {
  const conn = await pool.getConnection();

  const details_data = await conn.query(
    `INSERT INTO conta(dt_recebimento, valor_conta, status_recebimento) VALUES ("${formattedDate()}", ${accountValue}, ${receiptStatus})`
  );
  const details = details_data[0];

  conn.release();

  return details;
}

export async function addExpense(
  expense: string,
  expenseAmount: number,
  expenseStatus: boolean
): Promise<QueryResult> {
  const conn = await pool.getConnection();

  const expenseIdMonth =
    "SELECT DISTINTC d.idconta FROM despesas d, conta c WHERE MONTH(d.dt_despesa) = MONTH(c.dt_recebimento)";

  const details_data = await conn.query(
    `INSERT INTO despesas(dt_despesa, despesa, valor_despesa, status_despesa, idconta) VALUES ("${formattedDate()}", "${expense}", ${expenseAmount}, ${expenseStatus}, ${expenseIdMonth})`
  );
  const details = details_data[0];

  conn.release();

  return details;
}
