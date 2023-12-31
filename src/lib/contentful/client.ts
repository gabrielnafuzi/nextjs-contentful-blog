import { createClient } from 'contentful'

import { env } from '@/env.mjs'

export const ctfClient = createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_ACCESS_TOKEN,
})
