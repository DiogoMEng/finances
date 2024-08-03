import { Query, QueryResult } from "mysql2";
import pool from "../db/connection";

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
