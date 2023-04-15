import React, { useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import { useFonts, PrincessSofia_400Regular} from '@expo-google-fonts/princess-sofia';
import { GameProvider } from 'hooks/game';

import { themeLight, themeDark } from 'utils/theme';
import Home from 'screens/Home';

export default function App() {
  const [ themeTitle, setThemeTitle ] = useState<'light' | 'dark'>('light')
  const [ theme, setTheme ] = useState<DefaultTheme>(themeLight)

  function toggleTheme() {
    if(themeTitle === 'light') {
      setThemeTitle('dark')
      setTheme(themeDark)
    } else {
      setThemeTitle('light')
      setTheme(themeLight)
    }
  }

  let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
    <GameProvider>
      <ThemeProvider theme={theme}>
        <Home toggleTheme={toggleTheme} themeTitle={themeTitle}/>
      </ThemeProvider>
    </GameProvider>
  );
}

