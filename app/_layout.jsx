import { Stack, Tabs } from "expo-router";
import HeaderApp from '../components/HeaderApp';
import { Drawer } from 'expo-router/drawer';
import StoreProvider from '../context/storeProvider';







export default function RootLayout() {

  return (
    <StoreProvider>
      <Stack
        screenOptions={{
          header: (props) => <HeaderApp {...props} />,
          animation: "fade_from_bottom"
        }}

      >

        <Stack.Screen name="(Drawer)" options={{ headerShown: false }} />

      </Stack>
    </StoreProvider>

  )



}


