import { Article, Image, Text } from "app/design/TailwindComponents";
import { FC } from "react";
import { View } from "react-native";
import { MotiLink } from "solito/moti";

const CartItem: FC<any> = ({ title, subTitle, imgUrl }) => {
  return (
    <MotiLink
      href="/fernando"
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
      <Article className="max-w-[300px] sm:max-w-[400px] w-screen ">
        <View className="rounded-xl shadow-lg  bg-white relative flex items-end rounded-xl">
          <Image
            className="rounded-xl w-[100%] object-cover "
            contentFit="cover"
            unoptimized
            src={imgUrl} alt="Hotel Photo"
            width={190}
            height={150}
          />
        </View>
        <View className="flex-col ">
          <Text className='text-xl text-white font-bold px-3 mt-2'>{title.toUpperCase()}</Text>
          <Text className='text-lg text-gray-300 font-normal px-3 mb-3'>{subTitle}</Text>

        </View>
      </Article>
    </MotiLink>
  )
}

export default CartItem