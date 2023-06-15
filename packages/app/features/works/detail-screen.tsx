'use client'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { useRouter } from 'solito/router'
import { Text, Button, ScrollView, View, Image } from 'app/design/TailwindComponents'
import { Platform, useWindowDimensions, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { PortableText } from '@portabletext/react';
import { PortableText as RNPortableText } from '@portabletext/react-native';
import { Serializers } from 'app/sanity/serializers';

import getYouTubeID from "get-youtube-id";

import { useAppStore } from 'app/store/store';
import ReactYouTube from 'app/components/ReactYouTube'
import RNYouTube from 'app/components/RNYouTube'



const { useParams } = createParam<{
  id: number,
  name: string,
  slug: string,
  mainImageSrc: string,
  content: any,
  description: any
}>()

const isWeb = Platform.OS === 'web'


export function UserDetailScreen() {
  const { back } = useRouter()
  const { width, height } = useWindowDimensions()

  const { params, setParams } = useParams()
  const { id, name, slug, mainImageSrc, content, description } = params


  const selectedItem = useAppStore((state) => state.selectedItem)
  const work = useAppStore((state) => state.work);
  const selected = work.find((item) => item._id === id);

  console.log('im selected:', selected?.youtube)

  const ytID = getYouTubeID(String(selected?.youtube));

  console.log('im ytube:', ytID)

  return (
    <>
      {!isWeb &&
        <Stack.Screen
          options={{
            headerBackVisible: false,
            headerTitleAlign: 'center',
            title: id?.toString(),
            headerLeft: () => (
              <FontAwesome
                name='chevron-left'
                style={{ paddingLeft: -3 }}
                size={24}
                onPress={() => {
                  back();
                }}
                color="#fff"
              />
            ),
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#a17a74',
            },
            headerTitleStyle: {
              //fontFamily: 'Real-SemiBold',
              color: '#fff',
            },

          }} />
      }
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentInsetAdjustmentBehavior='always'
        nestedScrollEnabled
        scrollEnabled
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        className={` ${!isWeb ? 'bg-[#c7dedc]' : 'bg-transparent'} flex-1  h-screen max-w-7xl  min-w-screen `}>

        <View className='relative w-full px-4 items-center max-h-[420px] mb-6'>
          <Image
            alt='main image'
            contentFit='cover'
            src={mainImageSrc}
            priority
            width={0}
            height={0}
            sizes="100vw"
            className='w-full h-full max-h-[420px] rounded-xl'
            style={{
              flexShrink: 1,
              aspectRatio: 16 / 8
            }}
          />
        </View>



        <View className='w-full mt-2 my-6 md:px-[5%] px-6 justify-start h-7 items-center flex-row '>
          <Text className="text-left font-bold ">Name:<Text className='ml-20 text-left font-normal'>{selected?.name}</Text>
          </Text>
        </View>

        <View className='w-full min-h-[40px] -mt-5  px-6 md:px-[5%] justify-start items-center flex-row '>
          <Text className="text-left font-bold mr-10 ">Description:</Text>
          {isWeb ?
            <PortableText value={selected?.description} components={Serializers} onMissingComponent={false}

            /> :

            <RNPortableText value={selected?.description} components={Serializers} onMissingComponent={false}

            />

          }
        </View>
        {selected?.youtube && isWeb &&
          <View
            style={{
              width: width,
              flexShrink: 1,
              aspectRatio: 16 / 8,
              maxHeight: 520,
              borderRadius: 14
            }}
            className='px-4  bg-white rounded-xl items-center mb-6 max-w-[96%] overflow-hidden  '>
            <ReactYouTube url={ytID} />
          </View>
        }

        {Platform.OS === 'android' && 'ios' && selected?.youtube &&
          <RNYouTube url={ytID} />

        }

        <View className='relative w-full px-4 items-center max-h-[420px] my-6'>
          {selected?.images &&
            selected?.images.map((imageSrc, index) => {
              return (
                <Image
                  key={index}
                  alt={'project image' + `${index}`}
                  contentFit='cover'
                  src={imageSrc}
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className='w-full h-full max-h-[430px] rounded-xl my-3'
                  style={{
                    flexShrink: 1,
                    aspectRatio: 16 / 8
                  }}
                />
              )

            })}
        </View>
      </ScrollView >
    </>
  )
}




const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: isWeb ? 500 : 140
  }
})