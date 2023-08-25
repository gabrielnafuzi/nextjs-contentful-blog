import { ImageResponse } from 'next/server'

import { getPosts } from '@/lib/contentful/api/get-posts'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const posts = await getPosts()

  if (!posts || posts.length === 0) {
    return (
      <div tw="h-full bg-[#020617] text-slate-50 px-20 flex flex-col justify-center">
        <h1>Next.js + Contentful Blog</h1>
      </div>
    )
  }

  return new ImageResponse(
    (
      <div tw="h-full w-full bg-[#020617] text-slate-50 px-20 flex flex-col justify-center">
        {posts.map((post) => (
          <div tw="flex flex-col" key={post.sys.id}>
            <h2 style={{ textDecoration: 'underline' }}>{post.fields.title}</h2>

            <p tw="mt-1">{post.fields.description}</p>
          </div>
        ))}
      </div>
    ),
    size,
  )
}
