import "../global.css"
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from 'react';

import Colors from '@/constants/Colors';
import { SafeAreaView, StatusBar, Text, View, useColorScheme } from 'react-native';
import MainHeader from '@/components/components-search/main-header';

const statusHeight: number | undefined = StatusBar.currentHeight;

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    CairoBold: require('../assets/fonts/cario_font/Cairo-ExtraBold.ttf'),
    CairoLight: require('../assets/fonts/cario_font/Cairo-Light.ttf'),
    ...FontAwesome.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  React.useEffect(() => {
    if (error) throw error;
  }, [error]);

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const headerOpt : React.ComponentProps<typeof Stack.Screen>['options'] = { headerShown: false };

const query = new QueryClient()

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  console.log(statusHeight)
  return (
    <QueryClientProvider client={query}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          {/* <Stack.Screen name="search" options={{
             header:()=>{
              return (
               <View className={`bg-[${Colors[colorScheme ?? 'light'].headerBack}]`}>
                <Text style={{marginTop:statusHeight}}   className='mt-3'>hello</Text>
               </View>
              )
             }
          }} /> */}
          <Stack.Screen name="index" options={headerOpt} />
          <Stack.Screen name="search" options={headerOpt} />
          {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
