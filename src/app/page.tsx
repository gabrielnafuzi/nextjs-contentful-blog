import Link from 'next/link'

import { getPosts } from '@/lib/contentful/api/get-posts'

export const revalidate = 60

export default async function Home() {
  const ctfPostsEntries = await getPosts()

  return (
    <div className="prose dark:prose-invert">
      {ctfPostsEntries.items.map((postEntry) => (
        <article key={postEntry.sys.id}>
          <Link href={`/posts/${postEntry.fields.slug}`}>
            <h2>{postEntry.fields.title}</h2>
          </Link>

          <p>{postEntry.fields.description}</p>
        </article>
      ))}
    </div>
  )
}
