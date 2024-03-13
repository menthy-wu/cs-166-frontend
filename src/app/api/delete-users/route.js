import { Pool } from "pg/lib";
import { config } from "../../../../config";

import { NextResponse } from "next/server";

const pool = new Pool(config);

export async function POST(req) {
  const {
    deleteUserid,

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
    const result = await client.query(
      `DELETE FROM users WHERE userid = ${deleteUserid};`
    );
    if (result.rowCount == 0)
      return NextResponse.json({ message: "User non exists" }, { status: 200 });
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "fail delete user" }, { status: 500 });
  }
}
