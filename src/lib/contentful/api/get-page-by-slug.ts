import { type TypePageSkeleton } from '../__generated/types'
import { ctfClient } from '../client'
import { CTF_CONTENT_TYPE } from '../constants'

export const getPageBySlug = async (slug: string) => {
  const entries = await ctfClient.getEntries<TypePageSkeleton>({
    content_type: CTF_CONTENT_TYPE.PAGE,
    'fields.slug': slug,
  })

  if (!entries.items.length) {
    return null
  }

  return entries.items[0]
}
