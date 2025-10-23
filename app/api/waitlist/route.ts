import { NextResponse } from 'next/server'
import { z } from 'zod'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

const submissionSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  phobia: z.string().optional().nullable(),
  ambassador: z.boolean().optional().default(false),
})

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => ({}))
    const parsed = submissionSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Datos inválidos', issues: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const data = parsed.data

    const dir = path.join(process.cwd(), 'data')
    const file = path.join(dir, 'waitlist.json')

    await fs.mkdir(dir, { recursive: true })

    let current: unknown[] = []
    try {
      const content = await fs.readFile(file, 'utf8')
      current = JSON.parse(content)
      if (!Array.isArray(current)) current = []
    } catch {
      current = []
    }

    const entry = {
      id: randomUUID(),
      ...data,
      createdAt: new Date().toISOString(),
    }

    current.push(entry)

    await fs.writeFile(file, JSON.stringify(current, null, 2), 'utf8')

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error del servidor' },
      { status: 500 },
    )
  }
}
