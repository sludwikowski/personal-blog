import { client } from './sanity.client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: never) {
  return builder.image(source)
}

export default urlFor
