import { View, Platform, StyleSheet, TouchableOpacity, Text, primarycolor } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cart from '@/app/(Drawer)/(tabs)/Cart';
import { useContext } from 'react';
import StoreContext from '@/context/storeContext';

function TabBar({ state, descriptors, navigation }) {
  const { cart } = useContext(StoreContext);
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const icons = {
    Home: (props) => <AntDesign name="home" size={24} color="white"{...props} />,
    Search: (props) => <AntDesign name="search1" size={24} color="white"{...props} />,
    Cart: (props) => <AntDesign name="shoppingcart" size={24} color="white"  {...props} />,
    Profile: (props) => <AntDesign name="user" size={24} color="white"  {...props} />

  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;


        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.Tabcontainer}
          >

            {label === 'Cart' ?
              <View>
                {cart.length > 0 &&
                  <Text style={{
                    color: isFocused ? "#fff" : "#fff",
                    position: 'absolute',
                    left: 18,
                    top: -5,
                    zIndex: 10,
                    backgroundColor: 'red',
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    {cart.length}
                  </Text>
                }
                {icons[label] && icons[label]({ color: isFocused ? "white" : "white" })}
              </View> :
              icons[label] && icons[label]({ color: isFocused ? "white" : "white" })
            }

            <Text style={{ color: isFocused ? "white" : "white" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}





export default TabBar

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 50,
    borderCurver: 'continuous',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 10 },

  },
  Tabcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 50,

  }
})

