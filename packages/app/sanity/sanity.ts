import ImageUrlBuilder from '@sanity/image-url'
import sanityClient  from "@sanity/client";


export const client = sanityClient({
    useCdn: true,
    projectId: '73yurfrl',
    dataset: 'production',
    apiVersion: '2023-03-04'

})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client
