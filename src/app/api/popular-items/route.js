import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { storeid, type } = await req.json();
  if (type === "customer") {
    return NextResponse.json({ message: "permission denied" }, { status: 403 });
  }
  const validStores = [];
  console.log(storeid);
  try {
    const client = await pool.connect();
    const response = await client.query(
      `SELECT productName, SUM(unitsOrdered) FROM Orders WHERE storeID = ${storeid} GROUP BY productName ORDER BY SUM(unitsOrdered) DESC LIMIT 5;`
    );
    const products = response.rows;
    return NextResponse.json({ message: products }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
