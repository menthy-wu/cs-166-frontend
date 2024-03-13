import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);
const within30 = (lat1, long1, lat2, long2) => {
  const maximumDistance = 30.0 / 69.0;
  const t1 = (lat1 - lat2) * (lat1 - lat2);
  const t2 = (long1 - long2) * (long1 - long2);
  return Math.sqrt(t1 + t2) <= maximumDistance;
};
export async function POST(req) {
  const { latitude, longitude } = await req.json();
  const validStores = [];
  try {
    const client = await pool.connect();
    const response = await client.query("SELECT * FROM Store;");
    const stores = response.rows;
    stores.map((store) => {
      if (within30(latitude, longitude, store.latitude, store.longitude)) {
        validStores.push(store);
      }
    });
    return NextResponse.json({ message: validStores }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
