
import { ReactNode } from 'react'

import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import { View } from '../../design/view';

import FooterComponent from 'app/components/FooterComponent';
import HeaderComponent from 'app/components/HeaderComponent';


import { useWindowDimensions } from 'react-native'


function WebLayout({ children }: { children: ReactNode }) {


  const { width, height } = useWindowDimensions();




  return (
    <>
      <View
        className="self-center container mx-auto min-w-screen items-center min-h-screen max-w-7xl mt-[110px] "
      > <HeaderComponent />
        {children}
      </View>
      <FooterComponent />
    </>
  )
}


export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })
