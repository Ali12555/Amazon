import { View, Platform , StyleSheet, TouchableOpacity, Text,primarycolor} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
    const icons ={
    Home:(props)=><AntDesign name="home" size={24} color="white"{...props} />,
    Search:(props)=><AntDesign name="search1" size={24} color="white"{...props} />,
    Settings:(props)=><AntDesign name="setting" size={24} color="white"  {...props} />,
    Profile:(props)=><AntDesign name="user" size={24} color="white"  {...props} />
      
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
              
            {icons[label]({ color: isFocused ? "#9400d3" : "white" })}
           
            <Text style={{ color: isFocused ? "#9400d3" : "white" }}>
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
        bottom:25,
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

