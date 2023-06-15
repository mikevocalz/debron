import {
  ActivityIndicator, Dimensions, Pressable, Animated
} from 'react-native';


import { useNavigation, useRouter, useSearchParams, Stack } from "expo-router";
import { FC, useState, useRef, useMemo, useEffect, useLayoutEffect } from 'react';
import { Text, View, Image } from 'app/design/TailwindComponents';

import { SliderBox } from "react-native-image-slider-box";
import dynamic from "next/dynamic";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';



const Hero: FC<any> = () => {

  const images = [
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",

  ];

  const width = Dimensions.get('window').width;

  const [imgIndex, setImgIndex] = useState<number>(0)


  const isCarousel = useRef<any>(null);



  return (

    <SliderBox
      images={images}
      ref={isCarousel}
      autoplay
      circleLoop
      useScrollView={true}
      autoplayInterval={4000}
      dotColor={'#6b9d97'}
      inactiveDotColor={'#fff'}
      sliderBoxHeight={240}
      imageComponentStyle={{
        borderRadius: 10,
        width: wp(100),
        height: hp(100),
      }}
      style={{
        marginTop: hp(2),
        borderRadius: 15,
        width: '96%',
        height: hp(24),
        alignSelf: 'center',
      }}
    />

    // <View className='relative aspect-video object-contain w-full h-full max-h-500  max-w-900 overflow-hidden'>
    // </View>
  )
}


export default dynamic(() => Promise.resolve(Hero), { ssr: false })
