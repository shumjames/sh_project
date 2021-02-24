import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import NavTitle from '../components/navTitle';
import HomeScreen from '../screens/Home/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import WalletScreen from '../screens/WalletScreen';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={LinksScreen}
        options={{
          title: 'Log in',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
            <BottomTab.Screen
        name="wallet"
        component={HomeScreen}
        options={{
          title: 'wallet',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
            <BottomTab.Screen
        name="IEOp"
        component={HomeScreen}
        options={{
          title: 'IEOp',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
            <BottomTab.Screen
        name="Asset"
        component={HomeScreen}
        options={{
          title: 'My',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return <NavTitle name='ios-planet' text='1234'></NavTitle>;
    case 'Login':
      return 'Log In';
    case 'Login':
      return 'Log In';
    case 'Login':
      return 'Log In';
    case 'Login':
      return 'Log In';
  }
}

