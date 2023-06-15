
import { MotiLink } from 'solito/moti'
import Hero from 'app/components/Hero'
import { ScrollView, Image, Text, View, BR } from 'app/design/TailwindComponents'
import { Platform, useWindowDimensions, StyleSheet } from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

const isWeb = Platform.OS === 'web'

import Hero_IMG from '../../../../apps/expo/assets/images/der3.png'
import { TextLink } from 'app/design/typography';

export function AboutScreen() {
  const { width, height } = useWindowDimensions();


  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentInsetAdjustmentBehavior='always'
      nestedScrollEnabled
      scrollEnabled
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      className={` ${!isWeb ? 'bg-[#c7dedc]' : 'bg-transparent'} flex-1  max-w-7xl  min-w-screen `}>



      <View className="relative h-full  pt-2 sm:pt-0 mb-10">

        <View className="container mx-auto grid grid-cols-1 md:grid-cols-1 items-center">



          <View className='px-6 items-center h-full'>
            <Text className='mt-10 font-[BebasNeue-Bold] text-6xl'>About Me </Text>
            <Text allowFontScaling className="mt-5 md:text-[22px] text-center	font-[Poppins] pt-10 text-[18px]" style={{ flexShrink: 1, lineHeight: 40 }}>
              Growing up art was my visual language that helped me be able to communicate with my
              older brother who is autistic. He can’t communicate very well with me but we spent time
              together. I care about how Black stories are being told and bringing light to diverse
              Black groups in animation. In my designs, I reference hair textures, clothing patterns,
              diverse skin colors, and facial features in my own work because of this.
              My drive in creating authentic Black characters comes from watching Black
              Superheroes like Static Shock, Green Lantern and Black Panther. I’m passionate about
              creating Black characters to change the stereotypes of common tropes we’ve all seen
              through history by adding cultural elements based on where they come from. In my
              spare time I volunteer with ASIFA - South as the Programming and Events Coordinator.

              Learn more about about ASIFA - South and our events here:
              <BR />
              <TextLink rel="noopener noreferrer" target="_blank"
                href={'https://www.asifa-south.com/about'}> https://www.asifa-south.com/about</TextLink>

            </Text>


          </View>
        </View>
      </View>
    </ScrollView >
  )
}


const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: isWeb ? 800 : 200
  }
})