import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { userid } = await req.json();
  try {
    const client = await pool.connect();
    const response = await client.query(
      `SELECT * FROM Orders WHERE customerID = '${userid}' ORDER BY orderTime DESC LIMIT 5;`
    );
    // console.log(response.rows);
    return NextResponse.json({ message: response.rows }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
