
import { ScrollView, Image, Text, View, P } from 'app/design/TailwindComponents'
import { Platform, useWindowDimensions, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'

const isWeb = Platform.OS === 'web';

export function ContactScreen() {
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

      <Text className='mt-10 font-[BebasNeue-Bold] text-6xl '>Contact Me</Text>

      {isWeb &&
        <embed src="./DominiqueEbron_Resume.pdf"
          type="application/pdf" height="1000px" width='100%' className='mt-10' />
      }



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
    paddingBottom: 200
  }
})

