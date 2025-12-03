import type { SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Benjamin Rubio',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://benjaminrubio.github.io',
  author: 'BenjaR',
  locale: 'en-US',
  featuredPostCount: 0,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'mailto:ber2128@columbia.edu',
    label: 'Email',
  },
  {
    href: 'https://github.com/BenjaminRubio',
    label: 'GitHub',
  },
  {
    href: 'https://https://www.linkedin.com/in/benjamin-rubio-o',
    label: 'Linkedin',
  },
  {
    href: 'https://codeforces.com/profile/BenjaR',
    label: 'Codeforces',
  },
]
