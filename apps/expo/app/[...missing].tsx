import { Link, Stack } from 'expo-router';
import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <View className="flex-1 items-center justify-center p-3">
        <H1>Not Found</H1>

      </View>
    </>
  );
}

