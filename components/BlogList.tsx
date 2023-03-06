/* eslint-disable */
import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

import urlFor from '@/lib/urlFor'
import ClientSideRoute from '@/components/ClientSideRoute'

import { Post } from '@/typings'

type Props = { posts: Post[] }

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className={'mb-12 border-[#2563eb]'} />
      <div className={'grid grid-cols-1 gap-10 gap-y-16 px-10 pb-24 md:grid-cols-2'}>
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className={'group flex cursor-pointer flex-col'}>
              <div
                className={
                  'relative h-80 w-full drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105'
                }
              >
                <Image
                  className={'object-cover object-left lg:object-center'}
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div
                  className={
                    'absolute bottom-0 flex w-full justify-between rounded bg-black bg-opacity-20 p-5 drop-shadow-lg backdrop-blur-lg'
                  }
                >
                  <div>
                    <p className={'text-xl font-bold uppercase'}>{post.title}</p>
                    <div className="flex items-center space-x-3 font-light italic text-gray-300 dark:text-gray-400">
                      <span className="text-sm">{post.author.name}</span>
                      <p className={'justify-between'}>
                        {new Date(post._createdAt).toLocaleDateString('pl-PL', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'mt-5 flex-1'}>
                <p className={'text-white line-clamp-2'}>{post.description}</p>
              </div>
              <div className={'flex flex-col items-center gap-y-1 md:flex-row md:gap-x-2'}>
                {post.categories.map((category: any) => (
                  <div key={category.title} className={'line-clamp-3" mt-1 text-sm text-[#2563eb]'}>
                    <p className={'uppercase'}>{category.title}</p>
                  </div>
                ))}
              </div>
              <p className={'mt-5 flex items-center font-bold group-hover:underline'}>
                Czytaj więcej
                <ArrowUpRightIcon className={'ml-2 h-4 w-4'} />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default BlogList
