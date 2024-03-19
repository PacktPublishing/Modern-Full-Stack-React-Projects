import { revalidatePath } from 'next/cache'

export async function GET() {
  revalidatePath('/time')
  return Response.json({ ok: true })
}

export const dynamic = 'force-dynamic'
