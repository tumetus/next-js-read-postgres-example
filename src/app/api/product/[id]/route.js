import { sql } from "@vercel/postgres";

export async function GET(request, { params }) {
  const product = await sql`select * from products where id = ${params.id}`;
  return Response.json(product.rows.length > 0 ? product.rows[0] : null);
}
