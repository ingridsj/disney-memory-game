import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, PrincessSofia_400Regular} from '@expo-google-fonts/princess-sofia';

import { theme } from './src/utils/theme'

import MemoryCard from './src/components/MemoryCard';
import Button from './src/components/Button';
import { View } from 'react-native';
import Modal from './src/components/Modal';
import Label from './src/components/Label';

export default function App() {
  const [ open, setOpen ] = useState(false)
  
  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
  <ThemeProvider theme={theme}>
    <GestureHandlerRootView style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
        <MemoryCard princessName='bela' selected={true} visible={true} />
        <Button backgroundColor='purple' onPress={() => setOpen(true)}>
          <Label 
            text='Novo' 
            color={theme.colors.pink} 
            fontFamily={theme.fonts.princessSofia}
          />
        </Button>
        <Modal open={open} onClosed={() => setOpen(false)}> 
          <View>
            <Label 
              text='Tamanhos:' 
              color={theme.colors.purple} 
              fontFamily={theme.fonts.princessSofia}
            />
          </View>
        </Modal>
      </GestureHandlerRootView>
  </ThemeProvider>
  );
}

