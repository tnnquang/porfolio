import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-neon-cyan focus:text-background focus:font-semibold'
      >
        Skip to main content
      </a>

      <Navbar />

      <main id='main-content' className='flex-1'>
        <Hero />

        {/* Dividers between sections */}
        <div className='section-divider' aria-hidden='true' />
        <About />

        <div className='section-divider' aria-hidden='true' />
        <TechStack />

        <div className='section-divider' aria-hidden='true' />
        <Experience />

        <div className='section-divider' aria-hidden='true' />
        <Projects />

        <div className='section-divider' aria-hidden='true' />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
