import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { type } = await req.json();
  if (type !== "admin")
    return NextResponse.json({ message: "permission denied" }, { status: 403 });
  try {
    const client = await pool.connect();
    const response = await client.query(`SELECT* from users;`);
    const users = response.rows;
    return NextResponse.json({ message: users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
