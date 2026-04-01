import { NAME_TRANSLATE_KEY } from '@/data/portfolio'

export const appCopy = {
  brand: {
    shortName: 'TNNQ.dev'
  },
  seo: {
    title: `${NAME_TRANSLATE_KEY} — Frontend Developer`,
    description:
      'Frontend Developer 5+ năm kinh nghiệm với React.js và Next.js. Chuyên sâu tối ưu hiệu suất, UI tương tác phức tạp và React concurrent patterns.',
    openGraphDescription:
      'Frontend Developer 5+ năm kinh nghiệm với React.js và Next.js, xây dựng ứng dụng production trong fintech và thương mại điện tử.',
    twitterDescription: 'Frontend Developer 5+ năm kinh nghiệm với React.js và Next.js.',
    openGraphLocale: 'en_US' as const,
    twitterCard: 'summary_large_image' as const
  },
  accessibility: {
    skipToMainContent: 'Skip to main content',
    heroSection: 'Introduction',
    heroTechList: 'Key technologies',
    mainNavigation: 'Main navigation',
    navbarLogo: 'Quang Trần — back to top',
    mobileMenuOpen: 'Open menu',
    mobileMenuClose: 'Close menu',
    mobileNavigationMenu: 'Navigation menu',
    techCategories: 'Technology categories',
    highlights: 'Highlights',
    technologies: 'Technologies'
  },
  hero: {
    roleAriaPrefix: 'Role',
    featuredTech: ['React.js', 'Next.js', 'TypeScript', 'Node.js']
  },
  footer: {
    builtWithTech: {
      next: 'Next.js',
      tailwind: 'Tailwind',
      animation: 'anime.js'
    }
  },
  api: {
    cv: {
      directoryNotFound: 'CV directory not found',
      fileNotFound: 'No CV file found'
    }
  }
}
