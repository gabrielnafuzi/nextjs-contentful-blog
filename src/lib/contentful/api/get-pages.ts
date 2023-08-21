import { type TypePageSkeleton } from '../__generated/types'
import { ctfClient } from '../client'
import { CTF_CONTENT_TYPE } from '../constants'

type PageEntrySkeleton = {
  fields: Pick<TypePageSkeleton['fields'], 'title' | 'description' | 'slug'>
} & Omit<TypePageSkeleton, 'fields'>

export const getPages = async () => {
  const entries = await ctfClient.getEntries<PageEntrySkeleton>({
    content_type: CTF_CONTENT_TYPE.PAGE,
    select: ['sys.id', 'fields.title', 'fields.slug', 'fields.description'],
  })

  return entries.items
}
