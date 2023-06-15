
import { MotiLink } from 'solito/moti'
import Hero from 'app/components/Hero'
import { ScrollView, Image, Text } from 'app/design/TailwindComponents'
import { Platform, useWindowDimensions, StyleSheet } from 'react-native'


const isWeb = Platform.OS === 'web'


export function ModalScreen() {
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
      <Text>Modal</Text>
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