import { ImageResponse, NextResponse } from 'next/server'

import { getPostBySlug } from '@/lib/contentful/api/get-post-by-slug'

export const size = {
  width: 700,
  height: 400,
}

export const contentType = 'image/png'

type PostPageParams = {
  slug: string
}

type PostPageProps = {
  params: PostPageParams
}

export default async function Image({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return new NextResponse('Not found', { status: 404 })
  }

  return new ImageResponse(
    (
      <div tw="h-full w-full bg-[#020617] text-slate-50 px-20 flex flex-col justify-center">
        <h1 tw="mb-2">{post.fields.title}</h1>

        <p tw="mt-0 text-xl text-slate-200">{post.fields.description}</p>
      </div>
    ),
    {
      ...size,
    },
  )
}
