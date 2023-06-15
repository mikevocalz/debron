import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

import { Text, H1, H2, H3, H4, H5, H6, LI, P, BlockQuote, A, View, Image } from "app/design/TailwindComponents"
import { FC, ReactElement, ReactNode } from "react";
import { Link } from "solito/link";
import urlFor from "./urlFor";

export const Serializers: any = {
  types: {
    image: ({ value }: any) => {
      return (
        <View className="relative m-10 mx-auto h-96 w-full">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog post Image"
            fill
            width={0}
          />
        </View>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <LI className="ml-10 list-disc space-y-5 py-5">{children}</LI>
    )
  },
  block: {
    block: ({ node }: any) => {
      if (node._type === 'youtube') {
        console.log(`NODE: ${JSON.stringify(node)}`)
        const { url } = node
        const id = getYouTubeID(url)
        return (<YouTube videoId={String(id)} />)
      }
    },
    normal: ({ children }: any) => (
      <Text className="py-10 text-black">{children}</Text>
    ),
    h1: ({ children }: any) => (
      <H1 className="py-10 text-5xl font-bold text-black">{children}</H1>
    ),
    h2: ({ children }: any) => (
      <H2 className="py-10 text-4xl font-bold text-black">{children}</H2>
    ),
    h3: ({ children }: any) => (
      <H3 className="py-10 text-3xl font-bold text-black">{children}</H3>
    ),
    h4: ({ children }: any) => (
      <H4 className="py-10 text-2xl font-bold text-black">{children}</H4>
    ),
    h5: ({ children }: any) => (
      <H5 className="py-10 text-xl font-bold text-black">{children}</H5>
    ),
    h6: ({ children }: any) => (
      <H6 className="py-10 text-lg font-bold text-black">{children}</H6>
    ),
    blockquote: ({ children }: any) => (
      <BlockQuote className="my-5 border-l-4 border-l-emphasize py-5 pl-5 text-black">
        {children}
      </BlockQuote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-emphasize hover:decoration-black"
        >
          {children}
        </Link>
      )
    },
  },
}