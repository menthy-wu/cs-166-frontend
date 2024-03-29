import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { name, password } = await req.json();
  const query = `SELECT * FROM USERS WHERE name = '${name}' AND password = '${password}'`;
  try {
    const client = await pool.connect();
    const response = await client.query(query);
    return NextResponse.json({ message: response.rows[0] }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
