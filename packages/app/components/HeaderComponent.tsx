import React, { ReactNode, Fragment } from 'react'
import { SolitoImage } from 'solito/image';
import Logo from '../../../apps/expo/assets/images/debron-logo.svg';

import SideBar from 'app/components/Sidebar';

import { StyleSheet, useWindowDimensions } from 'react-native'
import { Header, MotiLink, Nav, View, Text } from 'app/design/TailwindComponents';
import { Link } from 'solito/link';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { useRouter } from 'next/router'


const tabs: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/',
      isActive: (pathname) => pathname === '/',
      name: 'Home',
    },
    {
      pathname: '/work',
      isActive: (pathname) => pathname.startsWith('/work'),
      name: 'Work',
      protected: false,
    },
    {
      pathname: '/about',
      isActive: (pathname) => pathname.startsWith('/about'),
      name: 'About',
    },
    {
      pathname: '/contact',
      isActive: (pathname) => pathname.startsWith('/contact'),
      name: 'Contact',
    },
  ]

const HeaderComponent = () => {

  const { pathname } = useRouter()

  const { width, height } = useWindowDimensions();

  const isMobile = width < 600


  return (
    <Header
      className='bg-[#a17a74] h-[70px] fixed top-0 left-0 right-0 z-10 px-3 flex-row items-center justify-center' >
      <View
        className='flex-1  flex-row items-center justify-center max-w-7xl justify-between '>
        <Link
          href={'/'}
          // @ts-expect-error react-native-web only types
          hrefAttrs={{
            target: '_blank',
            rel: 'noreferrer',
          }}
        >
          <SolitoImage
            alt='pruLTD-logo'
            src={Logo}
            contentFit='contain'
            width={300} height={200}
            style={{
              marginLeft: 4,
              height: hp(20),
              width: wp(70),
              maxWidth: 300,
              maxHeight: 80
            }}
          />
        </Link>

        <Nav
          className='flex-row items-end gap-3 z-10'
        >
          {tabs.map((tab) => {
            const active = tab.isActive(pathname)
            // if (tab.protected && !auth) {
            //   return null
            // }
            return (

              <Fragment key={tab.pathname}>
                {!isMobile &&
                  <MotiLink
                    href={tab.pathname}
                    animate={({ hovered, pressed }) => {
                      'worklet'

                      return {
                        scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                      }
                    }}
                    transition={{
                      type: 'timing',
                      duration: 150,
                    }}
                  >
                    <Text selectable={false}
                      className={`mr-5 text-[26px] stroke-2 stroke-white drop-shadow-2xl uppercase font-black font-[Bebas-Regular] tracking-widest leading-90
    ${active ? 'text-[#000]' : 'text-[#136f63]'}
    
    `}        >
                      {tab.name}
                    </Text>
                  </MotiLink>
                }
              </Fragment>

            )
          })}
          <View className='h-[30px] items-center justify-center flex-row space-x-5'>
            {
              isMobile &&
              <SideBar />

            }</View>
        </Nav>

      </View>
    </Header>
  )
}

export default HeaderComponent