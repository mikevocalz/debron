import { View, Text, Article, Section, Image, MotiLink } from "app/design/TailwindComponents"
import { FC } from "react";
import { _ } from "lodash";
import CartItem from "../components/CardItem"
import { FlashList } from "@shopify/flash-list";
import { useWindowDimensions, Dimensions, FlatList } from "react-native";

type CardRowProps = {
  cardData?: string[],
  title?: string
}


const img = './ad.png'




const CardRow: FC<any> = ({ cardData, title }: CardRowProps) => {
  const width = Dimensions.get('screen');

  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return (
      <CartItem
        key={index}
        title={item.title}
        subTitle={item.subTitle}
        imgUrl={item.imgUrl}
        isNew={item.isNew}
      />
    );
  };


  return (

    <Section className=" w-screen   px-4" >
      <Text className="my-8 ml-0 text-2xl font-black text-white ">{title}</Text>

      <FlashList
        //contentInsetAdjustmentBehavior="automatic"
        scrollEventThrottle={20}
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={cardData}

        estimatedItemSize={10}

        style={{

          paddingBottom: 30,
          maxHeight: 400,
          width: '100%'
        }}
        contentContainerStyle={{
          paddingTop: 30,
          paddingBottom: 30,
          paddingHorizontal: 20,

        }}
        ItemSeparatorComponent={() => <View className="w-8" />}
        keyExtractor={(item: any, index: any) => item.id}
        renderItem={renderItem}
      // getItemLayout={(data, index) => (
      //   { length: 100, offset: 100 * index, index }
      // )}
      />

    </Section>
  )
}

export default CardRow