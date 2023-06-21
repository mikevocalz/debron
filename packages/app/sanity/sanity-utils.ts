import { createClient, groq } from 'next-sanity'

export const getWorks = async () => {
  const client = createClient({
    projectId: '73yurfrl',
    dataset: 'production',
    apiVersion: '2023-03-04',
  })

  return client.fetch(
    groq`*[_type == 'work']{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
"main_image": image.asset->url,
"author":   author->{name},
url,
content,
youtube,
description,
"images": images[].asset->url

}| order(_createdAt desc)
`
  )
}
