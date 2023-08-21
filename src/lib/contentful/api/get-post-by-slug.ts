import { type TypePostSkeleton } from '../__generated/types'
import { ctfClient } from '../client'
import { CTF_CONTENT_TYPE } from '../constants'

export const getPostBySlug = async (slug: string) => {
  const entries = await ctfClient.getEntries<TypePostSkeleton>({
    content_type: CTF_CONTENT_TYPE.POST,
    'fields.slug': slug,
  })

  if (!entries.items.length) {
    return null
  }

  return entries.items[0]
}
