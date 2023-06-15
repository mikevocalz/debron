import { Article, Image, Text } from "app/design/TailwindComponents";
import { cardData, upcoming } from "app/store/data";
import { FC } from "react";
import { View } from "react-native";
import { MotiLink } from "solito/moti";

const CartPortait: FC<any> = ({ cardData }) => {
  return (
    <MotiLink
      href="/fernando"
      style={{
        width: 200,
        height: 300,
        zIndex: 100,
        //backgroundColor: 'red'
        marginHorizontal: 14,
      }}
      animate={({ hovered, pressed }) => {
        'worklet'

        return {
          scale: pressed ? 0.95 : hovered ? 1.03 : 1,
        }
      }}
      transition={{
        type: 'timing',
        duration: 150,
      }}
    >
      <Article className=" w-screen h-full rounded-xl ">

        <Image
          className="rounded-xl w-[100%] h-full"
          contentFit="cover"
          unoptimized
          src={cardData} alt="Hotel Photo"
          width={200}
          height={350}
          style={{
            width: 200,
            height: 350
          }}
        />

      </Article>
    </MotiLink>
  )
}

export default CartPortait