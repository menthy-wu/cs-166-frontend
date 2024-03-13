import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { storeid } = await req.json();
  const validStores = [];
  console.log(storeid);
  try {
    const client = await pool.connect();
    const response = await client.query(
      `SELECT productName, numberOfUnits, pricePerUnit FROM Product WHERE storeID = ${storeid};`
    );
    const products = response.rows;
    return NextResponse.json({ message: products }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
