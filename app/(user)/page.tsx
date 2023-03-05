import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'
import PreviewBlogList from '@/components/PreviewBlogList'
import BlogList from '@/components/BlogList'
import Banner from '@/components/Banner'

const query = groq`
  *[_type == 'post'] {
  ...,
  author->,
  categories[]->
  } | order(_createdAt desc)
`

export const revalidate = 30
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
    <div>
      <Banner />
      <BlogList posts={posts} />
    </div>
  )
}
