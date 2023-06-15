import { View, Text, Article, Section, Image, MotiLink, ScrollView } from "app/design/TailwindComponents"
import { FC } from "react";
import { _ } from "lodash";
import CartPortrait from "../components/CardPortrait"
import { FlashList } from "@shopify/flash-list";
import { useWindowDimensions, Dimensions, FlatList } from "react-native";
import { images, upcoming } from "app/store/data";

type CardRowProps = {
  cardData?: string[],
  title?: string
}


const img = './ad.png'




const CardRow: FC<any> = ({ cardData, title }: CardRowProps) => {
  const width = Dimensions.get('screen');

  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return (
      <CartPortrait
        key={index}
        title={item.title}
        subTitle={item.subTitle}
        imgUrl={item.imgUrl}
        isNew={item.isNew}
      />
    );
  };


  return (

    <Section className="oy-[40px] w-full  px-4 py-5" >
      <Text className="my-8 ml-0 text-2xl font-black text-white ">{title}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        className=" h-[26%] w-full"
        contentContainerStyle={{
          overflow: 'visible',
          width: '100%',
          //flexGrow: 1,
          paddingVertical: 10,
          flexDirection:
            'row'
        }}
      >
        {cardData?.map((img, idx) => {
          return (
            <CartPortrait key={idx} cardData={img.imgUrl} />
          )
        }

        )

        }
      </ScrollView>
    </Section>
  )
}

export default CardRow