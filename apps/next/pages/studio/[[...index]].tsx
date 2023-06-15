'use client'
import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { StudioLayout, StudioProvider, } from 'sanity'
import config from 'app/sanity/sanity.config'
import { View } from 'app/design/view'


export default function StudioPage() {
  return (
    <View className='w-full h-full'>
      <NextStudio config={config} >
        <StudioProvider config={config} >
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </View>
  )
}
