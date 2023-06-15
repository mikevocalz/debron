import {
  ActivityIndicator, Dimensions, Pressable, Animated, Platform
} from 'react-native';


import { useSearchParams, Stack, useNavigation } from "expo-router";
import { FC, useState, useRef, useMemo, useEffect, useLayoutEffect } from 'react';
import { Text, View, Image, Section, P, HR, Span, BR, Button, MotiLink, MotiPressable } from 'app/design/TailwindComponents';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import { useRouter, } from 'solito/router'

import Hero_IMG from '../../../apps/expo/assets/images/Profile-image.jpg';

const isWeb = Platform.OS === 'web'


const Mid: FC<any> = () => {
  const { push } = useRouter()

  // const onPress = () => {
  //   push({
  //     pathname: isWeb ? '/contact' : '/(tabs)/contact',
  //     query: {
  //       slug: 'drake',
  //     },
  //   })
  // }

  const onPress = () => {
    push({
      pathname: `/contact`,
      query: {

      },
    })
  }


  return (
    <>
      <View className="relative h-full  pt-10 sm:pt-0 mb-10">

        <View className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
          <View className='px-6'>
            <View className="flex flex-col items-center gap-3">
              <Span className="md:text-[24px]  text-[16px] font-[Poppins] items-center font-bold text-gray-800 ">
                3D Artist
              </Span>
              <BR className="w-28 bg-white h-[2px]" />
              <Text className="text-[56px] text-slate-700 text-center font-[BebasNeue-Bold] lg:text-[95px] xl:text-[125px] font-bold leading-tight  mt-4 ">
                Dominique
              </Text>
              <Text style={{ fontFamily: 'Bebas-Regular' }}
                className="text-[56px] text-slate-700 text-center font-[BebasNeue-Bold] lg:text-[95px] xl:text-[125px] font-bold leading-tight  mt-4 ">
                Ebron
              </Text>
            </View>
            <View className="flex gap-4 mt-3 sm:mt-6 items-center">

              <MotiPressable
                onPress={onPress}
                //onPress={() => navigate('contact')}
                // as={Button}
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
                className="font-medium text-[16px]  min-w-full md:min-w-[400px] mt-12 items-center px-24 py-2 md:py-4 md:px-10 rounded-xl bg-[#136f63]  relative  ">
                <Text selectable={false}
                  className='w-full text-white break-keep font-bold text-2xl text-center mb-2'>Get In Touch</Text>
              </MotiPressable>

            </View>

          </View>
          <View className="relative mt-12 ">
            <Image className="w-[650px] rounded-xl "
              unoptimized
              alt="image 1"
              width={wp(56)}
              height={hp(46)}
              src={Hero_IMG}
              style={{
                borderRadius: 20
              }}
            />
          </View>
        </View>
      </View>
    </>
  )
}


export default Mid
