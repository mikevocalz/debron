import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Link } from 'expo-router';

import LogoTitle from 'app/components/LogoTitle'
import { ComponentProps } from 'react';
import { ColorfulTabBar } from 'react-navigation-tabbar-collection';
//import { Link } from 'solito/link'
import { Pressable } from 'app/design/TailwindComponents';


function TabBarIcon(props: {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs
      tabBar={(props: any) => <ColorfulTabBar {...props}
        colorPalette={{
          primary: '#c7dedc',
          secondary: "#000",
          success: "#198754",
          light: "#a17a74",    //Background Color
          dark: "#000"      //Foreground Color
        }}
      />}

      screenOptions={{
        tabBarActiveTintColor: '#c7dedc',
        tabBarInactiveTintColor: '#000000',
        tabBarLabelStyle: {
          fontFamily: 'BebasNue',
          fontSize: 16,
          textTransform: 'uppercase',
          marginBottom: -2,
          letterSpacing: 2,
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#a17a74",
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: "#a17a74",
        },
        headerTitle: () => <LogoTitle height={70} width={290} />

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      < Tabs.Screen
        name="two"
        options={{
          unmountOnBlur: true,
          freezeOnBlur: false,
          title: 'Work',
          tabBarIcon: ({ color }) => <TabBarIcon name="suitcase" color={color} />,
        }}
      />
      < Tabs.Screen
        name="three"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <TabBarIcon name="th-list" color={color} />,
        }}
      />
      < Tabs.Screen
        name="four"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <TabBarIcon name="envelope-o" color={color} />,
        }}
      />
    </Tabs >
  );
}
