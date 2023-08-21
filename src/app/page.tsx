import Link from 'next/link'

const allPosts = [
  {
    title: 'Deploying Next.js Apps',
    description: 'How to deploy your Next.js apps on Vercel.',
    _id: '1',
    slug: 'deploying-nextjs-apps',
  },
]

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
