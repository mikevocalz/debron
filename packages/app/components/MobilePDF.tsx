import { View, Text } from "app/design/TailwindComponents"
// @ts-ignore 
import Pdf from 'react-native-pdf';
import { ActivityIndicator, StyleSheet, Dimensions } from "react-native";
import { FC, Suspense } from "react";

import dynamic from "next/dynamic";

const source = require('../../../apps/expo/assets/DominiqueEbron_Resume.pdf');

const MobilePDF: FC = () => {
  return (
    <Suspense fallback={<Text>Still Loading…</Text>}>
      <View>
        <Pdf
          trustAllCerts={false}
          scale={1.0}
          minScale={0.5}
          maxScale={3.0}
          page={1}
          spacing={0}
          style={styles.pdf}
          source={source}
          singlePage
          enableAntialiasing
          renderActivityIndicator={() => (
            <ActivityIndicator color="black" size={'large'} />)
          }
        />
      </View>
    </Suspense>
  )
}

const styles = StyleSheet.create({
  pdf: {
    position: 'relative',
    marginTop: -80,
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})


export default MobilePDF
