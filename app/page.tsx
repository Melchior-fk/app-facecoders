import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'faceCoders App',
  description: 'Site web regoupant un large éventail de développeur informatique.',
}

export default function Home() {
  return (
      <section className='flex items-start flex-col p-5 mb-16'>
        <h1>Categories</h1>
        <h1>Profile</h1>
        <h1>LoadMore</h1>
      </section>
  )
}
