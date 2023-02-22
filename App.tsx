import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ConfettiCannon from 'react-native-confetti-cannon';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, PrincessSofia_400Regular} from '@expo-google-fonts/princess-sofia';

import { theme } from './src/utils/theme'

import Button from './src/components/Button';
import Label from './src/components/Label';
import ModalMenu from './src/components/ModalMenu';
import ModalResult from './src/components/ModalResult';

export default function App() {
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ openResult, setOpenResult ] = useState(false)
  
  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
  <ThemeProvider theme={theme}>
    <GestureHandlerRootView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {openResult && <ConfettiCannon count={50} origin={{x: -10, y: 0}} />}
        <Label text='Memória'  color={theme.colors.pink}  fontSize={48} />
        <Button backgroundColor='pink' onPress={() => setOpenResult(true)}>
          <Label text='Reiniciar' color={theme.colors.purple} fontSize={18} />
        </Button>
        <Button backgroundColor='purple' onPress={() => setOpenMenu(true)}>
          <Label text='Novo' color={theme.colors.pink} fontSize={18} />
        </Button>
        <ModalMenu
          open={openMenu}
          setOpen={setOpenMenu}
        />
        <ModalResult
          open={openResult}
          setOpen={setOpenResult}
          setOpenMenu={setOpenMenu}
        /> 
    </GestureHandlerRootView>
  </ThemeProvider>
  );
}

