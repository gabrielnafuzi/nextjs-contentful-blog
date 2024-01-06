import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RichText } from '@/components/rich-text'
import { getPageBySlug } from '@/lib/contentful/api/get-page-by-slug'
import { getPages } from '@/lib/contentful/api/get-pages'
import { cn } from '@/utils/cn'

export const revalidate = 60

type PageParams = {
  slug: string
}

type PageProps = {
  params: PageParams
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageBySlug(params.slug)

  if (!page) {
    return notFound()
  }

  return {
    title: page.fields.title,
    description: page.fields.description,
    openGraph: {
      title: page.fields.title,
      description: page.fields.description,
    },
    twitter: {
      title: page.fields.title,
      description: page.fields.description,
    },
  }
}

export async function generateStaticParams(): Promise<Array<PageParams>> {
  const pages = await getPages()

  return pages.map((page) => ({
    slug: page.fields.slug,
  }))
}

export default async function Page({ params }: PageProps) {
  const page = await getPageBySlug(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <article className={cn('prose py-6', 'dark:prose-invert')}>
      <h1 className="mb-2">{page.fields.title}</h1>

      <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
        {page.fields.description}
      </p>

      <hr className="my-4" />

      <RichText document={page.fields.body} />
    </article>
  )
}
