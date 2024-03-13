import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const { type, userid, storeid, productName, numberofunits, pricePerUnit } =
    await req.json();
  try {
    const client = await pool.connect();
    if (type === "customer") {
      return NextResponse.json(
        { message: "permission denied" },
        { status: 403 }
      );
    }
    if (type === "manager") {
      const response = await client.query(
        `SELECT * FROM store WHERE managerid = ${userid};`
      );
      const stores = response.rows;
      if (stores.length === 0)
        return NextResponse.json(
          { message: "permission denied" },
          { status: 403 }
        );
    }
    const update = await client.query(
      `UPDATE Product SET numberOfUnits = ${numberofunits}, pricePerUnit = ${pricePerUnit} WHERE storeID = ${storeid} AND productName = '${productName}';`
    );
    console.log("update", update);
    const inert = await client.query(
      `INSERT INTO ProductUpdates (managerID, storeID, productName, updatedOn) VALUES ('${userid}', ${storeid}, '${productName}', CURRENT_TIMESTAMP);`
    );
    return NextResponse.json({ message: "Produc Updated" }, { status: 200 });
  } catch (err) {
    console.log(err);
    const detail = err.detail;
    console.log(detail);
    if (detail.includes('is not present in table "product".'))
      return NextResponse.json(
        { message: "invalid store id or product name" },
        { status: 500 }
      );
  }
}
