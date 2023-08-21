import Link from 'next/link'

import { getPosts } from '@/lib/contentful/api/get-posts'

export const revalidate = 60

export default async function Home() {
  const posts = await getPosts()

  if (!posts) {
    return <p className="mt-20 text-center">No posts found.</p>
  }

  return (
    <div className="prose dark:prose-invert">
      {posts.map((post) => (
        <article key={post.sys.id}>
          <Link href={`/posts/${post.fields.slug}`}>
            <h2>{post.fields.title}</h2>
          </Link>

          <p>{post.fields.description}</p>
        </article>
      ))}
    </div>
  )
}
