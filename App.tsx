import React from 'react'
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, PrincessSofia_400Regular} from '@expo-google-fonts/princess-sofia';

import { theme } from './src/utils/theme'

import MemoryCard from './src/components/MemoryCard';

export default function App() {
  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
  <ThemeProvider theme={theme}>
    <SafeAreaView style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <MemoryCard princessName="bela" selected={true} visible={true} />
      </SafeAreaView>
  </ThemeProvider>
  );
}

