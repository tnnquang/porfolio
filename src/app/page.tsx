import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { appCopy } from '@/config/copy'

export default function Home() {
  return (
    <>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-neon-cyan focus:text-background focus:font-semibold'
      >
        {appCopy.accessibility.skipToMainContent}
      </a>

      <Navbar />

      <main id='main-content' className='flex-1'>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
