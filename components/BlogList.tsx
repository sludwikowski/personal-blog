import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

import urlFor from '@/lib/urlFor'
import ClientSideRoute from '@/components/ClientSideRoute'

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  posts: Post[]
}

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
                    <p className={'font-bold'}>{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('pl-PL', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className={'flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2'}>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {post.categories.map((category: any) => (
                      <div
                        key={category.title}
                        className={'rounded-full bg-[#2563eb] px-3 py-2 text-center text-sm font-semibold'}
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={'mt-5 flex-1'}>
                <p className={'text-lg font-bold underline'}>{post.title}</p>
                <p className={'text-gray-500 line-clamp-2'}>{post.description}</p>
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
