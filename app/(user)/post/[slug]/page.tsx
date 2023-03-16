/* eslint-disable @typescript-eslint/no-explicit-any */
import { groq } from 'next-sanity'
import Image from 'next/image'
import type { Metadata } from 'next'

import Link from 'next/link'

import { PortableText } from '@portabletext/react'

import { client } from '@/lib/sanity.client'

import { Post } from '@/typings'

import urlFor from '@/lib/urlFor'

import { RichTextComponents } from '@/components/RichTextComponents'
import { PaperClipIcon } from '@heroicons/react/24/outline'

import TableOfContents from '@/components/TableOfContents'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 30
export async function generateStaticParams() {
  const query = groq`*[_type=='post'] 
  { slug }`

  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const siteMeta = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->,
  }
  `
  const post: Post = await client.fetch(siteMeta, { slug })
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post._createdAt,
      authors: [post.author.name],
    },
  }
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->,
  }
  `
  const post: Post = await client.fetch(query, { slug })

  return (
    <>
      <div className={' absolute inset-0 mt-32 h-32 bg-blue-500 md:fixed md:right-auto md:mt-0 md:w-1/6'}>
        <div className={''}>
          <Image
            className={'absolute inset-0 block h-full object-cover md:min-h-screen '}
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            width={800}
            height={260}
          />
        </div>
      </div>
      <div className="lg:grid-cols-16 grid grid-cols-1 gap-12 px-4 pb-32 md:mt-0 md:grid-cols-12 md:gap-0 md:px-32">
        <div className="grid-col-1 grid gap-6 pt-48 md:col-span-8 md:col-start-4 md:py-24 lg:col-span-8 lg:col-start-3">
          <h1 className="text-4xl font-black leading-none tracking-tighter text-blue-500 md:text-6xl">{post.title}</h1>
          <p className="max-w-xl font-mono leading-relaxed md:text-lg md:leading-loose">{post.description}</p>
          <div className="flex gap-3 text-center">
            {post.categories.map((category: any) => (
              <p key={category._id} className={'mt-4 text-sm font-semibold uppercase text-[#2563eb]'}>
                {category.title}
              </p>
            ))}
          </div>
          <Link
            className="flex items-center gap-2 font-mono text-xs text-blue-500 hover:bg-blue-500 hover:text-white dark:text-blue-200 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            href={'https://github.com/sludwikowski'}
          >
            <PaperClipIcon className="w-5" />
            Sprawdź również moje inne projekty :)
          </Link>
        </div>
        <div className="md:col-span-2 md:col-start-3 md:row-start-2 lg:col-span-3 lg:col-start-3">
          <TableOfContents blocks={post.body} />
        </div>
        <div className="md:col-span-6 md:col-start-6 md:row-start-2 lg:col-span-7 lg:col-start-6">
          <div className="mb-2">
            {new Date(post._createdAt).toLocaleDateString('pl-PL', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <div className="md:prose-lg lg:prose-xl prose-blue dark:prose-invert prose marker:text-blue-500 prose-strong:font-bold">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*// @ts-ignore*/}
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
          <div className="mt-3 rounded-2xl bg-[#2d3038] px-5 py-5 text-gray-400">
            <div className="flex flex-wrap items-center justify-center sm:flex-nowrap sm:space-x-6">
              <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
                <Image
                  className={'rounded-full'}
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <div className="mb-3">
                  <h4 className="mt-2 text-lg font-medium text-gray-300">{post.author.name}</h4>
                </div>
                <div className={''}>
                  {' '}
                  <PortableText value={post.author.bio} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              href={'/'}
              className={
                'x-5 bg-brand-secondary/20 mt-7 mb-7 flex justify-center rounded-full py-2 text-sm text-blue-600 '
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>{' '}
              <p className={'hover:underline'}> ...powrót</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
