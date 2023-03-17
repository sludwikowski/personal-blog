/* eslint-disable */
import Image from 'next/image'

import { z } from 'zod'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

import urlFor from '@/lib/urlFor'
import { Post } from '@/typings'

import SanityImage from '@/components/SanityImage'
import ClientSideRoute from '@/components/ClientSideRoute'

const bannerConfigDesktop: BannerConfig = {
  key: `desktop`,
  width: 800,
  height: 1400,
  className: `hidden md:block`,
}
const bannerConfigZ = z.object({
  key: z.union([z.literal(`mobile`), z.literal(`desktop`)]),
  width: z.number(),
  height: z.number(),
  className: z.string(),
})

type BannerConfig = z.infer<typeof bannerConfigZ>

type Props = { posts: Post[] }

function BlogList({ posts }: Props) {
  return (
    <article className="grid grid-cols-1 gap-y-6">
      {posts.map((post, index) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div className={'pointer-events-none fixed top-0 left-0 z-10 h-32 w-screen origin-top-left md:hidden'}>
            {index === 0 && (
              <>
                <div
                  className={`} pointer-events-none fixed top-0 z-10 h-32 w-screen origin-top-left
                    md:hidden`}
                >
                  <SanityImage
                    asset={urlFor(post.mainImage).url()}
                    width={800}
                    height={260}
                    loading="eager"
                    className="absolute inset-0 block h-full object-cover md:hidden md:min-h-screen"
                    alt={post.author.name}
                  />
                </div>
              </>
            )}
          </div>
          <div className={'group flex cursor-pointer flex-row'}>
            <div className={'absolute inset-0 my-auto sm:fixed md:right-auto md:h-5/6 md:w-4/12 lg:w-5/16'}>
              {index === 0 && (
                <Image
                  className={`${bannerConfigDesktop.className} absolute inset-0 h-full object-cover lg:ml-28`}
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  width={1400}
                  height={800}
                />
              )}
            </div>
          </div>
          <>
            <aside>
              <h2
                className="bg-gradient-to-r from-purple-800 to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat text-3xl font-black tracking-tighter text-blue-500 transition-[background-size]
                           duration-500
                           hover:bg-[length:100%_19px]
                           group-hover:bg-[length:100%_10px]
                           md:text-4xl md:leading-none"
              >
                {post.title}
              </h2>
              <div className="flex items-center space-x-3 font-light italic text-gray-300 dark:text-gray-400">
                <p className="text-sm">{post.author.name}</p>
                <p className={'text-sm'}>
                  {new Date(post._createdAt).toLocaleDateString('pl-PL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className={'mt-5 flex-1'}>
                <p className={'text-white line-clamp-3'}>{post.description}</p>
              </div>
              <div className={'flex flex-row items-center gap-y-1 gap-x-2 md:flex-row'}>
                {post.categories.map((category: any) => (
                  <div key={category.title} className={'mt-1 text-xs text-[#2563eb]'}>
                    <p className={'uppercase'}>{category.title}</p>
                  </div>
                ))}
              </div>
            </aside>
            <p className={'mt-5 flex items-center font-bold group-hover:underline'}>
              Czytaj więcej
              <ArrowUpRightIcon className={'ml-2 h-4 w-4'} />
            </p>
          </>
        </ClientSideRoute>
      ))}
    </article>
  )
}

export default BlogList
