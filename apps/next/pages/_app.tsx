import 'raf/polyfill'
import 'setimmediate'
import '../global.css'

import { Provider } from 'app/provider'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar';
import WebLayout from "../../../packages/app/layout/web";
import type { SolitoAppProps } from 'solito'
import dynamic from 'next/dynamic'

import React, { useEffect } from 'react';

import * as pdfjs from 'pdfjs-dist';

const src = new URL('pdfjs-dist/build/pdf.worker.js', import.meta.url)
pdfjs.GlobalWorkerOptions.workerSrc = src.toString()

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Footer } from 'app/design/TailwindComponents'

function MyApp({ Component, pageProps }: SolitoAppProps) {


  return (
    <>
      <Head>
        <title>Dominique Ebron</title>
        <meta name="description" content="Dominique Ebron Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <NextNprogress
          color={'#3f88c5'}
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
        />
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
        <Footer />
      </Provider>
    </>
  )
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false })


