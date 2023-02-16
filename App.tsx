import React from 'react'
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/utils/theme'

import MemoryCard from './src/components/MemoryCard';

export default function App() {
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

