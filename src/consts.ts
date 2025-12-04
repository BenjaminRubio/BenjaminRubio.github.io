import type { SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Benjamin Rubio',
  description:
    "Benjamin Rubio's personal website",
  href: 'https://benjaminrubio.github.io',
  author: 'BenjaR',
  locale: 'en-US',
  featuredPostCount: 0,
  postsPerPage: 5,
  profileImage: '/static/me25_sq.jpeg',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '/blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'mailto:ber2128@columbia.edu',
    label: 'email',
  },
  {
    href: 'https://github.com/BenjaminRubio',
    label: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/benjamin-rubio-o',
    label: 'linkedin',
  },
  {
    href: 'https://codeforces.com/profile/BenjaR',
    label: 'codeforces',
  },
]
