const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://phillipshim.dev'

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
