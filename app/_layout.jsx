import { Stack, Tabs } from "expo-router";
import HeaderApp from '../components/HeaderApp';

export default function RootLayout() {

  return (
<Stack screenOptions={{ header: () => <HeaderApp /> }}>

</Stack>

  )



}


