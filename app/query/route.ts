import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route

// API route handler for GET requests to /query
export async function GET() {
  // Name of the function must be GET for it to handle GET requests,
  // others if you want to handle POST requests, name it POST, etc.

  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// Done in Chapter 6
// Continues a little bit in Chapter 7
