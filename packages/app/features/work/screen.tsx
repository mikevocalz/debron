
'use client'
import { Text, View, FlatList } from 'app/design/TailwindComponents'
import { Platform, Dimensions, ListRenderItemInfo, } from 'react-native'

import { useRouter, } from 'solito/router'

import { useEffect, useState } from 'react'

import WorkItem from 'app/components/WorkItem';

import { SegmentedButtons } from 'react-native-paper';
import { useAppStore } from 'app/store/store';
import { Work } from 'app/sanity/types/Works';


const isWeb = Platform.OS === 'web'



const { width, height } = Dimensions.get('screen')


export function WorkScreen() {

  //const { width, height } = useWindowDimensions();
  const { push } = useRouter()

  const { work, fetchWork } = useAppStore()
  const setSelectedItem = useAppStore((state) => state.setSelectedItem);

  const [value, setValue] = useState('All');
  const [workData, setWork] = useState<Work[]>([])
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWork()
  }, [fetchWork])

  useEffect(() => {
    setWork(work)
  }, [work])


  console.log('app data:', workData)

  const filterData = (dataType: any) => {
    if (dataType !== 'All') {
      setWork([...work.filter(job => job.type === value)])
    } else {
      setWork(work)
    }
    setValue(dataType)
  }



  const onPress = (item) => {
    setSelectedItem(item);

    let id = item._id;
    let name = item.name;
    let slug = item.slug;
    let mainImageSrc = item.main_image;
    let content = item.content;
    let description = item.description;


    push({
      pathname: `/works/${id}`,
      query: {
        id: id,
        name: name,
        slug: slug,
        mainImageSrc: mainImageSrc,
        content: content,
        description: description,
        ...item
      }
    })
  }


  const renderItem = ({ item, index }: ListRenderItemInfo<any>) => (

    <WorkItem
      key={index}
      id={item?._id}
      name={item?.name}
      description={item.description}
      mainImage={item?.main_image}
      onPress={() => onPress(item)
      }
    />
  );

  return (
    <View
      style={{
        height: height,
        width: width,
        alignItems: 'center'
      }}

      className={` ${!isWeb ? 'bg-[#c7dedc]' : 'bg-transparent'} flex-1  max-w-7xl min-h-screen  min-w-screen `}>



      <FlatList
        showsHorizontalScrollIndicator={false}
        //className='bg-red-400 '
        data={workData}
        bounces={false}
        scrollEventThrottle={20}
        renderItem={(item: any) => renderItem(item)}
        keyExtractor={(item: any) => item._id.toString()}
        ListHeaderComponent={() =>
          <Text className='my-10 font-[BebasNeue-Bold] text-6xl'>Work</Text>
        }
        style={{
          // flex: 1,
          width: width,
          height: height,
          //overflow: 'visible',

        }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 30,
          alignItems: 'center',
          paddingBottom: 200,
          minHeight: height,
          width: width
        }}
        ItemSeparatorComponent={() => <View className='h-20' />}

      />

    </View >
  )
}


