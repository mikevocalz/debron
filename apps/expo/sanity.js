import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: '73yurfrl',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-01',
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client
