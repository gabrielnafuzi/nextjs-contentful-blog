const defaultTitle = 'Next.js + Contentful Blog'

export const siteConfig = {
  title: {
    default: defaultTitle,
    template: `%s | ${defaultTitle}`,
  },
  description: 'A blog built with Next.js and Contentful',
  url: 'http://contentful-blog.gabrielmoraes.dev',
  author: 'Gabriel Moraes',
  links: {
    twitter: 'https://twitter.com/gabrielnafuzi',
    github: 'https://github.com/gabrielnafuzi',
  },
} as const
