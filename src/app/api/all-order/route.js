import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { userid } = await req.json();
  try {
    const client = await pool.connect();
    const response = await client.query(
      `SELECT o.ordernumber, u.name, s.storeid, o.productname, o.ordertime, o.unitsordered FROM orders o, store s, users u WHERE s.managerid = ${userid} AND s.storeid = o.storeid AND u.userid = o.customerid;`
    );
    // console.log(response.rows);
    return NextResponse.json({ message: response.rows }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
