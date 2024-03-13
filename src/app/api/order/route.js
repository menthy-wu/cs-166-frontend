import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);
const within30 = (lat1, long1, lat2, long2) => {
  const maximumDistance = 30.0 // / 69.0;
  const t1 = (lat1 - lat2) * (lat1 - lat2);
  const t2 = (long1 - long2) * (long1 - long2);
  return Math.sqrt(t1 + t2) <= maximumDistance;
};
export async function POST(req) {
  const { storeid, productName, numberofunits, latitude, longitude, userid } =
    await req.json();
  console.log(storeid, productName, numberofunits, latitude, longitude);
  try {
    const client = await pool.connect();
    const response = await client.query(
      `SELECT s.latitude, s.longitude, p.numberofunits FROM store s, product p WHERE p.storeid = s.storeid AND p.productname='${productName}' AND s.storeid = ${storeid};`
    );
    const products = response.rows;
    console.log(products);
    if (products.length > 0) {
      const storeLat = products[0].latitude;
      const storeLong = products[0].longitude;
      if (within30(latitude, longitude, storeLat, storeLong)) {
        if (products[0].numberofunits >= numberofunits) {
          const inset = await client.query(
            `INSERT INTO Orders (customerId, storeID, productName, unitsOrdered, orderTime) VALUES ('${userid}', ${storeid}, '${productName}', ${numberofunits}, CURRENT_TIMESTAMP)`
          );
          const update = await client.query(
            `UPDATE Product SET numberofunits = numberofunits - ${numberofunits} WHERE storeID = ${storeid} AND productName = '${productName}'`
          );
          return NextResponse.json(
            { message: "Order placed" },
            { status: 200 }
          );
        } else {
          return NextResponse.json(
            { message: "Not enough units" },
            { status: 500 }
          );
        }
      } else {
        return NextResponse.json(
          { message: "Store not in range" },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json({ message: "No such item" }, { status: 500 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
