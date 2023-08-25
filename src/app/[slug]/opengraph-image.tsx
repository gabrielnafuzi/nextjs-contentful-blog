import { ImageResponse, NextResponse } from 'next/server'

import { getPageBySlug } from '@/lib/contentful/api/get-page-by-slug'

export const size = {
  width: 700,
  height: 400,
}

export const contentType = 'image/png'

type PageParams = {
  slug: string
}

type PageProps = {
  params: PageParams
}

export default async function Image({ params }: PageProps) {
  const page = await getPageBySlug(params.slug)

  if (!page) {
    return new NextResponse('Not found', { status: 404 })
  }

  return new ImageResponse(
    (
      <div tw="h-full w-full bg-[#020617] text-slate-50 px-20 flex flex-col justify-center">
        <h1 tw="mb-2">{page.fields.title}</h1>

        <p tw="mt-0 text-xl text-slate-200">{page.fields.description}</p>
      </div>
    ),
    {
      ...size,
    },
  )
}
