import { groq } from 'next-sanity'
import Image from 'next/image'

import { PortableText } from '@portabletext/react'

import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'

import { RichTextComponents } from '@/components/RichTextComponents'

type Props = {
  params: {
    slug: string
  }
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
    <article className={'px-10 pt-16 pb-28'}>
      <section className={'space-y-2 border border-[#2563eb] '}>
        <div className={'min-h-56 relative flex flex-col justify-between md:flex-row'}>
          <div className={'absolute top-0 h-full w-full p-10 opacity-10 blur-sm'}>
            <Image
              className={'mx-auto object-cover object-center'}
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className={'w-full bg-[#2563eb] p-5'}>
            <div className={'flex flex-col justify-between gap-y-5 md:flex-row'}>
              <div>
                <h1 className={'text-4xl font-extrabold'}>{post.title}</h1>
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
                  <div>{/*author bio*/}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className={'pt-10 italic'}>{post.description}</h2>
              <div className={'mt-auto flex items-center justify-end space-x-2'}>
                {post.categories.map((category: any) => (
                  <p key={category._id} className={'mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold'}>
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className={'m-auto max-w-4xl py-8'}>
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </article>
  )
}

export default Post
