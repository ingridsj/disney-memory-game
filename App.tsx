import React from 'react'
import { SafeAreaView } from 'react-native';

import MemoryCard from './src/components/MemoryCard';

export default function App() {
  return (
    <SafeAreaView style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <MemoryCard princessName="bela" selected={true} visible={true} />
    </SafeAreaView>
  );
}

