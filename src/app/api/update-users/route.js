import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const {
    updateUserid,
    updateName,
    updateType,
    updateLatitude,
    updateLongitude,
    type,
  } = await req.json();
  try {
    const client = await pool.connect();
    if (type !== "admin") {
      return NextResponse.json(
        { message: "permission denied" },
        { status: 403 }
      );
    }
    if (
      !parseFloat(updateLatitude) ||
      parseFloat(updateLatitude) > 100 ||
      parseFloat(updateLatitude) < 0 ||
      !parseFloat(updateLongitude) ||
      parseFloat(updateLongitude) > 100 ||
      parseFloat(updateLongitude) < 0
    ) {
      return NextResponse.json(
        { message: "invalid lantitude or longitude" },
        { status: 400 }
      );
    }

    if (
      updateType !== "admin" &&
      updateType !== "costumer" &&
      updateType !== "manager"
    ) {
      return NextResponse.json({ message: "invalid type" }, { status: 400 });
    }
    const result = await client.query(
      `UPDATE users SET name = '${updateName}', latitude = ${updateLatitude}, longitude = ${updateLongitude}, type = '${updateType}' WHERE userid = ${updateUserid};`
    );
    return NextResponse.json({ message: "User Updated" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "fail update user" }, { status: 500 });
  }
}
