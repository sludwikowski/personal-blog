import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

import { PortableText } from '@portabletext/react'

import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'

import { Post } from '@/typings'

import { RichTextComponents } from '@/components/RichTextComponents'

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

async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
  }
  `

  const post: Post = await client.fetch(query, { slug })

  return (
    <article className={'px-2 pt-16 pb-28'}>
      <section className={'space-y-2'}>
        <div className={' relative m-auto flex flex-col justify-between rounded-2xl md:min-h-[20rem] md:flex-row '}>
          <div className={'absolute top-0 h-full w-full rounded-2xl p-10 opacity-30 '}>
            <Image
              className={'mx-auto rounded-2xl object-cover object-center '}
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className={'w-full p-5 md:p-16'}>
            <div className={'flex flex-col justify-between gap-y-5 font-bold md:flex-row'}>
              <div>
                <h1 className={'text-4xl font-bold'}>{post.title}</h1>
                <p>
                  {' '}
                  {new Date(post._createdAt).toLocaleDateString('pl-PL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className={'flex items-center space-x-2'}>
                <Image
                  className={'rounded-full'}
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className={'w-64'}>
                  <h3 className={'text-lg font-bold'}>{post.author.name}</h3>
                </div>
              </div>
            </div>
            <div>
              <h2 className={'pt-12 text-center italic'}>{post.description}</h2>
            </div>
          </section>
        </div>
      </section>
      <div className={'m-auto max-w-4xl py-8'}>
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
      <div className="flex gap-3 text-center">
        {post.categories.map((category: any) => (
          <p key={category._id} className={'mt-4 text-sm font-semibold uppercase text-[#2563eb]'}>
            {category.title}
          </p>
        ))}
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
              <h4 className="mt-2 text-lg font-medium text-gray-300"> About {post.author.name}</h4>
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
          className={'x-5 bg-brand-secondary/20 mt-7 mb-7 flex justify-center rounded-full py-2 text-sm text-blue-600 '}
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
    </article>
  )
}

export default Post
