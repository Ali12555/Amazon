import { Stack, Tabs } from "expo-router";
import HeaderApp from '../components/HeaderApp';
import { Drawer } from 'expo-router/drawer';






export default function RootLayout() {

  return (





    <Stack
      screenOptions={{ header: (props) => <HeaderApp {...props} /> }}
    >

      <Stack.Screen name="(Drawer)" options={{ headerShown: false }} />

    </Stack>






  )



}



