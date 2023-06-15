/* eslint-disable react/no-unescaped-entities */

import { Text, MotiPressable, View } from "app/design/TailwindComponents";
import { Dimensions, Platform } from "react-native";
import { Card } from 'react-native-paper';

import { PortableText } from '@portabletext/react';
import { PortableText as RNPortableText } from '@portabletext/react-native';
import { Serializers } from 'app/sanity/serializers';

const { width, height } = Dimensions.get('screen')
const isWeb = Platform.OS === 'web'

const WorkItem = ({ id, name, onPress, mainImage, description }) => {
  return (
    <>
      <MotiPressable
        onPress={onPress}
        style={{
          flexShrink: 1,
          alignItems: 'center',
          width: width - 40,
          maxWidth: 920,
        }}
        animate={({ hovered, pressed }) => {
          'worklet'

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
          }
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      >
        <Card style={{
          flexShrink: 1, //?
          width: width,
          maxWidth: '100%',
          paddingHorizontal: 8,
          paddingTop: 8,

        }}>
          <Card.Cover source={{ uri: mainImage }}
            style={{ flexShrink: 1, width: width, maxWidth: '100%', aspectRatio: 16 / 8, height: 380, maxHeight: 420 }} />
          <Card.Title title={name} titleStyle={{ fontSize: 28, fontFamily: 'Bebas-Regular', marginTop: 4, paddingTop: 10 }} />
          <View className='w-full min-h-[50px] -my-4 px-5 justify-start items-center flex-row '>

            {isWeb ?
              <PortableText value={description} components={Serializers}
              /> :
              <RNPortableText value={description} components={Serializers}
              />

            }
          </View>
          <Card.Actions>
            <Text selectable={false}
              className={`mx-5 mb-2 px-8 py-2 rounded-full text-lg md:text-[26px] bg-[#136f63]  uppercase font-[Bebas-Regular] tracking-widest leading-90 text-white`} >
              Read More
            </Text>
          </Card.Actions>
        </Card>
      </MotiPressable>
    </>
  );
}

export default WorkItem