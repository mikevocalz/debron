import { Text, View, Image } from "app/design/TailwindComponents"
import { FC, useState } from "react"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Drawer } from 'react-native-paper';
import { useRouter } from "solito/router";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


const SideBar: FC<any> = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState('first');

  const { push } = useRouter()

  return (
    <>
      {showSidebar ? (

        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-5 top-4 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Icon name="close" size={40} color="#fff" />
        </button>
      ) : (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-3 top-13"
        >
          <Icon name="menu" size={40} color="#fff" />
        </button>
      )}

      <View
        style={{
          width: '76vw',
          maxWidth: 430,
          alignItems: 'center'
        }}
        className={`top-0 shadow-3xl right-0 bg-[#6b9d97]  p-10 px-2 pt-[130px] text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
      >
        <Drawer.Section
          style={{
            width: '74vw',
            gap: 8,
            maxWidth: 360
          }}
          showDivider={false}>
          <Drawer.Item
            label={
              <Text className={`font-[BebasNeue-Bold] pt-2 ${active === 'first' ? 'text-white' : 'text-black'} font-black text-2xl uppercase`}>Home</Text>
            }
            active={active === 'first'}
            style={{
              backgroundColor: active === 'first' ? '#136f63' : '',
              paddingLeft: 30,
              paddingTop: 6
            }}
            onPress={() => {
              setActive('first');
              setShowSidebar(!showSidebar);
              push('/')
            }}
          />
          <Drawer.Item
            label={
              <Text className={`font-[BebasNeue-Bold] pt-2 ${active === 'second' ? 'text-white' : 'text-black'} font-black text-2xl uppercase`}>Work</Text>
            }
            active={active === 'second'}
            onPress={() => {
              setActive('second');
              setShowSidebar(!showSidebar);
              push('/work')
            }}
            style={{
              backgroundColor: active === 'second' ? '#136f63' : '',
              paddingLeft: 30,
              paddingTop: 6
            }}
          />
          <Drawer.Item
            label={
              <Text className={`font-[BebasNeue-Bold] pt-2 ${active === 'third' ? 'text-white' : 'text-black'} font-black text-2xl uppercase`}>About</Text>
            }
            active={active === 'third'}
            onPress={() => {
              setActive('third')
              setShowSidebar(!showSidebar);
              push('/about')
            }}
            style={{
              backgroundColor: active === 'third' ? '#136f63' : '',
              paddingLeft: 30,
              paddingTop: 6
            }}
          />
          <Drawer.Item
            label={
              <Text className={`font-[BebasNeue-Bold] pt-2 ${active === 'fourth' ? 'text-white' : 'text-black'} font-black text-2xl uppercase`} >Contact</Text>
            }
            active={active === 'fourth'}
            onPress={() => {
              setActive('fourth')
              setShowSidebar(!showSidebar);
              push('/contact')
            }}
            style={{
              backgroundColor: active === 'fourth' ? '#136f63' : '',
              paddingLeft: 30,
              paddingTop: 6
            }}
          />
        </Drawer.Section>


      </View>
    </>
  )
}

export default SideBar