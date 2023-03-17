import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'
import PreviewBlogList from '@/components/PreviewBlogList'
import BlogList from '@/components/BlogList'

import Banner from '@/components/Banner'
import Intro from '@/components/Intro'

const query = groq`
  *[_type == 'post'] {
  ...,
  author->,
  categories[]->
  } | order(_createdAt desc)
`
export const revalidate = 10
export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role={'status'}>
            <p className={'animate-pulse text-center text-lg text-[#2563eb]'}>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }
  const posts = await client.fetch(query)

  return (
    <div className="grid grid-cols-1 px-4 md:grid-cols-12 md:px-0 lg:grid-cols-16">
      <main className="flex flex-col gap-y-12 pt-48 pb-12 md:col-span-6 md:col-start-6 md:gap-y-24 md:py-40 lg:col-span-8 lg:col-start-8">
        <Banner />
        <Intro />
        <BlogList posts={posts} />
      </main>
    </div>
  )
}
