import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RichText } from '@/components/rich-text'
import { siteConfig } from '@/config/site'
import { getPostBySlug } from '@/lib/contentful/api/get-post-by-slug'
import { getPosts } from '@/lib/contentful/api/get-posts'
import { cn } from '@/utils'

export const revalidate = 60

type PostPageParams = {
  slug: string
}

type PostPageProps = {
  params: PostPageParams
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  return {
    title: post.fields.title,
    description: post.fields.description,
    openGraph: {
      title: post.fields.title,
      description: post.fields.description,
      url: `${siteConfig.url}/posts/${params.slug}`,
    },
    twitter: {
      title: post.fields.title,
      description: post.fields.description,
    },
    metadataBase: new URL(siteConfig.url),
  }
}

export async function generateStaticParams(): Promise<Array<PostPageParams>> {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.fields.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className={cn('prose py-6', 'dark:prose-invert')}>
      <h1 className="mb-2">{post.fields.title}</h1>

      <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
        {post.fields.description}
      </p>

      <hr className="my-4" />

      <RichText document={post.fields.body} />
    </article>
  )
}
