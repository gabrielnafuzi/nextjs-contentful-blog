import { type TypePostSkeleton } from '../__generated/types'
import { ctfClient } from '../client'
import { CTF_CONTENT_TYPE } from '../constants'

type PostEntrySkeleton = {
  fields: Pick<TypePostSkeleton['fields'], 'title' | 'slug' | 'description'>
} & Omit<TypePostSkeleton, 'fields'>

export const getPosts = () => {
  return ctfClient.getEntries<PostEntrySkeleton>({
    content_type: CTF_CONTENT_TYPE.POST,
    select: ['sys.id', 'fields.title', 'fields.slug', 'fields.description'],
  })
}
