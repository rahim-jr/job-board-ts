// Temporary stub route handlers to avoid importing UploadThing's
// Next.js integration, which currently conflicts with Turbopack.
// Replace with the real createRouteHandler(...) usage once fixed.

export async function GET() {
  return new Response("UploadThing API temporarily disabled", { status: 503 });
}

export const POST = GET;
