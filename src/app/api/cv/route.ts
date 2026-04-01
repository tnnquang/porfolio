import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { appCopy } from '@/config/copy'

export async function GET() {
  const cvDir = path.join(process.cwd(), 'public', 'cv')

  let files: string[] = []
  try {
    files = fs.readdirSync(cvDir).filter((f) => f.endsWith('.pdf'))
  } catch {
    return NextResponse.json({ error: appCopy.api.cv.directoryNotFound }, { status: 404 })
  }

  if (files.length === 0) {
    return NextResponse.json({ error: appCopy.api.cv.fileNotFound }, { status: 404 })
  }

  const filename = files[0]
  const filePath = path.join(cvDir, filename)
  const fileBuffer = fs.readFileSync(filePath)

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': fileBuffer.byteLength.toString()
    }
  })
}
